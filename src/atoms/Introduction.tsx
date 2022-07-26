import { useRouter } from 'next/router'
import { ContainedButton } from '@/atoms/Button'

import styles from '@/styles/atoms/introduction.module.scss'
import Typography from '@mui/material/Typography'

const Introduction = ({ details }: { details: boolean }) => {
  const router = useRouter()

  return (
    <div className={styles.title_back}>
      <Typography
        className={styles.title}
        classes={{ root: styles.title_root }}
        variant='h1'
      >
        Next.js × Hasura
      </Typography>

      <Typography
        className={styles.subtitle}
        classes={{ root: styles.subtitle_root }}
        variant='caption'
      >
        技術ブログ風のポートフォリオ
      </Typography>

      <Typography
        className={styles.text}
        classes={{ root: styles.text_root }}
        variant='h5'
        >
        ログイン・投稿・いいね・コメントなどお試しください
      </Typography>

      <Typography
        className={styles.text}
        classes={{ root: styles.text_root }}
        variant='h5'
      >
        <a
          className={styles.supabase}
          href='https://nextjs-supabase.tk'
          target='_blank'
        >
          Supabase版
        </a>
        と
        <a
          className={styles.firebase}
          href='https://nextjs-firebase.tk'
          target='_blank'
        >
          Firebase版
        </a>
        もあります
      </Typography>

      { details &&
        <ContainedButton
          text='このサイトについて'
          handle={ () => router.push('/about') }
        />
      }
    </div>
  )
}

export default Introduction
