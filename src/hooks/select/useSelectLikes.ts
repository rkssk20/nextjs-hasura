import { useQuery } from '@apollo/client'
import { GET_LIKES } from '@/graphql/queries'
import type { GetLikesQuery } from '@/types/generated/graphql'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useSelectLikes = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, loading } = useQuery<GetLikesQuery>(GET_LIKES, {
    variables: {
      _eq: path
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, loading }
}

export default useSelectLikes