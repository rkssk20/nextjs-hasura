import { useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

type ResultType = {
  follower_id: definitions['follows']['follower_id']
  username: definitions['profiles']['username']
  avatar: definitions['profiles']['avatar']
  details: definitions['profiles']['details']
  user_id: definitions['follows']['user_id']
  created_at: definitions['follows']['created_at']
}

const FetchData = async (pageParam: string | undefined, path: string) => {
  const { data, error } = pageParam
    ? // 初回読み込み
      await supabase
        .from<ResultType>('person_follows')
        .select('follower_id, username, avatar, details')
        .eq('user_id', path)
        .order('created_at', {
          ascending: false,
        })
        .lt('created_at', pageParam)
        .limit(10)
    : // 追加読み込み
      await supabase
        .from<ResultType>('person_follows')
        .select('follower_id, username, avatar, details')
        .eq('user_id', path)
        .order('created_at', {
          ascending: false,
        })
        .limit(10)

  if (error) throw error

  return data
}

const usePersonFollows = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['person_follows', path],
    ({ pageParam }) => FetchData(pageParam, path),
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

export default usePersonFollows
