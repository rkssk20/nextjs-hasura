import { useState, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { ArticleType } from '@/types/types'
import ArticleImage from '@/atoms/Image/ArticleImage'
import NoArticleImage from '@/atoms/Image/NoArticleImage'
import Header from '@/components/post/Header'
import Content from '@/components/post/Content'
import Actions from '@/components/post/Actions'
import Share from '@/components/dialog/Share'

import styles from '@/styles/components/post/post.module.scss'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'

type PostProps = {
  data: ArticleType
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>> | false
}

const Post = ({ data, setRef }: PostProps) => {
  const [dialog, setDialog] = useState(false)
  const router = useRouter()
  const url = `/article/${data.id}`

  return (
    <Card className={styles.card} classes={{ root: styles.card_root }} elevation={0}>
      <CardActionArea
        className={styles.actionarea}
        classes={{ root: styles.actionarea_root }}
        ref={setRef ? (ref: HTMLDivElement) => setRef(ref) : undefined}
        component='div'
        onClick={ () => router.push(url, url) }
      >
        {/* ヘッダー */}
        <Header
          id={data.user_id}
          username={data.username}
          avatar={data.avatar}
          created_at={data.created_at}
        />

        {/* 画像 */}
        {data.image && data.image.length > 0 ? (
          <ArticleImage image={data.image} />
        ) : (
          <NoArticleImage title={data.title} />
        )}

        {/* タイトル、詳細、タグ */}
        <Content title={data.title} details={data.details} categories={data.categories} />

        {/* 投稿時間、いいね、コメント数、詳細ボタン */}
        <Actions
          like_count={data.like_count}
          comment_count={data.comment_count}
          setDialog={setDialog}
        />
      </CardActionArea>

      {/* 共有ダイアログ */}
      {dialog && <Share dialog={dialog} handleClose={() => setDialog(false)} path={data.id} />}
    </Card>
  )
}

export default Post
