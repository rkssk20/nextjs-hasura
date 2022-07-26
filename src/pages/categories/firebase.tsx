import type { ReactElement } from 'react'
import type { ArticleType } from '@/types/types'
import useFirebaseArticles from '@/hooks/select/categories/useFirebaseArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Header from '@/components/categories/Header'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Post from '@/components/post/Post'
import Side from '@/components/side/Side'

const Firebase = () => {
  const { data, loading, fetchMore, networkStatus, hasNextPage, cursor } = useFirebaseArticles()

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
      title='Firebase'
      description=''
      image=''
    >
      <Header text='Firebase' url='firebase' />

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

export default Firebase

Firebase.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      
      <Side />
    </PageLayout>
  )
}
