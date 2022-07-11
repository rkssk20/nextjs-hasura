import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { INSERT_COMMENTS_LIKES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useMutateCommentsLikes = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(INSERT_COMMENTS_LIKES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'コメントにいいねしました'
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

export default useMutateCommentsLikes