import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_FRONT_ARTICLES } from '@/graphql/queries'
import type { GetFrontArticlesQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useFrontArticles = () => {
  const [hasNextPage, setHasNextPage] = useState(true)
  const [cursor, setCursor] = useState(new Date().toJSON())
  const setNotificate = useSetRecoilState(notificateState)

  const {data, loading, fetchMore} = useQuery<GetFrontArticlesQuery>(GET_FRONT_ARTICLES, {
    variables: {
      _eq: 1,
      _lt: cursor
    },
    onCompleted: (data) => {
      if(data.articles.length < 10) {
        setHasNextPage(false)
        return
      }

      setCursor(data.articles[data.articles.length - 1].created_at)
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, loading, fetchMore, hasNextPage }
}

export default useFrontArticles