import type { ReactElement } from 'react'
import type { GetServerSideProps } from 'next'
import type { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import useLikesArticles from '@/hooks/select/useLikesArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import Side from '@/components/side/Side'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Profile from '@/components/account/Profile'
import Bar from '@/components/account/Bar'
import Post from '@/components/post/Post'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id

  if (typeof id !== 'string') return { notFound: true }

  try {
    const { data, error } = await supabase
      .from<definitions['profiles']>('profiles')
      .select('username, avatar, details, follow_count, follower_count')
      .eq('id', id)
      .single()

    if (error) throw error

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

type AccountProps = {
  item: definitions['profiles']
  path: string
}

const Likes = ({ item, path }: AccountProps) => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useLikesArticles(path)
  const setRef = useObserver({ hasNextPage, fetchNextPage })

  return (
    <ContainerLayout
      type='profile'
      title={item.username + 'がいいねした投稿一覧'}
      description={item.details || ''}
      image={ item.avatar ?
        process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/' + item.avatar : ''
      }
    >
      {/* アカウント情報 */}
      <Profile path={path} item={item} />

      {/* ページ選択バー */}
      <Bar path={path} />

      {/* 自分の投稿一覧 */}
      {data && data.pages[0].length > 0
        ? data.pages.map((page, page_index) =>
            page.map((item, index) => (
              <Post
                key={item.id}
                data={item}
                setRef={data.pages.length - 1 === page_index && page.length - 1 === index && setRef}
              />
            )),
          )
        : !isFetching && <Empty text='まだいいねした投稿がありません' />}

      {isFetching && <Circular />}
    </ContainerLayout>
  )
}

export default Likes

Likes.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}

      <Side />
    </PageLayout>
  )
}
