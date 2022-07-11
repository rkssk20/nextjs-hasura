import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useQuery } from '@apollo/client'
import { GET_PERSON_LIKES_ARTICLES } from '@/graphql/queries'
import type { GetPersonLikesArticlesQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const usePersonLikesArticles = (path: string) => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState(String(new Date().toJSON()))
  const setNotificate = useSetRecoilState(notificateState)

  const { data, previousData, loading, networkStatus, fetchMore } = useQuery<GetPersonLikesArticlesQuery>(GET_PERSON_LIKES_ARTICLES, {
    variables: {
      _eq: path
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
        setCursor(data.articles[data.articles.length - 1].likes_created)
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

export default usePersonLikesArticles