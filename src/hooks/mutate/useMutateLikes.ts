import { Dispatch, SetStateAction } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

type Props = {
  path: string
  id: number | undefined
}

const Mutate = async ({ path, id }: Props) => {
  const { data, error } = id
    ? await supabase
        .from<definitions['likes']>('likes')
        .delete({ returning: 'minimal' })
        .eq('id', id)
    : await supabase.from<definitions['likes']>('likes').insert({ articles_id: path }).single()

  if (error) throw error

  return data as unknown as definitions['likes'] | null
}

const useMutateLikes = (path: string, setLikeCountState: Dispatch<SetStateAction<number>>) => {
  const setNotificate = useSetRecoilState(notificateState)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation((id: number | undefined) => Mutate({ path, id }), {
    onSuccess: (data) => {
      const cache_key = ['likes', path]

      const existing: definitions['likes'] | undefined = queryClient.getQueryData(cache_key)

      // いいねした場合
      if (data) {
        if (!existing) {
          // キャッシュにいいねを追加
          queryClient.setQueryData(cache_key, {
            id: data.id,
          })
        }

        // 表示されているいいね数を+1
        setLikeCountState((prev) => prev + 1)

        // 通知
        setNotificate({
          open: true,
          message: '記事にいいねしました。',
        })

        // いいねを削除した場合
      } else {
        if (existing) {
          // キャッシュからいいねを削除
          queryClient.removeQueries(cache_key, { exact: true })
        }

        // 表示されているいいね数を-1
        setLikeCountState((prev) => prev - 1)

        // 通知
        setNotificate({
          open: true,
          message: 'いいねを取り消しました。',
        })
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
  })

  return { mutate, isLoading }
}

export default useMutateLikes
