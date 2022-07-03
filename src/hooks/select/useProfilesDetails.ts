import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

export const FetchData = async (id: string | undefined) => {
  if (id === undefined) throw 'error'

  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .select('username, avatar, details')
    .eq('id', id)
    .single()

  if (error) throw error

  return data
}

const useProfilesDetails = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching } = useQuery(
    ['profiles_details'],
    () => FetchData(supabase.auth.user()?.id),
    {
      onError: () => {
        setNotificate({
          open: true,
          message: 'エラーが発生しました。',
        })
      },
    },
  )

  return { data, isFetching }
}

export default useProfilesDetails
