import { useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { ArticleType } from '@/types/types'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

const FetchData = async (pageParam: string | undefined) => {
  const { data, error } = pageParam
    ? // 初回読み込み
      await supabase
        .from<ArticleType>('person_articles')
        .select('*')
        .order('created_at', {
          ascending: false,
        })
        .lt('created_at', pageParam)
        .limit(10)
    : // 追加読み込み
      await supabase
        .from<ArticleType>('person_articles')
        .select('*')
        .order('created_at', {
          ascending: false,
        })
        .limit(10)

  if (error) throw error

  return data
}

const useArticlesNoWord = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['articles_no_word'],
    ({ pageParam }) => FetchData(pageParam),
    {
      onError: () => {
        setNotificate({
          open: true,
          message: 'エラーが発生しました。',
        })
      },
      getNextPageParam: (lastPage) =>
        lastPage && lastPage.length === 10 ? lastPage[lastPage.length - 1].created_at : false,
    },
  )

  return { data, isFetching, hasNextPage, fetchNextPage }
}

export default useArticlesNoWord
