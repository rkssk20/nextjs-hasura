import styles from '@/styles/atoms/circular.module.scss'
import CircularProgress from '@mui/material/CircularProgress'

const Circular = () => {
  return (
    <div className={styles.field}>
      <CircularProgress className={styles.circular} size={40} />
    </div>
  )
}

export default Circular
