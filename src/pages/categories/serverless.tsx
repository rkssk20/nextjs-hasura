import type { ReactElement } from 'react'
import type { ArticleType } from '@/types/types'
import useServerlessArticles from '@/hooks/select/useServerlessArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Header from '@/components/categories/Header'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Post from '@/components/post/Post'
import Side from '@/components/side/Side'

const Serverless = () => {
  const { data, loading, fetchMore, hasNextPage } = useServerlessArticles()
  const setRef = useObserver({ hasNextPage, fetchMore })

  return (
    <ContainerLayout
      type='article'
      title='フロント'
      description=''
      image=''
    >
      <Header text='サーバーレス' url='serverless' />

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
      {loading && <Circular />}
    </ContainerLayout>
  )
}

export default Serverless

Serverless.getLayout = function getLayout (page: ReactElement) {
  return (
    <PageLayout>
      { page }

      <Side />
    </PageLayout>
  )
}