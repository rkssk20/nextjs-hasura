import { useQuery } from '@apollo/client'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import type { GetProfilesDetailsQuery } from '@/types/generated/graphql'
import { accountState, notificateState } from '@/lib/recoil'
import { GET_PROFILES_DETAILS } from '@/graphql/queries'

const useProfilesDetails = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const account = useRecoilValue(accountState)

  const { loading, data } = useQuery<GetProfilesDetailsQuery>(GET_PROFILES_DETAILS, {
    variables: {
      id: account.data?.id
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。'
      })
    },
  })

  return { data, loading }
}

export default useProfilesDetails
