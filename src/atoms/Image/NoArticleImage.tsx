import styles from '@/styles/atoms/noArticleImage.module.scss'
import Typography from '@mui/material/Typography'

const NoArticleImage = ({ title }: { title: string }) => {
  return (
    <div className={styles.noimage}>
      <Typography
        className={styles.noimage_text}
        classes={{ root: styles.noimage_text_root }}
        color='white'
        variant='h1'
      >
        {title}
      </Typography>
    </div>
  )
}

export default NoArticleImage
