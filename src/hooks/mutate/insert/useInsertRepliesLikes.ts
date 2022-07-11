import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { INSERT_REPLIES_LIKES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useInsertRepliesLikes = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(INSERT_REPLIES_LIKES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'コメントにいいねしました'
      })
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'いいねに失敗しました'
      })
    }
  })

  return { mutateFunction, loading }
}

export default useInsertRepliesLikes