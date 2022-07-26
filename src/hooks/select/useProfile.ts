import { useEffect } from 'react'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { useSetRecoilState } from 'recoil'
import { accountState } from '@/lib/recoil'

import { useSession } from 'next-auth/react'
 
const useProfile = () => {
  const { data, status } = useSession()
  const setAccount = useSetRecoilState(accountState)

  useEffect(() => {
    if(status === 'loading') return

    if(data) {
      if(data?.avatar) {
        (async() => {
          const fullPath = await getDownloadURL(ref(storage, data.avatar as string));

          setAccount({
            loading: false,
            data: {
              id: data.id as string,
              username: data.username as string,
              avatar: fullPath
            }
          });
        })();

      } else {
        setAccount({
          loading: false,
          data: {
            id: data.id as string,
            username: data.username as string,
            avatar: undefined
          }
        })
      }
    } else {
      setAccount({
        loading: false,
        data: null
      })
    }
  }, [data])  
}

export default useProfile
