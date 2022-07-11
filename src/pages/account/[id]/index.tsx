import type { ReactElement } from 'react'
import type { GetServerSideProps } from 'next'
import type { ArticleType, ProfileType } from '@/types/types'
import Side from '@/components/side/Side'
import usePersonArticles from '@/hooks/select/usePersonArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Profile from '@/components/account/Profile'
import Bar from '@/components/account/Bar'
import Post from '@/components/post/Post'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id

  if (!id || typeof id !== 'string') return { notFound: true }

  try {
    const data = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query MyQuery($id: String!) {
          profiles_by_pk(id: $id) {
            username
            avatar
            details
            follow_count
            follower_count
          }
        }
      `,
        variables: {
          id
        },
      })
    })

    const result = await data.json()

    return {
      props: {
        item: result.data.profiles_by_pk,
        path: id
      }
    }
  } catch(error) {
    console.log(error)
    return { notFound: true }
  }
}

type AccountProps = ProfileType & {
  path: string
}

const Account = ({ item, path }: AccountProps) => {
  const { data, networkStatus, fetchMore, hasNextPage, cursor } = usePersonArticles(path)

  const handleMore = () => {
    hasNextPage && fetchMore({
      variables: {
        _lt: cursor
      }
    })
  }

  const setRef = useObserver({ handleMore })

  return (
    <ContainerLayout
      type='profile'
      title={item.username}
      description={item.details || ''}
      image={ item.avatar ? item.avatar : ''  }
    >
      {/* アカウント情報 */}
      <Profile path={path} item={item} />

      {/* ページ選択バー */}
      <Bar path={path} />

      {/* 自分の投稿一覧 */}
      { data && (data.articles.length > 0) ? data.articles.map((item, index) =>
          <Post
            key={item.id}
            data={item as ArticleType}
            setRef={index === (data.articles.length - 1) && setRef}
          />
        ) : (networkStatus === 7) && <Empty text='まだ投稿がありません' />
      }

      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </ContainerLayout>
  )
}

export default Account

Account.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      <Side />
    </PageLayout>
  )
}
