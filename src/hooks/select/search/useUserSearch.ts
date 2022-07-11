import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_SEARCH_PROFILES } from '@/graphql/queries'
import type { GetSearchProfilesQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

type CursorType = {
  id: string
  follower_count: number | null
}

const useUserSearch = (word: string | string[]) => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState<CursorType>({
    id: "",
    follower_count: null
  })
  const setNotificate = useSetRecoilState(notificateState)

  const { data, previousData, networkStatus, fetchMore } = useQuery<GetSearchProfilesQuery>(GET_SEARCH_PROFILES, {
    variables: {
      _ilike: "%" + word + "%",
      _and: {}
    },
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(previousData) {
        // 全ての結果の長さ - 前回までの長さ = 最後に取得した長さ
        // これが10件以下の場合、hasNextPageをfalseにする
        if((data.profiles.length - previousData.profiles.length) < 10) {
          setHasNextPage(false)
          return
        }
      } else if (data.profiles.length < 10) {
        setHasNextPage(false)
        return
      }

      if(data.profiles.length > 0) {
        setCursor({
          id: data.profiles[data.profiles.length - 1].id,
          follower_count: data.profiles[data.profiles.length - 1].follower_count
        })
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, networkStatus, fetchMore, hasNextPage, cursor }
}

export default useUserSearch
