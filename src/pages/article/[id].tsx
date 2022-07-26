import type { GetStaticProps, GetStaticPaths } from 'next'
import { useState, useEffect } from 'react'
import { ref, getDownloadURL } from 'firebase/storage'
import RemarkDown from '@/lib/remarkDown'
import { storage } from '@/lib/firebase'
import ArticleImage from '@/atoms/Image/ArticleImage'
import NoArtcileImage from '@/atoms/Image/NoArticleImage'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Title from '@/components/article/Title'
import Header from '@/components/article/Header'
import Share from '@/components/article/Share'
import Actions from '@/components/article/Actions'
import Comments from '@/components/article/comment/Comments'
import Side from '@/components/side/Side'

import 'highlight.js/styles/default.css'
import styles from '@/styles/pages/article/id.module.scss'
import Typography from '@mui/material/Typography'
import { ReactElement } from 'react'

// ISR
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  if (!id || typeof id !== 'string') return { notFound: true }

  try {
    const data = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query GetArtiles($id: String!) {
          articles_by_pk(id: $id) {
            title
            image
            details
            user_id
            like_count
            comment_count
            created_at
            categories {
              category
              id
            }
            profile {
              avatar
              username
            }
          }
        }
      `,
        variables: {
          id
        },
      })
    })

    const result = await data.json()

    const remark = await RemarkDown(result.data.articles_by_pk.details)

    return {
      props: {
        item: {
          ...result.data.articles_by_pk,
          details: remark,
        },
        path: id,
      },
      // 5分キャッシュ
      revalidate: 300,
    }
  } catch {
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

interface ArticleProps {
  item: {
    user_id: string
    title: string
    details: string
    image: string | undefined
    like_count: number
    comment_count: number
    created_at: string
    profile: {
      username: string
      avatar: string | null
    }
    categories: {
      id: number
      category: number
    }[]
  }
  path: string
}

const Article = ({ item, path }: ArticleProps) => {
  const [image, setImage] = useState('')
  
  useEffect(() => {
    if(item.image) {
      (async() => {
        const result = await getDownloadURL(ref(storage, item.image))

        setImage(result)
      })()
    }
  }, [item.image])

  return (
    <ContainerLayout
      type='article'
      title={item.title}
      description={item.details.replace(/\_|\*|\\|\`|\#|\+|\-|\!|\{|\}|\[|\]/g, '').slice(0, 100)}
      image={item.image ?? ''}
    >
      {/* 画像 */}
      {image ? <ArticleImage image={image} /> : <NoArtcileImage title={item.title} />}

      {/* タグ、タイトル、投稿日時 */}
      <Title categories={item.categories} title={item.title} />

      {/* 投稿者、投稿日時 */}
      <Header
        user_id={item.user_id}
        avatar={ item.profile.avatar }
        name={item.profile.username}
        created_at={item.created_at}
      />

      {/* 記事の詳細 */}
      <div className={styles.content}>
        {/* <Typography variant='body1'>{ item.details }</Typography> */}
        <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: item.details }} />
      </div>

      {/* 共有 */}
      <div className={styles.content}>
        <Typography component='p' variant='h5'>
          この記事を共有する
        </Typography>

        <Share path={path} />
      </div>

      {/* いいね、詳細ボタン */}
      <Actions
        path={path}
        user_id={item.user_id}
        like_count={item.like_count}
        image={ item.image }
      />

      {/* コメント欄 */}
      <Comments path={path} comments={item.comment_count} />
    </ContainerLayout>
  )
}

export default Article

Article.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}

      <Side />
    </PageLayout>
  )
}