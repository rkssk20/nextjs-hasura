import { useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { GET_TREND_USER } from '@/graphql/queries'
import type { GetTrendUserQuery } from '@/types/generated/graphql'
import { notificateState } from '@/lib/recoil'

const useTrendUser = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data } = useQuery<GetTrendUserQuery>(GET_TREND_USER, {
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return data
}

export default useTrendUser