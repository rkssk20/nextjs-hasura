import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { DELETE_REPLIES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useDeleteReplies = (handleClose: () => void) => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading}] = useMutation(DELETE_REPLIES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'コメントに返信しました'
      })

      handleClose()
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

export default useDeleteReplies