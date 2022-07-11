import { useMutation } from "@apollo/client";
import { signOut } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { notificateState } from "@/lib/recoil";
import { DELETE_PROFILES } from '@/graphql/mutate'

const useDeleteProfiles = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_PROFILES, {
    onCompleted: () => {
      signOut({ callbackUrl: '/' })
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

export default useDeleteProfiles