import { NextPage } from 'next'
import { ReactNode, useState, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/router'

type Props = {
  children: ReactNode
}

const LoginOnly: NextPage<Props> = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  // 直接ログインでUIを切り替えるとhydration failedのエラーが発生するため、useStateで切り替える
  useEffect(() => {
    if (supabase.auth.user()?.id) {
      setAuth(true)
    } else {
      router.push('/login').then(() => setNotificate({ open: true, message: 'ログインが必要です。' }))
    }
  }, [])

  return <>{auth ? children : null}</>
}

export default LoginOnly
