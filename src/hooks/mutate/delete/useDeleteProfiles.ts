import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { notificateState } from "@/lib/recoil";
import { DELETE_PROFILES } from '@/graphql/mutate'

const useDeleteProfiles = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  const [mutateFunction, { loading }] = useMutation(DELETE_PROFILES, {
    onCompleted: () => {
      signOut({ callbackUrl: '/' })

      router.push('/').then(() => {
        router.reload()
      })
    },
    onError: (e) => {
      console.log(e)
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { mutateFunction, loading }
}

export default useDeleteProfiles