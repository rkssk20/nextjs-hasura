import useFirstObserve from '@/hooks/atoms/useFirstObserve'
import useSelectComments from '@/hooks/select/useSelectComments'
import Circular from '@/atoms/Circular'
import CommentForm from '@/components/article/comment/CommenForm'
import Header from '@/components/article/comment/Header'
import Actions from '@/components/article/comment/Actions'
import Replies from '@/components/article/comment/reply/Replies'

import styles from '@/styles/components/article/comment/comments.module.scss'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

type CommentsProps = {
  path: string
  comments: number
}

const Comments = ({ path, comments }: CommentsProps) => {
  // コメントの取得
  const { firstQuery, data, networkStatus, fetchMore, hasNextPage, cursor } = useSelectComments(path)
  // タイトルを監視して初回の取得
  const ref = useFirstObserve(firstQuery)

  return (
    <div>
      {/* タイトル */}
      <Typography ref={ref} className={styles.title} variant='h6'>
        コメント
        {comments > 0 && (
          <>
            <span className={styles.comments}>{comments.toLocaleString()}</span>件
          </>
        )}
      </Typography>

      {/* コメントフォーム */}
      <CommentForm path={path} />

      {/* コメント欄 */}
      { data && (data.comments.length > 0) ? data.comments.map(item =>
        <Card
          key={item.id}
          id={'comment' + String(item.id)}
          className={styles.card}
          elevation={0}
        >
          {/* アカウント、投稿時間 */}
          <Header
            username={item.profile.username}
            user_id={item.user_id}
            avatar={item.profile.avatar as string | null}
            created_at={item.created_at}
          />

          {/* いいね、詳細ボタン */}
          <Actions
            path={path}
            id={item.id}
            user_id={item.user_id}
            comment={item.comment}
            like_count={item.like_count}
            comments_likes_id={item?.comments_likes[0]?.id}
          />

          {/* リプライ欄 */}
          {item.reply_count > 0 && (
            <Replies path={path} id={item.id} reply_count={item.reply_count} />
          )}
        </Card>
        ) : (networkStatus === 7) && (
          <div className={styles.empty_field}>
            <Typography variant='body1'>まだコメントがありません。</Typography>
          </div>
        )}

      {/* さらに表示ボタン */}
      {data && (data?.comments.length > 0) && (networkStatus === 7) && hasNextPage && (
        <Button
          className={styles.more_button}
          classes={{ root: styles.more_button_root }}
          onClick={() => fetchMore({ variables: { _lt: cursor } })}
        >
          さらに表示
        </Button>
      )}

      {/* ローディング */}
      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </div>
  )
}

export default Comments