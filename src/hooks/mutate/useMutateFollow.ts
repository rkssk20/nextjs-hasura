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
  // フォローを外す
  if (id) {
    const { data, error } = await supabase
      .from<definitions['follows']>('follows')
      .delete({ returning: 'minimal' })
      .eq('id', id)

    if (error) throw error

    return data as unknown as null

    // フォローする
  } else {
    const { data, error } = await supabase
      .from<definitions['follows']>('follows')
      .insert({ follower_id: path })
      .single()

    if (error) throw error

    return data
  }
}

const useMutateFollow = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation((id: number | undefined) => Mutate({ path, id }), {
    onSuccess: (data) => {
      // フォローした場合、キャッシュに追加
      if (data) {
        queryClient.setQueryData(['following', path], {
          id: data?.id,
        })

        setNotificate({
          open: true,
          message: 'フォローしました。',
        })

        // フォローを外した場合、キャッシュから削除
      } else {
        queryClient.removeQueries(['following', path], { exact: true })

        setNotificate({
          open: true,
          message: 'フォローを外しました。',
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

export default useMutateFollow
