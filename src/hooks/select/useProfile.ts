import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { accountState } from '@/lib/recoil'

import { useSession } from 'next-auth/react'
 
const useProfile = () => {
  const { data, status } = useSession()
  const setAccount = useSetRecoilState(accountState)

  useEffect(() => {
    if(status === 'loading') return

    if(data) {
      setAccount({
        loading: false,
        data: {
          id: data.id as string,
          username: data.username as string,
          avatar: data?.avatar as string | undefined
        }
      })
    } else {
      setAccount({
        loading: false,
        data: null
      })
    }
  }, [data])  
}

export default useProfile
