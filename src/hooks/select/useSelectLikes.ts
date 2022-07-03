import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

const FetchData = async (path: string) => {
  const id = supabase.auth.user()?.id

  if (!id) throw 'error'

  const { data, error } = await supabase
    .from<definitions['likes']>('likes')
    .select('id')
    .match({ articles_id: path, user_id: id })

  if (error) throw error

  return data[0]
}

const useSelectLikes = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching } = useQuery(['likes', path], () => FetchData(path), {
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
  })

  return { data, isFetching }
}

export default useSelectLikes
