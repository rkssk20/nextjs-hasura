import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_FOLLOWS } from '@/graphql/queries'
import type { GetFollowsQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useSelectFollows = (path: string, id: string) => {
  const [follows, setFollows] = useState<number | null>(null)
  const setNotificate = useSetRecoilState(notificateState)

  const { loading } = useQuery<GetFollowsQuery>(GET_FOLLOWS, {
    variables: {
      _eq: id,
      _eq1: path
    },
    onCompleted: data => {
      (data.follows.length > 0) && setFollows(data.follows[0].id)
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'フォローの確認に失敗しました'
      })
    }
  })

  return { follows, loading, setFollows }
}

export default useSelectFollows