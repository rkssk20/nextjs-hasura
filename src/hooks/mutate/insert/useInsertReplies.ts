import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { INSERT_REPLIES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useInsertReplies = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading}] = useMutation(INSERT_REPLIES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'コメントに返信しました'
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

export default useInsertReplies