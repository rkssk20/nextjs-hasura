import { useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

type ResultType = definitions['replies'] & { profiles: definitions['profiles'] } & {
  replies_likes: definitions['replies_likes'][] | undefined
}

const FetchData = async (
  pageParam: string | undefined,
  comment_id: definitions['comments']['id'],
) => {
  const id = supabase.auth.user()?.id

  const { data, error } =
    // ログイン中
    id
      ? pageParam
        ? // 初回読み込み
          await supabase
            .from<ResultType>('replies')
            .select('*, profiles!reference_replies_profiles(username, avatar), replies_likes(id)')
            .eq('comment_id', comment_id)
            .order('created_at', {
              ascending: true,
            })
            .gt('created_at', pageParam)
            .limit(10)
        : // 追加読み込み
          await supabase
            .from<ResultType>('replies')
            .select('*, profiles!reference_replies_profiles(username, avatar), replies_likes(id)')
            .eq('comment_id', comment_id)
            .order('created_at', {
              ascending: true,
            })
            .limit(10)
      : // ログアウト中
      pageParam
      ? // 初回読み込み
        await supabase
          .from<ResultType>('replies')
          .select('*,  profiles!reference_replies_profiles(username, avatar)')
          .eq('comment_id', comment_id)
          .order('created_at', {
            ascending: true,
          })
          .gt('created_at', pageParam)
          .limit(10)
      : // 追加読み込み
        await supabase
          .from<ResultType>('replies')
          .select('*, profiles!reference_replies_profiles(username, avatar)')
          .eq('comment_id', comment_id)
          .order('created_at', {
            ascending: true,
          })
          .limit(10)

  if (error) throw error

  return data
}

const useSelectReplies = (id: definitions['comments']['id']) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['replies', id],
    ({ pageParam }) => FetchData(pageParam, id),
    {
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

  return { data, isFetching, hasNextPage, fetchNextPage }
}

export default useSelectReplies
