import { useMutation } from '@apollo/client'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { UPDATE_PROFILES } from '@/graphql/mutate'
import { accountState, notificateState } from '@/lib/recoil'

const useSetting = () => {
  const [account, setAccount] = useRecoilState(accountState)
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(UPDATE_PROFILES, {
    onCompleted: (data) => {
      setAccount({
        loading: false,
        data: {
          id: account.data?.id as string,
          username: data.update_profiles_by_pk.username,
          avatar: account.data?.avatar
        }
      })

      setNotificate({
        open: true,
        message: 'プロフィールを変更しました'
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

export default useSetting
