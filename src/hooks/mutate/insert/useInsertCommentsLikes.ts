import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { INSERT_COMMENTS_LIKES } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useMutateCommentsLikes = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(INSERT_COMMENTS_LIKES, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          comments (existing = []) {
            return [data.insert_comments_likes_one, ...existing]
          }
        }
      })
    },
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