import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_PERSON_FOLLOWS } from '@/graphql/queries'
import type { GetPersonFollowsQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const usePersonFollows = (path: string) => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState(String(new Date().toJSON()))
  const setNotificate = useSetRecoilState(notificateState)

  const { data, previousData, loading, networkStatus, fetchMore } = useQuery<GetPersonFollowsQuery>(GET_PERSON_FOLLOWS, {
    variables: {
      _eq: path
    },
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(previousData) {
        // 全ての結果の長さ - 前回までの長さ = 最後に取得した長さ
        // これが10件以下の場合、hasNextPageをfalseにする
        if((data.person_follows.length - previousData.person_follows.length) < 10) {
          setHasNextPage(false)
          return
        }
      } else if(data.person_follows.length < 10) {
        setHasNextPage(false)
        return
      }

      if(data.person_follows.length > 0) {
        setCursor(data.person_follows[data.person_follows.length - 1].created_at)
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, loading, networkStatus, fetchMore, hasNextPage, cursor }
}

export default usePersonFollows