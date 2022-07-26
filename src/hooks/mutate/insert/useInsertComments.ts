import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { INSERT_COMMENTS } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useInsertComments = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading}] = useMutation(INSERT_COMMENTS, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          comments(existing = []) {
            return [data.comments, ...existing]
          }
        }
      })
    },
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'コメントを投稿しました'
      })
    },
    onError: (e) => {
      console.log(e)
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { mutateFunction, loading }
}

export default useInsertComments