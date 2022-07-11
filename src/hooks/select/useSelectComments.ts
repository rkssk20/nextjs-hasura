import { useState } from 'react'
import { useLazyQuery, NetworkStatus } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_COMMENTS } from '@/graphql/queries'
import type { GetCommentsQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useSelectComments = (path: string) => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState(String(new Date().toJSON()))
  const setNotificate = useSetRecoilState(notificateState)

  const [firstQuery, { data, previousData, networkStatus, fetchMore }] = useLazyQuery<GetCommentsQuery>(GET_COMMENTS, {
    variables: {
      _eq: path
    },
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(previousData) {
        // 全ての結果の長さ - 前回までの長さ = 最後に取得した長さ
        // これが10件以下の場合、hasNextPageをfalseにする
        if((data.comments.length - previousData.comments.length) < 10) {
          setHasNextPage(false)
          return
        }
      } else if (data.comments.length < 10) {
        setHasNextPage(false)
        return
      }

      if(data.comments.length > 0) {
        setCursor(data.comments[data.comments.length - 1].created_at)
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'コメントの取得に失敗しました'
      })
    }
  })

  return { firstQuery, data, networkStatus, fetchMore, hasNextPage, cursor }
}

export default useSelectComments