import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { INSERT_FOLLOWS } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useInsertFollows = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(INSERT_FOLLOWS, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'フォローしました'
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

export default useInsertFollows