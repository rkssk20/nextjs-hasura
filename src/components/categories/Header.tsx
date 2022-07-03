import Image from 'next/image'
import { useRouter } from 'next/router'
import { CategoriesProps } from '@/types/types'

import styles from '@/styles/components/categories/header.module.scss'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Header = ({ text, url }: CategoriesProps) => {
  const router = useRouter()

  return (
    <div>
      <div className={styles.category}>
        <IconButton aria-label='戻る' onClick={() => router.push('/categories')}>
          <ArrowBackIcon />
        </IconButton>

        <Typography>カテゴリ一覧</Typography>
      </div>

      <div className={styles.title}>
        <Image src={`/image/${url}.png`} alt='サーバーレス' width={60} height={60} quality={70} />

        <Typography className={styles.title_text} variant='h5'>
          {'#' + text}
        </Typography>
      </div>
    </div>
  )
}

export default Header
