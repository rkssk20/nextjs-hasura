import { useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ref, deleteObject } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { GET_PROFILES_AVATAR } from '@/graphql/queries'
import { DLETE_PROFILES_AVATAR } from '@/graphql/mutate'
import type { GetProfilesAvatarQuery } from '@/types/generated/graphql'
import { accountState, notificateState } from '@/lib/recoil'

const useAvatarDelete = () => {
  const [loading, setLoading] = useState(false)
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)

  const [lazyQuery] = useLazyQuery<GetProfilesAvatarQuery>(GET_PROFILES_AVATAR, {
    variables: {
      id: account.data?.id
    }
  })

  const [mutateFunction] = useMutation(DLETE_PROFILES_AVATAR, {
    variables: {
      id: account.data?.id as string
    },
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'プロフィール画像を削除しました'
      })

      setAccount({
        loading: false,
        data: {
          id: account.data?.id as string,
          username: account.data?.username as string,
          avatar: undefined
        }
      })
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  const mutate = () => {
    if(loading || !account.data?.avatar) return
    setLoading(true)

    try {
      lazyQuery().then(async(data) => {
        if(!data.data?.profiles_by_pk?.avatar) throw 'error'
        
        await deleteObject(ref(storage, data.data.profiles_by_pk.avatar))
  
        await mutateFunction()
      })

    } catch {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    } finally {
      setLoading(false)
    }
  }

  return mutate
}

export default useAvatarDelete
