import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
import useSelectFollows from '@/hooks/select/useSelectFolows'
import useInsertFollows from '@/hooks/mutate/insert/useInsertFollows'
import useDeleteFollows from '@/hooks/mutate/delete/useDeleteFollows'
import { ContainedButton, OutlinedButton } from '@/atoms/Button'

const Login = dynamic(import('@/components/dialog/Login'))

import styles from '@/styles/components/account/following.module.scss'
import CircularProgress from '@mui/material/CircularProgress'

const InsertFollows = ({path}: {path: string}) => {
  const { mutateFunction, loading } = useInsertFollows()

  const handleMutate = () => {
    if(loading) return

    mutateFunction({
      variables: {
        follower_id: path
      }
    })
  }


  return <OutlinedButton text='フォロー' handle={handleMutate} />
}

const DeleteFollows = ({id}: {id: number }) => {
  const { mutateFunction, loading } = useDeleteFollows()

  const handleMutate = () => {
    if(loading) return 

    mutateFunction({
      variables: {
        id
      }
    })
  }

  return <ContainedButton text='フォロー中' handle={handleMutate} />
}

// ログイン時、フォローまたはフォローを外すボタン
const LoginFollowing = ({ path, id }: { path: string, id: string }) => {
  const { data, loading } = useSelectFollows(path, id)

  if(loading) return <CircularProgress size={38.25} />

  return (data?.follows.length === 1) ? <DeleteFollows id={ data.follows[0].id } /> : <InsertFollows path={ path } />
}

// ログアウト時、ログインボタン
const LogoutFollowing = () => {
  const [dialog, setDialog] = useState(false)

  if (dialog) return <Login dialog={dialog} handleClose={() => setDialog(false)} />

  return <OutlinedButton text='フォロー' handle={() => setDialog(true)} />
}

const Following = ({ path }: { path: string }) => {
  const account = useRecoilValue(accountState)

  if(account.loading) return <CircularProgress size={38.25} />

  return (
    <div className={styles.follow_button}>
      {/* ログイン状態で切り替え */}
      {account.data ? <LoginFollowing path={path} id={ account.data.id } /> : <LogoutFollowing />}
    </div>
  )
}

export default Following
