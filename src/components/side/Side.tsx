import NextLink from 'next/link'
import useSideTrend from '@/hooks/select/useSideTrend'
import SidePost from '@/components/side/SidePost'

import styles from '@/styles/components/side/side.module.scss'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'

const Side = () => {
  const data = useSideTrend()

  if(data && data.articles.length === 0) return null

  return (
    <div className={styles.field}>
      <div className={styles.list}>
        <div className={styles.header}>
          <TrendingUpIcon />
          <Typography className={styles.title}>トレンド</Typography>
        </div>

        { data && data.articles.map((item) => (
          <SidePost
            key={ item.id }
            id={ item.id }
            title={ item.title }
            image={ item.image }
            username={ item.profile.username }
          />
        ))}

        <NextLink href='/' passHref>
          <Button
            LinkComponent='a'
            className={styles.more_button}
            classes={{ root: styles.more_button_root }}
          >
            さらに表示
          </Button>
        </NextLink>
      </div>

      {/* 最下部 */}
      <div className={styles.list_under}>
        <NextLink href='/about' passHref>
          <MuiLink className={styles.link} underline='hover' color='' variant='caption'>
            このサイトについて
          </MuiLink>
        </NextLink>

        <Typography variant='caption'>@2022 Next.js × Hasura</Typography>
      </div>
    </div>
  )
}

export default Side