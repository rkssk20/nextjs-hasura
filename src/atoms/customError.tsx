import Image from 'next/image'

import styles from '@/styles/atoms/customError.module.scss'
import Typography from '@mui/material/Typography'

const CustomError = ({ status }: { status: '404' | '500' }) => {
  return (
    <div className={styles.field}>
      <Image src='/favicon.png' width={100} height={100} quality={80} />

      <div className={styles.text_field}>
        <Typography variant='h5'>{status}</Typography>
        <Typography
          className={styles.text}
          classes={{ root: styles.text_root }}
          variant='h6'
        >
          このページは存在しません
        </Typography>
      </div>
    </div>
  )
}

export default CustomError
