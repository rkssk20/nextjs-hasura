import { useRouter } from 'next/router'
import AtomsBar from '@/atoms/Bar'

import styles from '@/styles/components/account/bar.module.scss'
import AppBar from '@mui/material/AppBar'

const Bar = ({ path }: { path: string }) => {
  const router = useRouter()

  const tab_list = [
    { name: '投稿', url: `/account/${path}` },
    { name: 'いいね', url: `/account/${path}/likes` },
  ]

  return (
    <AppBar
      className={styles.app_bar}
      classes={{ root: styles.app_bar_root }}
      position='sticky'
      color='inherit'
      elevation={0}
    >
      <AtomsBar tab_list={tab_list} value={router.pathname === '/account/[id]/likes' ? 1 : 0} />
    </AppBar>
  )
}

export default Bar
