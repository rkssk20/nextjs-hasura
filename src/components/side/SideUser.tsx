import NextLink from 'next/link'
import useTrendUser from '@/hooks/select/useTrendUser'
import Account from '@/components/account/follow/Account'

import styles from '@/styles/components/side/side.module.scss'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'

const SideUser = () => {
  const data = useTrendUser()

  return (
    <div className={styles.field}>
      <div className={styles.list}>
        <div className={styles.header}>
          <TrendingUpIcon />
          <Typography className={styles.title}>人気ユーザー</Typography>
        </div>

        { data && data.profiles.map(item =>
            <Account
              key={item.id}
              id={item.id}
              username={item.username}
              avatar={item.avatar as string | null}
              details={item.details as string | null}
              setRef={false}
            />
          )
        }

        <NextLink href='/search=?sorce=user' passHref>
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

export default SideUser