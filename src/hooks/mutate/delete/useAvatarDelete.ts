import { useMutation } from '@apollo/client'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { DLETE_PROFILES_AVATAR } from '@/graphql/mutate'
import { accountState, notificateState } from '@/lib/recoil'

const useAvatarDelete = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)

  const [mutateFunction, { loading }] = useMutation(DLETE_PROFILES_AVATAR, {
    variables: {
      id: account.data?.id as string
    },
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'プロフィール画像を削除しました'
      })

      setAccount({
        loading: false,
        data: {
          id: account.data?.id as string,
          username: account.data?.username as string,
          avatar: undefined
        }
      })
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

export default useAvatarDelete
