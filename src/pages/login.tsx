import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { accountState, notificateState } from '@/lib/recoil'
import LoginContent from '@/atoms/LoginContent'
import ContainerLayout from '@/components/provider/ContainerLayout'
import PageLayout from '@/components/provider/PageLayout'
import Circular from '@/atoms/Circular'

import DialogContent from '@mui/material/DialogContent'

const Login = () => {
  const account = useRecoilValue(accountState)
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  if(account.loading) return <Circular />

  // ログイン時
  if (account.data) {
    router.push('/').then(() => {
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