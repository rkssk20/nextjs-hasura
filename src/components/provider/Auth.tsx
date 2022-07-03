import type { ReactElement } from 'react'
import { NextPage } from 'next'
import useProfile from '@/hooks/select/useProfile'

const Auth: NextPage<{ children: ReactElement }> = ({ children }) => {
  useProfile()

  return <>{children}</>
}

export default Auth
