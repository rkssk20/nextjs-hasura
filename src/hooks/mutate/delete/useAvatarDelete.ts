import { useMutation } from '@apollo/client'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { DLETE_PROFILES_AVATAR } from '@/graphql/mutate'
import { accountState, notificateState } from '@/lib/recoil'

const useAvatarDelete = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const [account, setAccount] = useRecoilState(accountState)

  const [mutateFunction, { loading }] = useMutation(DLETE_PROFILES_AVATAR, {
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

  return { mutateFunction, loading }
}

// type MutateType = {
//   blob: Blob
//   type: string
// }

// type ExistingType =
//   | {
//       username: string
//       details: string | null
//       avatar: string | null
//     }
//   | undefined

// const mutateAvatar = async (avatar: string | undefined) => {
//   if (!avatar) throw 'error'

//   const { error, data } = await supabase.storage
//     .from('avatars')
//     .remove([
//       avatar.replace(
//         process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/',
//         '',
//       ),
//     ])

//   if (error) throw error

//   return data
// }

// const useAvatarDelete = () => {
//   const setNotificate = useSetRecoilState(notificateState)
//   const [account, setAccount] = useRecoilState(accountState)
//   const queryClient = useQueryClient()

//   const { mutate } = useMutation(() => mutateAvatar(account.data?.avatar), {
//     onSuccess: () => {
//       setAccount({
//         loading: false,
//         data: {
//           username: account.data?.username ?? '',
//           avatar: undefined,
//         },
//       })

//       const existing: ExistingType = queryClient.getQueryData('profilesDetails')

//       if (existing) {
//         queryClient.setQueryData('profilesDetails', {
//           ...existing,
//           avatar: null,
//         })
//       }

//       setNotificate({
//         open: true,
//         message: 'アイコンを削除しました',
//       })
//     },
//     onError: () => {
//       setNotificate({
//         open: true,
//         message: '削除に失敗しました',
//       })
//     },
//   })

//   return { mutate }
// }

export default useAvatarDelete
