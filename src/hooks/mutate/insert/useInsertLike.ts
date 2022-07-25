import { useMutation } from '@apollo/client'
import { INSERT_LIKES } from '@/graphql/mutate'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useInsertLikes = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction,  { loading }] = useMutation(INSERT_LIKES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: '記事にいいねしました'
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

export default useInsertLikes
