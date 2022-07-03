import type { ReactElement } from 'react'
import useCategoriesArticles from '@/hooks/select/useCategoriesArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Header from '@/components/categories/Header'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Post from '@/components/post/Post'
import Side from '@/components/side/Side'

const Front = () => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useCategoriesArticles(0)
  const setRef = useObserver({ hasNextPage, fetchNextPage })

  return (
    <ContainerLayout
      type='article'
      title='フロント'
      description=''
      image=''
    >
      <Header text='フロント' url='front' />

      {/* 投稿一覧 */}
      {data &&
        data.pages.map((page, page_index) =>
          page.map((item, index) => (
            <Post
              key={item.id}
              data={item}
              setRef={data.pages.length - 1 === page_index && page.length - 1 === index && setRef}
            />
          )),
        )}

      {/* 読み込み中 */}
      {isFetching && <Circular />}
    </ContainerLayout>
  )
}

export default Front

Front.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      
      <Side />
    </PageLayout>
  )
}
