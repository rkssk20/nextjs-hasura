import type { ReactElement } from 'react'
import type { ArticleType } from '@/types/types'
import Circular from '@/atoms/Circular'
import useTrend from '@/hooks/select/useTrend'
import Introduction from '@/atoms/Introduction'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Post from '@/components/post/Post'
import SideUser from '@/components/side/SideUser'

const Home = () => {
  const { data, loading } = useTrend()

  return (
    <ContainerLayout
      type='website'
      title=''
      description=''
      image=''
    >
      { data && data.articles.map(item => (
        <Post
          key={ item.id }
          data={ item as ArticleType }
          setRef={ false }
        />
      )) }

      { loading && <Circular /> }
    </ContainerLayout>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <Introduction details />
      
      { page }

      <SideUser />
    </PageLayout>
  )
}