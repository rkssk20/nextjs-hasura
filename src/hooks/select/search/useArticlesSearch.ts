import { useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { ArticleType } from '@/types/types'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

const FetchData = async (
  pageParam: { like_count: number; created_at: string } | undefined,
  word: string | string[],
) => {
  const { data, error } = pageParam
    ? // 初回読み込み
      await supabase.rpc('handle_articles_search_more', {
        word,
        lcount: pageParam.like_count,
        created: pageParam.created_at,
      })
    : // 追加読み込み
      await supabase.rpc('handle_articles_search', {
        word,
      })

  if (error) throw error

  return data as unknown as ArticleType[]
}

const useArticlesSearch = (word: string | string[]) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['articles_search', word],
    ({ pageParam }) => FetchData(pageParam, word),
    {
      onError: () => {
        setNotificate({
          open: true,
          message: 'エラーが発生しました。',
        })
      },
      getNextPageParam: (lastPage) =>
        lastPage && lastPage.length === 10
          ? {
              like_count: lastPage[lastPage.length - 1].like_count,
              created_at: lastPage[lastPage.length - 1].created_at,
            }
          : false,
    },
  )

  return { data, isFetching, hasNextPage, fetchNextPage }
}

export default useArticlesSearch
