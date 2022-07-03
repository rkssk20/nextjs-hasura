import { definitions } from '@/types/supabase'
import Category from '@/atoms/Category'

import styles from '@/styles/components/article/title.module.scss'
import Typography from '@mui/material/Typography'

type TitleProps = {
  categories: definitions['categories'][]
  title: definitions['articles']['title']
}

const Title = ({ categories, title }: TitleProps) => {
  return (
    <div className={styles.field}>
      {categories.length > 0 && (
        <div className={styles.tags}>
          {categories.map((item) => (
            <Category key={item.category} category={item.category} />
          ))}
        </div>
      )}

      <Typography className={styles.title} variant='h1'>
        {title}
      </Typography>
    </div>
  )
}

export default Title
