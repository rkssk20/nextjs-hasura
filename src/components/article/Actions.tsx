import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import type { definitions } from '@/types/supabase'
import { accountState } from '@/lib/recoil'
import { supabase } from '@/lib/supabaseClient'
import Popup from '@/atoms/Popup'
import { LoginLike, LogoutLike } from '@/components/article/Like'

const ArticleDelete = dynamic(import('@/components/dialog/ArticleDelete'))
const Report = dynamic(import('@/components/dialog/Report'))

import styles from '@/styles/components/article/actions.module.scss'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MenuItem from '@mui/material/MenuItem'

type ActionsProps = {
  like_count: definitions['articles']['like_count']
  user_id: definitions['articles']['user_id']
  path: string
}

const Actions = ({ like_count, user_id, path }: ActionsProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [likeCountState, setLikeCountState] = useState(like_count)
  const [dialog, setDialog] = useState(false)
  const open = Boolean(anchorEl)
  const account = useRecoilValue(accountState)

  // 詳細メニューを閉じる
  const handleClose = () => {
    setAnchorEl(null)
  }

  // ダイアログ
  const handleDialog = () => {
    setDialog(true)
    handleClose()
  }

  return (
    <div className={styles.card_actions}>
      {account.data ? (
        <LoginLike path={path} setLikeCountState={setLikeCountState} />
      ) : (
        <LogoutLike />
      )}

      {/* いいね数 */}
      <Typography className={styles.favorite_count} variant='caption'>
        {likeCountState.toLocaleString()}
      </Typography>

      {/* 詳細ボタン */}
      <IconButton
        aria-label='詳細'
        className={styles.detail_button}
        classes={{ root: styles.detail_button_root }}
        id='positioned-button'
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>

      {/* 詳細メニュー */}
      <Popup anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
        <MenuItem onClick={handleDialog}>
          {user_id === supabase.auth.user()?.id ? '記事を削除' : '記事の問題を報告'}
        </MenuItem>
      </Popup>

      {dialog && user_id === supabase.auth.user()?.id ? (
        // 削除ダイアログ
        <ArticleDelete dialog={dialog} handleClose={() => setDialog(false)} path={path} />
      ) : (
        // 報告ダイアログ
        <Report dialog={dialog} handleClose={() => setDialog(false)} />
      )}
    </div>
  )
}

export default Actions
