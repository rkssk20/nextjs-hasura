import { useEffect, Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'
import Loading from '@/components/header/hamburger/Loading'
import Login from '@/components/header/hamburger/Login'
import Logout from '@/components/header/hamburger/Logout'

import styles from '@/styles/components/header/hamburger/hamburger.module.scss'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TagIcon from '@mui/icons-material/Tag'

type HamburgerProps = {
  hamburger: boolean
  setHamburger: Dispatch<SetStateAction<boolean>>
}

const Hamburger = ({ hamburger, setHamburger }: HamburgerProps) => {
  const router = useRouter()
  const account = useRecoilValue(accountState)
  const id = supabase.auth.user()?.id

  const main_list = [
    {
      url: '/',
      text: 'トレンド',
      icon: <TrendingUpIcon />,
    },
    {
      url: '/categories',
      text: 'カテゴリ',
      icon: <TagIcon />,
    },
  ]

  // メニューを閉じる
  const handleClose = () => {
    setHamburger(false)
  }

  // 戻る、進むボタンで遷移した場合
  useEffect(() => {
    router.beforePopState(() => {
      handleClose()
      return true
    })
  }, [])

  return (
    <Drawer
      className={styles.drawer}
      classes={{ paper: styles.drawer_paper }}
      ModalProps={{ BackdropProps: { classes: { root: styles.back_root } } }}
      variant='temporary'
      open={hamburger}
      onClose={handleClose}
    >
      {/* アカウント関連のリンク  */}
      {account.loading ? (
        <Loading />
      ) : id && account.data ? (
        <Login
          id={id}
          username={account.data.username}
          avatar={account.data.avatar}
          handleClose={handleClose}
        />
      ) : (
        <Logout handleClose={handleClose} />
      )}

      <Divider className={styles.divider} classes={{ root: styles.divider_root }} />

      {/* 主要ページへのリンク */}
      <List>
        {main_list.map((item) => (
          <Link key={item.url} href={item.url} passHref>
            <ListItemButton
              className={styles.list_item_button}
              classes={{ root: styles.list_item_button_root }}
              component='a'
              onClick={handleClose}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primaryTypographyProps={{ variant: 'h5' }}>{item.text}</ListItemText>
            </ListItemButton>
          </Link>
        ))}
      </List>

      <Divider className={styles.divider} classes={{ root: styles.divider_root }} />

      {/* その他のページへのリンク */}
      <List>
        <Link href='/about' passHref>
          <ListItemButton
            className={styles.list_item_button}
            classes={{ root: styles.list_item_button_root }}
            component='a'
            onClick={handleClose}
          >
            <ListItemText primaryTypographyProps={{ variant: 'h5' }}>
              このサイトについて
            </ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  )
}

export default Hamburger
