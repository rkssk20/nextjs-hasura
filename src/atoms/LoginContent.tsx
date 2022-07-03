import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import { supabase } from '@/lib/supabaseClient'
import { notificateState } from '@/lib/recoil'

import styles from '@/styles/atoms/loginContent.module.scss'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const LoginContent = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const social = [
    {
      text: 'Twitter',
      src: 'twitter.png',
    },
    {
      text: 'Facebook',
      src: 'facebook.png',
    },
    {
      text: 'Google',
      src: 'google.svg',
    },
  ]

  const handleAuth = async (provider: string) => {
    try {
      const { error } = await supabase.auth.signIn({
        provider:
          provider === 'Twitter' ? 'twitter' : provider === 'Facebook' ? 'facebook' : 'google',
      })

      if (error) throw error
    } catch (error) {
      setNotificate({
        open: true,
        message: '認証でエラーが発生しました。',
      })
    }
  }

  return (
    <div className={styles.content}>
      <Typography variant='h5'>
        ログイン
        <span className={styles.title_slash}>/</span>
        新規登録
      </Typography>

      <Button
        className={styles.eazy}
        classes={{ root: styles.eazy_root }}
        variant='contained'
        color='info'
      >
        簡単ログイン
      </Button>

      <Typography
        className={styles.eazy_caption}
        classes={{ root: styles.eazy_caption_root }}
        variant='caption'
      >
        (ポートフォリオ用) 登録なしでログイン状態になります。
      </Typography>

      {social.map((item) => (
        <Button
          key={item.text}
          className={styles.social}
          classes={{ root: styles.social_root }}
          variant='contained'
          color='info'
          startIcon={<Image src={`/image/${item.src}`} width={40} height={40} quality={70} />}
          onClick={() => handleAuth(item.text)}
        >
          <Typography className={styles.social_text} variant='h5'>
            {item.text}
          </Typography>
        </Button>
      ))}
    </div>
  )
}

export default LoginContent
