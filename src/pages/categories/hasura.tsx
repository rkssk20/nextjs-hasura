import type { ReactElement } from 'react'
import type { ArticleType } from '@/types/types'
import useHasuraArticles from '@/hooks/select/categories/useHasuraArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Header from '@/components/categories/Header'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Post from '@/components/post/Post'
import Side from '@/components/side/Side'

const Hasura = () => {
  const { data, loading, fetchMore, networkStatus, hasNextPage, cursor } = useHasuraArticles()

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
      type='article'
      title='Hasura'
      description=''
      image=''
    >
      <Header text='Hasura' url='hasura' />

      {/* 投稿一覧 */}
      { data && data.articles.map((item, index) =>
          <Post
            key={item.id}
            data={item as ArticleType}
            setRef={index === (data.articles.length - 1) && setRef}
          />
        )
      }

      {/* 読み込み中 */}
      {(loading || (networkStatus === 3)) && <Circular />}
    </ContainerLayout>
  )
}

export default Hasura

Hasura.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      
      <Side />
    </PageLayout>
  )
}
