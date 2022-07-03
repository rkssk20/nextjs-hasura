import { useEffect, ReactElement } from 'react'
import Side from '@/components/side/Side'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Introduction from '@/atoms/Introduction'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Post from '@/components/post/Post'

import { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'

const Home = () => {
  return (
    <ContainerLayout
      type='website'
      title=''
      description=''
      image=''
    >
      {/* { data.map((item, index) => (
        <Post
          key={ item.id }
          data={ item }
          setRef={ ((data.length - 1) === index) && setRef }
        />
      )) } */}

      {/* { loading && <Circular /> } */}
    </ContainerLayout>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <Introduction />
      
      { page }
    </PageLayout>
  )
}