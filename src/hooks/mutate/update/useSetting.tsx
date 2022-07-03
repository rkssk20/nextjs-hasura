import { useMutation, useQueryClient } from 'react-query'
import { definitions } from '@/types/supabase'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { accountState, notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

type Props = {
  newUserName: string
  newDetails: string | null
}

type ExistingType =
  | {
      id: string
      username: string
      avatar?: string | undefined
      details?: string | undefined
      follow_count: number
      follower_count: number
    }
  | undefined

const mutateSetting = async ({ newUserName, newDetails }: Props) => {
  const id = supabase.auth.user()?.id
  if (!id) throw 'error'

  const update: {
    [prop: string]: string | null
  } = {}

  if (newUserName) update.username = newUserName
  if (newUserName) update.details = newDetails

  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .update(update, {
      returning: 'minimal',
    })
    .eq('id', id)

  if (error) throw error

  return data
}

const useSetting = ({ newUserName, newDetails }: Props) => {
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(() => mutateSetting({ newUserName, newDetails }), {
    onSuccess: () => {
      const existing: ExistingType = queryClient.getQueryData(['profiles_details'])

      // 完了通知
      setNotificate({
        open: true,
        message: 'プロフィールを変更しました',
      })

      // キャッシュがあるなら変更
      if (existing) {
        queryClient.setQueryData('profiles_details', {
          ...existing,
          username: newUserName,
          details: newDetails,
        })
      }

      // ユーザーの状態を変更
      setAccount({
        loading: false,
        data: {
          username: newUserName,
          avatar: account.data?.avatar,
        },
      })
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
  })

  return { isLoading, mutate }
}

export default useSetting
