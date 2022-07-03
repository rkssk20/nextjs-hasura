import { useMutation, useQueryClient } from 'react-query'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { nanoid } from 'nanoid'
import type { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import { accountState, notificateState } from '@/lib/recoil'

type MutateType = {
  blob: Blob
  type: string
}

const mutateAvatar = async ({ blob, type }: MutateType) => {
  const { error, data } = await supabase.storage
    .from('avatars')
    .upload(`public/${nanoid()}.${type}`, blob, {
      // 1年キャッシュ
      cacheControl: '31536000',
    })

  if (error) throw error

  return data
}

const useAvatarUpload = (handleClose: () => void) => {
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    ({ blob, type }: MutateType) => mutateAvatar({ blob, type }),
    {
      onSuccess: (data) => {
        // アカウントデータのアバターを更新
        setAccount({
          loading: false,
          data: {
            username: account.data?.username ?? '',
            avatar: process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/' + data?.Key,
          },
        })

        const existing: definitions['profiles'] | undefined =
          queryClient.getQueryData('profiles_details')

        // キャッシュがあるなら追加
        if (existing) {
          queryClient.setQueryData('profiles_etails', {
            ...existing,
            avatar: data?.Key,
          })
        }

        // 切り抜きダイアログを閉じる
        handleClose()

        // 通知
        setNotificate({
          open: true,
          message: 'アイコンをアップロードしました',
        })
      },
      onError: () => {
        setNotificate({
          open: true,
          message: 'アップロードに失敗しました',
        })
      },
    },
  )

  return { mutate, isLoading }
}

export default useAvatarUpload
