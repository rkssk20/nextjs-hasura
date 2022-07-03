import styles from '@/styles/atoms/introduction.module.scss'
import Typography from '@mui/material/Typography'

const Introduction = () => {
  return (
    <div className={styles.title_back}>
      <Typography
        className={styles.title}
        classes={{ root: styles.title_root }}
        variant='h5'
        color='white'
      >
        Next.jsとHasuraを使用した、技術ブログ風のポートフォリオです。
      </Typography>
      <Typography
        className={styles.title}
        classes={{ root: styles.title_root }}
        variant='h5'
        color='white'
      >
        ログイン・投稿・コメントなど、webサービスとしての機能をお試しください。
      </Typography>
    </div>
  )
}

export default Introduction
