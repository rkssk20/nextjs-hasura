import { useRouter } from 'next/router'
import Bar from '@/atoms/Bar'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ListItemText from '@mui/material/ListItemText'

import styles from '@/styles/components/account/follow/header.module.scss'
import AppBar from '@mui/material/AppBar'

type HeaderProps = {
  name: string
  path: string
}

const Header = ({ name, path }: HeaderProps) => {
  const router = useRouter()

  const tab_list = [
    {
      name: 'フォロー中',
      url: `/account/${path}/follow`,
    },
    {
      name: 'フォロワー',
      url: `/account/${path}/follower`,
    },
  ]

  return (
    <AppBar
      className={styles.app_bar}
      classes={{ root: styles.app_bar_root }}
      position='sticky'
      color='inherit'
      elevation={0}
    >
      <ListItem>
        <ListItemIcon>
          <IconButton onClick={() => router.push(`/account/${path}`)}>
            <ArrowBackIcon />
          </IconButton>
        </ListItemIcon>

        <ListItemText primaryTypographyProps={{ variant: 'h5', noWrap: true }} primary={name} />
      </ListItem>

      {/* 選択バー */}
      <Bar tab_list={tab_list} value={router.pathname === '/account/[id]/follow' ? 0 : 1} />
    </AppBar>
  )
}

export default Header
