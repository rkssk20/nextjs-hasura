import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/supabaseClient'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'
import LoginContent from '@/atoms/LoginContent'
import ContainerLayout from '@/components/provider/ContainerLayout'
import PageLayout from '@/components/provider/PageLayout'

import DialogContent from '@mui/material/DialogContent'

const Login = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  // ログイン時
  if (supabase.auth.user()) {
    router.replace('/').then(() => {
      setNotificate({
        open: true,
        message: '既にログインしています。',
      })
    })

    return null
    // ログアウト時
  } else {
    return (
      <ContainerLayout type='article' title='' description='' image=''>
        <DialogContent>
          <LoginContent />
        </DialogContent>
      </ContainerLayout>
    )
  }
}

export default Login

Login.getLayout = function getLayout (page: ReactElement) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}