import { ArticleType } from '@/types/types'
import Category from '@/atoms/Category'

import styles from '@/styles/components/post/content.module.scss'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

interface ContentProps {
  title: ArticleType['title']
  details: ArticleType['details']
  categories: ArticleType['categories']
}

const Content = ({ title, details, categories }: ContentProps) => {
  // 投稿の概要ではマークダウンの特殊文字を外す
  const escape_text = details.replace(/\_|\*|\\|\`|\#|\+|\-|\!|\{|\}|\[|\]/g, '')

  return (
    <div className={styles.content}>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='body1'>{escape_text + '...'}</Typography>

      {categories && (
        <Stack className={styles.tags} direction='row' alignItems='center'>
          {categories.map((item) => (
            <Category key={item} category={item} />
          ))}
        </Stack>
      )}
    </div>
  )
}

export default Content
