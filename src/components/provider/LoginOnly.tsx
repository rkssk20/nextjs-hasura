import type { ReactNode } from 'react'
import { NextPage } from 'next'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { accountState, notificateState } from '@/lib/recoil'
import Circular from '@/atoms/Circular'

type Props = {
  children: ReactNode
}

const LoginOnly: NextPage<Props> = ({ children }) => {
  const setNotificate = useSetRecoilState(notificateState)
  const account = useRecoilValue(accountState)
  const router = useRouter()

  // 直接ログインでUIを切り替えるとhydration failedのエラーが発生するため、useStateで切り替える
  // useEffect(() => {
  //   if (account.data) {
  //     setAuth(true)
  //   } else if(!account.loading) {
  //   }
  // }, [account])

  if(account.loading) return <Circular />
  
  if(account.data) {
    return <>{ children }</>
  } else {
    router.push('/login').then(() => setNotificate({ open: true, message: 'ログインが必要です。' }))
    
    return null
  }
}

export default LoginOnly
