import type { ReactElement } from 'react'
import type { GetServerSideProps } from 'next'
import type { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import usePersonFollows from '@/hooks/select/usePersonFollows'
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

  if (typeof id !== 'string') return { notFound: true }

  try {
    const { data, error } = await supabase
      .from<definitions['profiles']>('profiles')
      .select('username, avatar, details')
      .eq('id', id)
      .single()
  
    if (error || !data) return { notFound: true }
  
    return {
      props: {
        item: data,
        path: id,
      }
    }
  } catch {
    return { notFound: true }
  }
}

type FollowProps = {
  item: definitions['profiles']
  path: string
}

const Follow = ({ item, path }: FollowProps) => {
  const { data, isFetching, hasNextPage, fetchNextPage } = usePersonFollows(path)
  const setRef = useObserver({ hasNextPage, fetchNextPage })

  return (
    <ContainerLayout
      type='profile'
      title={item.username + 'のフォロー一覧'}
      description={item.details || ''}
      image={ item.avatar ?
        process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/' + item.avatar : ''
      }
    >
      {/* ヘッダー */}
      <Header path={path} name={item.username} />

      {/* 各アカウント */}
      {data && data.pages[0].length > 0
        ? data.pages.map((page, page_index) =>
          page.map((item, index) => (
            <Account
              key={item.follower_id}
              id={item.follower_id}
              username={item.username}
              avatar={item.avatar}
              details={item.details}
              setRef={data.pages.length - 1 === page_index && page.length - 1 === index && setRef}
            />
          )),
        ) : !isFetching && <Empty text='まだ誰もフォローしていません。' />
      }

      {isFetching && <Circular />}
    </ContainerLayout>
  )
}

export default Follow

Follow.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      <Side />
    </PageLayout>
  )
}
