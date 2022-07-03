import { useState, ReactNode } from 'react'
import Router from 'next/router'
import { useRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'
import Header from '@/components/header/Header'
import Hamburger from '@/components/header/hamburger/Hamburger'

import styles from '@/styles/components/provider/pageLayout.module.scss'
import Snackbar from '@mui/material/Snackbar'
import Fade from '@mui/material/Fade'
import LinearProgress from '@mui/material/LinearProgress'

interface Props {
  children: ReactNode
}

const PageLayout = ({ children }: Props) => {
  const [progress, setProgress] = useState(0)
  const [progressOpen, setProgressOpen] = useState(false)
  const [hamburger, setHamburger] = useState(false)
  const [notificate, setNotificate] = useRecoilState(notificateState)

  // インジケーターを開始する
  const handleProgressOpen = () => {
    setProgress(30)
    setProgressOpen(true)
  }

  // インジケーターを終了する
  const handleProgressClose = () => {
    setProgress(100)

    setTimeout(() => {
      setProgressOpen(false)

      setTimeout(() => {
        setProgress(0)
      }, 195)
    }, 350)
  }

  // 画面遷移でインジケーター開始
  Router.events.on('routeChangeStart', handleProgressOpen)
  // 読み込み終了
  Router.events.on('routeChangeComplete', handleProgressClose)
  // エラー
  Router.events.on('routeChangeError', handleProgressClose)

  return (
    <>
      {/* 画面遷移の読み込みインジケーター */}
      <Fade in={progressOpen}>
        <LinearProgress
          className={styles.liner}
          classes={{ root: styles.liner_root }}
          variant='determinate'
          value={progress}
        />
      </Fade>

      {/* ヘッダー */}
      <Header setHamburger={setHamburger} />

      {/* ハンバーガーメニュー */}
      <Hamburger hamburger={hamburger} setHamburger={setHamburger} />

      {/* 中身 */}
      <div className={ styles.container }>
        { children }
      </div>

      {/* 通知 */}
      <Snackbar
        open={notificate.open}
        onClose={() => setNotificate({ open: false, message: '' })}
        message={notificate.message}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      />
    </>
  )
}

export default PageLayout