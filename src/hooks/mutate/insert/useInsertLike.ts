import { useMutation } from '@apollo/client'
import { GET_LIKES } from '@/graphql/queries'
import { INSERT_LIKES } from '@/graphql/mutate'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useInsertLikes = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction,  { loading }] = useMutation(INSERT_LIKES, {
    update: (cache, { data }) => {
      console.log(data)

      const read = cache.readQuery({
        query: GET_LIKES,
        variables: {
          _eq: path
        }
      })

      cache.writeQuery({
        query: GET_LIKES,
        data: {
          
        },
        variables: {
          _eq: path
        }
      })

      console.log(read)
    },
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
