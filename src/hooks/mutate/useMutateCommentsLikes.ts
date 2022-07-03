import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

type Props = {
  comment_id: number
  id: number | undefined
}

const Mutate = async ({ comment_id, id }: Props) => {
  const { data, error } = id
    ? await supabase
        .from<definitions['comments_likes']>('comments_likes')
        .delete({ returning: 'minimal' })
        .eq('id', id)
    : await supabase
        .from<definitions['comments_likes']>('comments_likes')
        .insert({ comment_id })
        .single()

  if (error) throw error

  return data as unknown as definitions['comments_likes'] | null
}

const useMutateCommentsLikes = (path: string, comment_id: number) => {
  const setNotificate = useSetRecoilState(notificateState)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    (id: number | undefined) => Mutate({ comment_id, id }),
    {
      onSuccess: (data) => {
        const cache_key = ['comments', path]

        const existing:
          | InfiniteData<
              [
                definitions['comments'] & {
                  comments_likes: definitions['comments_likes'][] | undefined
                },
              ]
            >
          | undefined = queryClient.getQueryData(cache_key)

        if (existing) {
          // いいねした場合
          if (data) {
            // キャッシュから対象のコメントを検索
            const index = existing.pages.map((page) =>
              page.findIndex((item) => item.id === data?.comment_id),
            )
            const page = index.findIndex((item) => item !== -1)

            // キャッシュのいいね数を+1
            existing.pages[page][index[page]].like_count =
              existing.pages[page][index[page]].like_count + 1
            // キャッシュにいいねを格納
            existing.pages[page][index[page]].comments_likes = [
              {
                id: data.id,
                user_id: data.user_id,
                comment_id: data.comment_id,
              },
            ]

            // キャッシュを更新
            queryClient.setQueryData(['comments', path], {
              pageParams: existing.pageParams,
              pages: existing.pages,
            })

            // いいねを取り消した場合
          } else {
            // キャッシュから対象のコメントを検索
            const index = existing.pages.map((page) =>
              page.findIndex((item) => item.id === comment_id),
            )
            const page = index.findIndex((item) => item !== -1)

            // キャッシュのいいね数を-1
            existing.pages[page][index[page]].like_count =
              existing.pages[page][index[page]].like_count - 1
            // キャッシュからいいねを削除
            existing.pages[page][index[page]].comments_likes = []

            // キャッシュを更新
            queryClient.setQueryData(['comments', path], {
              pageParams: existing.pageParams,
              pages: existing.pages,
            })
          }

          if (data) {
            // 通知
            setNotificate({
              open: true,
              message: 'コメントにいいねしました。',
            })
          } else {
            // 通知
            setNotificate({
              open: true,
              message: 'いいねを取り消しました。',
            })
          }
        }
      },
      onError: () => {
        setNotificate({
          open: true,
          message: 'エラーが発生しました。',
        })
      },
    },
  )

  return { mutate, isLoading }
}

export default useMutateCommentsLikes
