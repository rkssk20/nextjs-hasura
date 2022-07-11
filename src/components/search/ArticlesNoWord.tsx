import type { ArticleType } from '@/types/types'
import useArticlesNoWord from '@/hooks/select/search/useNoSearchArticles'
import useObserver from '@/hooks/atoms/useObserver'
import Circular from '@/atoms/Circular'
import Post from '@/components/post/Post'

const ArticlesNoWord = () => {
  const { data, networkStatus, hasNextPage, fetchMore, cursor } = useArticlesNoWord()

  const handleMore = () => {
    hasNextPage && fetchMore({
      variables: {
        _lt: cursor
      }
    })
  }

  const setRef = useObserver({ handleMore })

  return (
    <>
      {data &&
        data.articles.map((item, index) =>
          <Post
            key={item.id}
            data={item as ArticleType}
            setRef={ data.articles.length - 1 === index && setRef}
          />
        )
      }

      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </>
  )
}

export default ArticlesNoWord
