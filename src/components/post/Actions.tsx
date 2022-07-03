import type { Dispatch, SetStateAction, TouchEvent, MouseEvent } from 'react'
import type { ArticleType } from '@/types/types'

import styles from '@/styles/components/post/actions.module.scss'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import Typography from '@mui/material/Typography'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

type ActionsProps = {
  like_count: ArticleType['like_count']
  comment_count: ArticleType['comment_count']
  setDialog: Dispatch<SetStateAction<boolean>>
}

const Actions = ({ like_count, comment_count, setDialog }: ActionsProps) => {
  // 共有ダイアログを開く
  const handleShare = (e: MouseEvent) => {
    e.stopPropagation()
    setDialog(true)
  }

  return (
    <div className={styles.actions}>
      {/* いいねアイコン */}
      <FavoriteBorderIcon className={styles.favorite} color='action' />

      {/* いいね数 */}
      <Typography variant='caption'>{like_count.toLocaleString()}</Typography>

      {/* コメントアイコン */}
      {comment_count > 0 && <ChatBubbleOutlineIcon className={styles.comments_icon} />}

      {/* コメント数 */}
      {comment_count > 0 && (
        <Typography className={styles.comments_count} variant='caption'>
          {comment_count.toLocaleString()}
        </Typography>
      )}

      {/* 共有ボタン */}
      <IconButton
        className={styles.icon_button}
        classes={{ root: styles.icon_button_root }}
        aria-label='共有'
        onClick={handleShare}
        onMouseDown={(e: MouseEvent) => e.stopPropagation()}
        onTouchStart={(e: TouchEvent) => e.stopPropagation()}
      >
        <ShareIcon />
      </IconButton>
    </div>
  )
}

export default Actions
