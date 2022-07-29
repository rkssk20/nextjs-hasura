import { useMutation } from '@apollo/client'
import { DELETE_LIEKS } from '@/graphql/mutate'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useDeleteLikes = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_LIEKS, {
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

export default useDeleteLikes
