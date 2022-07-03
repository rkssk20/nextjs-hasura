import { FetchNextPageOptions, InfiniteData, useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import type { ArticleType } from '@/types/types'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

const FetchData = async (pageParam: string | undefined, path: string) => {
  const { data, error } = pageParam
    ? // 初回読み込み
      await supabase
        .from<definitions['likes_articles']>('likes_articles')
        .select(
          `id,
      user_id,
      title,
      details,
      image,
      like_count,
      comment_count,
      created_at,
      avatar,
      username,
      categories,
      likes_created`,
        )
        .eq('likes_user', path)
        .order('likes_created', {
          ascending: false,
        })
        .lt('likes_created', pageParam)
        .limit(10)
    : // 追加読み込み
      await supabase
        .from<definitions['likes_articles']>('likes_articles')
        .select(
          `id,
      user_id,
      title,
      details,
      image,
      like_count,
      comment_count,
      created_at,
      avatar,
      username,
      categories,
      likes_created`,
        )
        .eq('likes_user', path)
        .order('likes_created', {
          ascending: false,
        })
        .limit(10)

  if (error) throw error

  return data
}

type ReturnProps = {
  data: InfiniteData<ArticleType[]> | undefined
  isFetching: boolean
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
}

const useLikesArticles = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['likes_articles', path],
    ({ pageParam }) => FetchData(pageParam, path),
    {
      onError: () => {
        setNotificate({
          open: true,
          message: 'エラーが発生しました。',
        })
      },
      getNextPageParam: (lastPage) =>
        lastPage && lastPage.length === 10 ? lastPage[lastPage.length - 1].likes_created : false,
    },
  )

  return { data, isFetching, hasNextPage, fetchNextPage } as unknown as ReturnProps
}

export default useLikesArticles
