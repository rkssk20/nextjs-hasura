import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { DELETE_FOLLOWS } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useDeleteFollows = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_FOLLOWS, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'フォローを外しました'
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

export default useDeleteFollows