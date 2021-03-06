import { useState } from 'react'
import useSelectReplies from '@/hooks/select/useSelectReplies'
import Header from '@/components/article/comment/Header'
import Actions from '@/components/article/comment/reply/Actions'
import ReplyForm from '@/components/article/comment/reply/ReplyForm'

import styles from '@/styles/components/article/comment/reply/replies.module.scss'
import Button from '@mui/material/Button'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import CircularProgress from '@mui/material/CircularProgress'

type ShowReplyProps = {
  path: string
  id: number
}

const ShowReplies = ({ path, id }: ShowReplyProps) => {
  const [formOpen, setFormOpen] = useState(false)
  const { data, networkStatus, fetchMore, hasNextPage, cursor } = useSelectReplies(id)

  return (
    <div>
      {/* リプライ欄 */}
      {data && data.replies.map((item) =>
        <div key={item.id} id={'reply' + String(item.id)}>
          {/* アカウント、投稿日時 */}
          <Header
            username={item.profile.username}
            user_id={item.user_id}
            avatar={item.profile.avatar as string | null}
            created_at={item.created_at}
          />

          {/* いいね、詳細ボタン */}
          <Actions
            id={item.id}
            user_id={item.user_id}
            comment={item.comment}
            replies_like_id={item?.replies_likes[0]?.id as number | null}
            like_count={item.like_count}
          />
        </div>
      )}

      {(networkStatus === 7) && (
        <div className={styles.more_field}>
          {/* 返信ボタン */}
          {data && data.replies.length > 0 && (
            <Button
              className={styles.reply_button}
              style={{ marginLeft: 16, borderRadius: 9999, flexShrink: 0 }}
              variant='outlined'
              color='inherit'
              startIcon={<ChatBubbleOutlineIcon />}
              onClick={() => setFormOpen(true)}
            >
              返信
            </Button>
          )}

          {/* さらに表示ボタン */}
          {hasNextPage && (
            <Button
              className={styles.more_button}
              classes={{ root: styles.more_button_root }}
              onClick={() => fetchMore({ variables: { _lt: cursor } })}
            >
              返信をさらに表示
            </Button>
          )}
        </div>
      )}

      {/* 返信フォーム */}
      {formOpen && <ReplyForm path={path} id={id} setFormOpen={setFormOpen} />}

      {/* ローディング */}
      {((networkStatus === 1) || (networkStatus === 3)) && (
        <div className={styles.circular_field}>
          <CircularProgress size={32} />
        </div>
      )}
    </div>
  )
}

type RepliesProps = ShowReplyProps & {
  reply_count: number
}

const Replies = ({ path, id, reply_count }: RepliesProps) => {
  const [open, setOpen] = useState(false)

  return open ? (
    <ShowReplies path={path} id={id} />
  ) : (
    <Button
      className={styles.more_button}
      classes={{ root: styles.more_button_root }}
      onClick={() => setOpen(true)}
    >
      <span className={styles.more_text}>{reply_count.toLocaleString()}</span>
      件の返信を表示
    </Button>
  )
}

export default Replies
