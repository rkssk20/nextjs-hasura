import type { Dispatch, SetStateAction } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useMutation } from '@apollo/client'
import { UPDATE_PROFILES_AVATAR } from '@/graphql/mutate'
import { accountState, notificateState } from '@/lib/recoil'


const useAvatarUpload = (setSelectImage: Dispatch<SetStateAction<string>>) => {
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)

  const [mutateFunction, { loading }] = useMutation(UPDATE_PROFILES_AVATAR, {
    onCompleted: (data) => {
      setNotificate({
        open: true,
        message: 'プロフィール画像を変更しました'
      })

      setAccount({
        loading: false,
        data: {
          id: account.data?.id as string,
          username: account.data?.username as string,
          avatar: data.update_profiles_by_pk.avatar
        }
      });

      (document.getElementById('icon-button-file') as HTMLInputElement).value = '';
      setSelectImage('')
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { mutateFunction, loading }
}

export default useAvatarUpload
