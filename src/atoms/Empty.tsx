import styles from '@/styles/atoms/empty.module.scss'
import Typography from '@mui/material/Typography'

const Empty = ({ text }: { text: string }) => {
  return (
    <Typography className={styles.title} variant='h6'>
      {text}
    </Typography>
  )
}

export default Empty
