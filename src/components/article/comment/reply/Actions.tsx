import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import { accountState } from '@/lib/recoil'
import { LoginLike, LogoutLike } from '@/components/article/comment/reply/Like'

import styles from '@/styles/components/article/comment/reply/actions.module.scss'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const ReplyDelete = dynamic(import('@/components/dialog/ReplyDelete'))
const Report = dynamic(import('@/components/dialog/Report'))

type Props = {
  id: definitions['replies']['id']
  user_id: definitions['replies']['user_id']
  comment_id: definitions['replies']['comment_id']
  comment: definitions['replies']['comment']
  like_count: definitions['replies']['like_count']
  replies_like: definitions['replies_likes'][] | undefined
}

const Actions = ({ id, user_id, comment_id, comment, like_count, replies_like }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [dialog, setDialog] = useState(false)
  const open = Boolean(anchorEl)
  const account = useRecoilValue(accountState)

  // 詳細メニューを閉じる
  const handleClose = () => {
    setAnchorEl(null)
  }

  // 削除ダイアログ
  const handleDialogOpen = () => {
    setDialog(true)
    handleClose()
  }

  return (
    <div className={styles.reply_field}>
      {/* 本文 */}
      <div className={styles.content}>{comment}</div>

      <div className={styles.actions_field}>
        {/* いいねボタン */}
        {account.data ? (
          <LoginLike comment_id={comment_id} id={id} replies_like={replies_like} />
        ) : (
          <LogoutLike />
        )}

        {/* いいね数 */}
        <Typography className={styles.favorite_count} variant='caption'>
          {like_count.toLocaleString()}
        </Typography>

        {/* 詳細ボタン */}
        <IconButton
          className={styles.icon_button}
          classes={{ root: styles.icon_button_root }}
          aria-label='詳細'
          id='positioned-button'
          aria-controls={open ? 'positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MoreVertIcon />
        </IconButton>

        {/* 詳細メニュー */}
        <Menu id='positioned-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleDialogOpen}>
            {user_id === supabase.auth.user()?.id ? 'コメントを削除' : 'コメントの問題を報告'}
          </MenuItem>
        </Menu>
      </div>

      {dialog && user_id === supabase.auth.user()?.id ? (
        // 削除ダイアログ
        <ReplyDelete
          dialog={dialog}
          handleClose={() => setDialog(false)}
          id={id}
          comment_id={comment_id}
        />
      ) : (
        // 報告ダイアログ
        <Report dialog={dialog} handleClose={() => setDialog(false)} />
      )}
    </div>
  )
}

export default Actions
