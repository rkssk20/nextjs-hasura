import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_REPLIES } from '@/graphql/queries'
import type { GetRepliesQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useSelectReplies = (comment_id: number) => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState(String(new Date().toJSON()))
  const setNotificate = useSetRecoilState(notificateState)

  const { data, previousData, networkStatus, fetchMore } = useQuery<GetRepliesQuery>(GET_REPLIES, {
    variables: {
      _eq: comment_id
    },
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(previousData) {
        // 全ての結果の長さ - 前回までの長さ = 最後に取得した長さ
        // これが10件以下の場合、hasNextPageをfalseにする
        if((data.replies.length - previousData.replies.length) < 10) {
          setHasNextPage(false)
          return
        }
      } else if (data.replies.length < 10) {
        setHasNextPage(false)
        return
      }

      if(data.replies.length > 0) {
        setCursor(data.replies[data.replies.length - 1].created_at)
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'コメントの取得に失敗しました'
      })
    }
  })

  return { data, networkStatus, fetchMore, hasNextPage, cursor }
}

export default useSelectReplies