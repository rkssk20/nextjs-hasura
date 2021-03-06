import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
import useInsertComments from '@/hooks/mutate/insert/useInsertComments'
import { DisabledButton, ContainedButton } from '@/atoms/Button'
import { LoginForm, LogoutForm } from '@/atoms/Form'

import styles from '@/styles/components/article/comment/commentForm.module.scss'
import Skeleton from '@mui/material/Skeleton'
import CircularProgress from '@mui/material/CircularProgress'

const Login = ({ path, username }: { path: string; username: string }) => {
  const [text, setText] = useState('')
  const { mutateFunction, loading } = useInsertComments()

  // コメントの投稿
  const handlePost = () => {
    if (loading) return

    mutateFunction({
      variables: {
        comment: text,
        articles_id: path
      }
    })

    setText('')
  }

  return (
    <LoginForm text={text} setText={setText} name={username} placeholder='コメントする'>
      <div className={styles.under}>
        {/* 送信ボタン */}
        { loading ?
          <CircularProgress size={ 30 } />
          :
          Boolean(text) ? (
            <ContainedButton text='送信' handle={handlePost} />
          ) : (
            <DisabledButton text='送信' />
          )
        }
      </div>
    </LoginForm>
  )
}

const CommentForm = ({ path }: { path: string }) => {
  const account = useRecoilValue(accountState)

  // ローディング
  if (account.loading) {
    return <Skeleton className={styles.skeleton} variant='rectangular' />

    // ログイン時
  } else if (account.data) {
    return <Login path={path} username={account.data.username} />

    // ログアウト時
  } else {
    return <LogoutForm placeholder='コメントする' />
  }
}

export default CommentForm
