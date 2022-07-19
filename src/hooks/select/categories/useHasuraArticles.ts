import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_HASURA_ARTICLES } from '@/graphql/queries'
import type { GetHasuraArticlesQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useHasuraArticles = () => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState(new Date().toJSON())
  const setNotificate = useSetRecoilState(notificateState)

  const {data, previousData, loading, networkStatus, fetchMore} = useQuery<GetHasuraArticlesQuery>(GET_HASURA_ARTICLES, {
    variables: {
      _eq: 1
    },
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(previousData) {
        // 全ての結果の長さ - 前回までの長さ = 最後に取得した長さ
        // これが10件以下の場合、hasNextPageをfalseにする
        if((data.articles.length - previousData.articles.length) < 10) {
          setHasNextPage(false)
          return
        }
      } else if(data.articles.length < 10) {
        setHasNextPage(false)
        return
      }

      if(data.articles.length > 0) {
        setCursor(data.articles[data.articles.length - 1].created_at)
      }
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, loading, fetchMore, networkStatus, hasNextPage, cursor }
}

export default useHasuraArticles