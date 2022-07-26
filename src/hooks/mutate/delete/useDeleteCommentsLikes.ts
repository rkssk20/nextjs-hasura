import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { DELETE_COMMENTS_LIKES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useMutateCommentsLikes = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_COMMENTS_LIKES, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          comments: (existing = []) => {
            return [data.delete_comments_likes_by_pk, ...existing]
          }
        }
      })
    },
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

export default useMutateCommentsLikes