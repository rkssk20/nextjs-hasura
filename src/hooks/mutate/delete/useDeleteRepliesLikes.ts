import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { DELETE_REPLIES_LIKES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useDeleteRepliesLikes = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_REPLIES_LIKES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'いいねを取り消しました'
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

export default useDeleteRepliesLikes