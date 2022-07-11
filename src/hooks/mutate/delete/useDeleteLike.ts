import { useMutation } from '@apollo/client'
import { GET_LIKES } from '@/graphql/queries'
import { DELETE_LIEKS } from '@/graphql/mutate'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useDeleteLikes = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_LIEKS, {
    update: (cache, { data }) => {
      console.log(data)

      const read = cache.readQuery({
        query: GET_LIKES,
        variables: {
          _eq: path
        }
      })

      console.log(read)

      
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

export default useDeleteLikes
