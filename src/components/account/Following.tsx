import { useState } from 'react'
import dynamic from 'next/dynamic'
import useSelectFollow from '@/hooks/select/useSelectFolow'
import useMutateFollow from '@/hooks/mutate/useMutateFollow'
import { ContainedButton, OutlinedButton } from '@/atoms/Button'
import { supabase } from '@/lib/supabaseClient'

const Login = dynamic(import('@/components/dialog/Login'))

import styles from '@/styles/components/account/following.module.scss'
import CircularProgress from '@mui/material/CircularProgress'

// ログイン時、フォローまたはフォローを外すボタン
const LoginFollowing = ({ path }: { path: string }) => {
  const { data, isFetching } = useSelectFollow(path)
  const { mutate, isLoading } = useMutateFollow(path)

  // フォロー、フォローを外す
  const handleMutate = () => {
    if (isLoading) return
    mutate(data?.id)
  }

  return isFetching ? (
    <CircularProgress size={38.25} />
  ) : data ? (
    <ContainedButton text='フォロー中' handle={handleMutate} />
  ) : (
    <OutlinedButton text='フォロー' handle={handleMutate} />
  )
}

// ログアウト時、ログインボタン
const LogoutFollowing = () => {
  const [dialog, setDialog] = useState(false)

  if (dialog) return <Login dialog={dialog} handleClose={() => setDialog(false)} />

  return <OutlinedButton text='フォロー' handle={() => setDialog(true)} />
}

const Following = ({ path }: { path: string }) => {
  return (
    <div className={styles.follow_button}>
      {/* ログイン状態で切り替え */}
      {supabase.auth.user() ? <LoginFollowing path={path} /> : <LogoutFollowing />}
    </div>
  )
}

export default Following
