import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_FOLLOWS } from '@/graphql/queries'
import type { GetFollowsQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useSelectFollows = (path: string, id: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, loading } = useQuery<GetFollowsQuery>(GET_FOLLOWS, {
    variables: {
      _eq: id,
      _eq1: path
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'フォローの確認に失敗しました'
      })
    }
  })

  return { data, loading }
}

export default useSelectFollows