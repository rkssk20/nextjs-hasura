import type { ReactElement } from 'react'
import type { GetServerSideProps } from 'next'
import usePersonFollowers from '@/hooks/select/usePersonFollowers'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Header from '@/components/account/follow/Header'
import Account from '@/components/account/follow/Account'
import Side from '@/components/side/Side'

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
  } catch {
    return { notFound: true }
  }
}

type AccountProps = {
  item: {
    id: string
    username: string
    avatar: string | undefined
    details: string
    follow_count: number
    follower_count: number
  }
  path: string
}

const Follower = ({ item, path }: AccountProps) => {
  const { data, networkStatus, hasNextPage, fetchMore, cursor } = usePersonFollowers(path)

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
      title={item.username + 'のフォロワー一覧'}
      description={item.details || ''}
      image={ item.avatar ? item.avatar : '' }
    >
      {/* ヘッダー */}
      <Header path={path} name={item.username} />

      {/* 各アカウント */}
      {data && (data.person_followers.length > 0) ? data.person_followers.map((item, index) =>
            <Account
              key={item.follower_id}
              id={item.user_id as string}
              username={item.username as string}
              avatar={item.avatar as string | null}
              details={item.details as string | null}
              setRef={index === (data.person_followers.length - 1) && setRef}
            />
          )
        : (networkStatus === 7) && <Empty text='まだフォローされていません。' />}

      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </ContainerLayout>
  )
}

export default Follower

Follower.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      <Side />
    </PageLayout>
  )
}
