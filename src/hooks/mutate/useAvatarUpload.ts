import { useState, Dispatch, SetStateAction } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { nanoid } from 'nanoid'
import { uploadBytes, ref, getDownloadURL, deleteObject } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { useMutation } from '@apollo/client'
import { UPDATE_PROFILES_AVATAR } from '@/graphql/mutate'
import { accountState, notificateState } from '@/lib/recoil'


const useAvatarUpload = (setSelectImage: Dispatch<SetStateAction<string>>) => {
  const [loading, setLoading] = useState(false)
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)

  const [mutateFunction] = useMutation(UPDATE_PROFILES_AVATAR, {
    onCompleted: (data) => {
      setNotificate({
        open: true,
        message: 'プロフィール画像を変更しました'
      })

      setAccount({
        loading: false,
        data: {
          id: account.data?.id as string,
          username: account.data?.username as string,
          avatar: data.update_profiles_by_pk.avatar
        }
      });

      (document.getElementById('icon-button-file') as HTMLInputElement).value = '';
      setSelectImage('')
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  const mutate = async (blob: Blob, handleClose: () => void) => {
    if(loading || !account.data) return
    setLoading(true)

    try {
      const type = blob.type
      const index = type.indexOf('/')
      const url = `hasura-avatar/${nanoid()}.${type.substring(index + 1)}`

      const storageRef = ref(storage, url);
      await uploadBytes(storageRef, blob)

      await mutateFunction({
        variables: {
          id: account.data?.id,
          avatar: url
        }
      })

      const fullPath = await getDownloadURL(ref(storage, url))

      let oldAvatar = account.data.avatar

      // アカウントの状態を変更
      setAccount({
        loading: false,
        data: {
          id: account.data.id,
          username: account.data.username,
          avatar: fullPath
        }
      })

      // ダイアログを閉じる
      handleClose()

      // 通知
      setNotificate({
        open: true,
        message: 'プロフィール画像を変更しました'
      })

      if(oldAvatar) {
        // 既存の画像を削除
        deleteObject(ref(storage, oldAvatar))
      }

    } catch {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    } finally {
      setLoading(false)
    }
  }

  return { mutate, loading }
}

export default useAvatarUpload
