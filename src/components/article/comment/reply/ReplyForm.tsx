import { Dispatch, SetStateAction, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
import useInsertReplies from '@/hooks/mutate/insert/useInsertReplies'
import { DisabledButton, ContainedButton } from '@/atoms/Button'
import { LoginForm, LogoutForm } from '@/atoms/Form'

import styles from '@/styles/components/article/comment/reply/replyForm.module.scss'
import Button from '@mui/material/Button'

type ReplyFormProps = {
  path: string
  id: number
  setFormOpen: Dispatch<SetStateAction<boolean>>
}

type LoginProps = ReplyFormProps & {
  username: string
}

const Login = ({ path, id, setFormOpen, username }: LoginProps) => {
  const [text, setText] = useState('')
  const { mutate, isLoading } = useInsertReplies(path, id)

  // 返信を送信
  const handlePost = () => {
    if (isLoading) return
    mutate(text)
    setFormOpen(false)
  }

  return (
    <LoginForm text={text} setText={setText} name={username} placeholder='返信する'>
      {/* キャンセルボタン */}
      <Button
        className={styles.cancel_button}
        classes={{ root: styles.cancel_button_root }}
        color='inherit'
        onClick={() => setFormOpen(false)}
      >
        キャンセル
      </Button>

      {/* 送信ボタン */}
      {Boolean(text) ? (
        <ContainedButton text='返信' handle={handlePost} />
      ) : (
        <DisabledButton text='返信' />
      )}
    </LoginForm>
  )
}

const ReplyForm = ({ path, id, setFormOpen }: ReplyFormProps) => {
  const account = useRecoilValue(accountState)

  // ログイン時
  if (account.data) {
    return <Login path={path} id={id} setFormOpen={setFormOpen} username={account.data.username} />

    // ログアウト時
  } else {
    return <LogoutForm placeholder='返信する' />
  }
}

export default ReplyForm
