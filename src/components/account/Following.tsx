import { Dispatch, SetStateAction, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
import useSelectFollows from '@/hooks/select/useSelectFolows'
import useInsertFollows from '@/hooks/mutate/insert/useInsertFollows'
import useDeleteFollows from '@/hooks/mutate/delete/useDeleteFollows'
import { ContainedButton, OutlinedButton } from '@/atoms/Button'

const Login = dynamic(import('@/components/dialog/Login'));

import styles from '@/styles/components/account/following.module.scss'
import CircularProgress from '@mui/material/CircularProgress'

const InsertFollows = ({path, setFollows}: {path: string, setFollows: Dispatch<SetStateAction<number | null>>}) => {
  const { mutateFunction, loading } = useInsertFollows()

  const handleMutate = () => {
    if(loading) return

    mutateFunction({
      variables: {
        follower_id: path
      }
    }).then(data => {
      data.data.insert_follows_one.id && setFollows(data.data.insert_follows_one.id)
    })
  }


  return <OutlinedButton text='フォロー' handle={handleMutate} />
}

const DeleteFollows = ({ follows, setFollows }: { follows: number, setFollows: Dispatch<SetStateAction<number | null>> }) => {
  const { mutateFunction, loading } = useDeleteFollows()

  const handleMutate = () => {
    if(loading) return 

    mutateFunction({
      variables: {
        id: follows
      }
    }).then(() => {
      setFollows(null)
    })
  }

  return <ContainedButton text='フォロー中' handle={handleMutate} />
}

// ログイン時、フォローまたはフォローを外すボタン
const LoginFollowing = ({ path, id }: { path: string, id: string }) => {
  const { follows, loading, setFollows } = useSelectFollows(path, id)

  if(loading) return <CircularProgress size={38.25} />

  return (
    follows ?
    <DeleteFollows
      follows={ follows }
      setFollows={ setFollows }
    />
    :
    <InsertFollows
      path={ path }
      setFollows={ setFollows }
    />
  )
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
