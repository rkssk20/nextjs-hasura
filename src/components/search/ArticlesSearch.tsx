import type { ArticleType } from '@/types/types'
import useObserver from '@/hooks/atoms/useObserver'
import useArticlesSearch from '@/hooks/select/search/useArticlesSearch'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import Post from '@/components/post/Post'

const ArticlesSearch = ({ word }: { word: string | string[] }) => {
  const { data, networkStatus, fetchMore, hasNextPage, cursor } = useArticlesSearch(word)
  
  const handleMore = () => {
    hasNextPage && fetchMore({
      variables: {
        _ilike: "%" + word + "%",
        _lt: cursor
      }
    })
  }

  const setRef = useObserver({ handleMore })


  return (
    <>
      {data && (data.articles.length > 0) ? data.articles.map((item, index) =>
        <Post
          key={item.id}
          data={item as ArticleType}
          setRef={ data.articles.length - 1 === index && setRef}
        />
        ) : (networkStatus === 7) && <Empty text='検索結果はありません' />
      }

      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </>
  )
}

export default ArticlesSearch
