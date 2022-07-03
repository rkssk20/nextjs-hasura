import { useState, Dispatch, ReactNode, SetStateAction } from 'react'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
import InitialIcon from '@/atoms/Icon/InitialIcon'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'

import styles from '@/styles/components/article/comment/form.module.scss'
import InputBase from '@mui/material/InputBase'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Login = dynamic(import('@/components/dialog/Login'))

type FormProps = {
  children: ReactNode
  text: string
  setText: Dispatch<SetStateAction<string>>
  name: string
  placeholder: string
}

export const LoginForm = ({ children, text, setText, name, placeholder }: FormProps) => {
  const account = useRecoilValue(accountState)

  return (
    <div className={styles.field}>
      <InputBase
        className={styles.input_base}
        classes={{
          root: styles.input_base_root,
          input: styles.input_base_input
        }}
        placeholder={placeholder}
        multiline
        maxRows={5}
        startAdornment={
          account.data?.avatar ? (
            <AvatarIcon src={account.data.avatar} variant='medium' />
          ) : (
            <InitialIcon username={name} variant='medium' />
          )
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className={styles.under}>{children}</div>
    </div>
  )
}

export const LogoutForm = ({ placeholder }: { placeholder: string }) => {
  const [dialog, setDialog] = useState(false)

  return (
    <div className={styles.field}>
      <InputBase
        className={styles.input_base}
        classes={{
          root: styles.input_base_root,
          input: styles.input_base_input,
          disabled: styles.input_base_disabled
        }}
        placeholder={placeholder}
        multiline
        disabled
        startAdornment={
          <AccountCircleIcon />
        }
        onClick={() => setDialog(true)}
      />

      {/* ログインダイアログ */}
      {dialog && <Login dialog={dialog} handleClose={() => setDialog(false)} />}
    </div>
  )
}
