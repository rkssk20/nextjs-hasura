import { useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

type ResultType = definitions['comments'] & { profiles: definitions['profiles'] } & {
  comments_likes: definitions['comments_likes'][] | undefined
}

const FetchData = async (pageParam: string | undefined, path: string) => {
  const id = supabase.auth.user()?.id

  const { data, error } =
    // ログイン中
    id
      ? pageParam
        ? // 初回読み込み
          await supabase
            .from<ResultType>('comments')
            .select('*, profiles!reference_comments_profiles(username, avatar), comments_likes(id)')
            .eq('articles_id', path)
            .order('created_at', {
              ascending: true,
            })
            .gt('created_at', pageParam)
            .limit(10)
        : // 追加読み込み
          await supabase
            .from<ResultType>('comments')
            .select('*, profiles!reference_comments_profiles(username, avatar), comments_likes(id)')
            .eq('articles_id', path)
            .order('created_at', {
              ascending: true,
            })
            .limit(10)
      : // ログアウト中
      pageParam
      ? // 初回読み込み
        await supabase
          .from<ResultType>('comments')
          .select('*,  profiles!reference_comments_profiles(username, avatar)')
          .eq('articles_id', path)
          .order('created_at', {
            ascending: true,
          })
          .gt('created_at', pageParam)
          .limit(10)
      : // 追加読み込み
        await supabase
          .from<ResultType>('comments')
          .select('*, profiles!reference_comments_profiles(username, avatar)')
          .eq('articles_id', path)
          .order('created_at', {
            ascending: true,
          })
          .limit(10)

  if (error) throw error

  return data
}

const useSelectComments = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, refetch, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['comments', path],
    ({ pageParam }) => FetchData(pageParam, path),
    {
      // 初回取得の禁止
      enabled: false,
      onError: () => {
        setNotificate({
          open: true,
          message: 'コメントの取得に失敗しました。',
        })
      },
      getNextPageParam: (lastPage) =>
        lastPage && lastPage.length === 10 ? lastPage[lastPage.length - 1].created_at : false,
    },
  )

  return { data, refetch, isFetching, hasNextPage, fetchNextPage }
}

export default useSelectComments
