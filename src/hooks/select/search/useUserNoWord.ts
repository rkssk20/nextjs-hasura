import { useInfiniteQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { ProfilesSummaryType } from '@/types/types'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'

const FetchData = async (pageParam: { follower_count: number; id: string }) => {
  const { data, error } = pageParam
    ? // 初回読み込み
      await supabase
        .from<ProfilesSummaryType>('profiles_summary')
        .select('id, username, avatar, details')
        .order('follower_count', {
          ascending: false,
        })
        .order('id', {
          ascending: false,
        })
        .lt('follower_count', pageParam.follower_count)
        .lt('id', pageParam.id)
        .limit(10)
    : // 追加読み込み
      await supabase
        .from<ProfilesSummaryType>('profiles_summary')
        .select('id, username, avatar, details')
        .order('follower_count', {
          ascending: false,
        })
        .order('id', {
          ascending: false,
        })
        .limit(10)

  if (error) throw error

  return data
}

const useUserNoWord = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['user_no_word'],
    ({ pageParam }) => FetchData(pageParam),
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
              follower_count: lastPage[lastPage.length - 1].follower_count,
              id: lastPage[lastPage.length - 1].id,
            }
          : false,
    },
  )

  return { data, isFetching, hasNextPage, fetchNextPage }
}

export default useUserNoWord
