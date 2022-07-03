import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import styles from '@/styles/components/header/header.module.scss'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import CreateIcon from '@mui/icons-material/Create'

const Header = ({ setHamburger }: { setHamburger: Dispatch<SetStateAction<boolean>> }) => {
  const router = useRouter()

  // 検索画面に遷移
  const handleSearch = () => {
    if (router.pathname !== '/search') {
      router.push('/search')
    }
  }

  // ログイン時は投稿、ログアウト時はログインに遷移
  const handlePost = () => {
    router.push('/edit')
  }

  return (
    <AppBar color='inherit' position='sticky' elevation={0}>
      <Toolbar className={styles.toolbar} classes={{ root: styles.toolbar_root }}>
        {/* ハンバーガーメニューアイコン */}
        <IconButton
          className={styles.hamburger_button}
          classes={{ root: styles.hamburger_button_root}}
          aria-label='メニュー'
          edge='start'
          onClick={() => setHamburger(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* タイトル */}
        <NextLink href='/' passHref>
          <MuiLink className={styles.title_link} underline='none'>
            <Image
              className={styles.title}
              quality={80}
              width={34}
              height={34}
              alt='Next.js × Suapabase'
              src='/favicon.png'
            />
          </MuiLink>
        </NextLink>

        {/* 検索ボタン */}
        <IconButton
          aria-label='検索'
          className={styles.search_icon}
          classes={{ root: styles.search_icon_root }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>

        {/* 投稿ボタン */}
        <IconButton aria-label='投稿' onClick={handlePost}>
          <CreateIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
