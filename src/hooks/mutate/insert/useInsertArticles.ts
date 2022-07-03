import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { nanoid } from 'nanoid'
import type { ArticleType } from '@/types/types'
import { supabase } from '@/lib/supabaseClient'
import { accountState, notificateState, draftState } from '@/lib/recoil'

type MutateType = {
  title: string
  details: string
  image: Blob | null
  categories: number[]
}

const mutateArticles = async ({ title, details, image, categories }: MutateType) => {
  let image_result: string | undefined

  // 画像があれば投稿
  if (image) {
    const type = image.type
    const index = type.indexOf('/')

    const { data, error } = await supabase.storage
      .from('articles')
      .upload(`public/${nanoid()}.${type.substring(index + 1)}`, image, {
        // 1年キャッシュ
        cacheControl: '31536000',
        upsert: false,
      })

    if (error) throw error

    image_result = data?.Key
  }

  const payload = {
    qid: nanoid(),
    title,
    details,
    image: image_result ?? null,
    categories,
  }

  // 記事の投稿
  const { data: articlesData, error } = await supabase.rpc('handle_insert_articles', payload)

  if (error) throw error

  return payload
}

const useInsertArticles = () => {
  const [loading, setLoading] = useState(false)
  const setNotificate = useSetRecoilState(notificateState)
  const setDraft = useSetRecoilState(draftState)
  const queryClient = useQueryClient()
  const account = useRecoilValue(accountState)
  const router = useRouter()

  const { mutate, isLoading } = useMutation(
    ({ title, details, image, categories }: MutateType) =>
      mutateArticles({
        title,
        details,
        image,
        categories,
      }),
    {
      onSuccess: (data) => {
        const key = ['person_articles', supabase.auth.user()?.id]

        const existing: InfiniteData<ArticleType[]> | undefined = queryClient.getQueryData(key)

        // 自分の投稿一覧に追加
        if (existing) {
          queryClient.setQueryData(key, {
            pageParams: existing.pageParams,
            pages: [
              [
                {
                  ...data,
                  details: data.details.slice(0, 50),
                  like_count: 0,
                  comment_count: 0,
                  id: data.qid,
                  username: account.data?.username,
                  avatar: account.data?.avatar?.replace(
                    process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/',
                    '',
                  ),
                },
              ],
              ...existing.pages,
            ],
          })
        }

        // 下書きを削除
        setDraft({
          title: '',
          details: '',
          categories: [],
        })

        router.push(`/account/${supabase.auth.user()?.id}`).then(() => {
          // 通知
          setNotificate({
            open: true,
            message: '記事を投稿しました。',
          })
        })
      },
      onError: () => {
        setNotificate({
          open: true,
          message: '投稿にエラーが発生しました。',
        })

        setLoading(false)
      },
    },
  )

  // 読み込み
  useEffect(() => {
    if(isLoading) setLoading(isLoading)
  }, [isLoading])

  return { mutate, loading }
}

export default useInsertArticles
