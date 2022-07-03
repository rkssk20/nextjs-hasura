import useObserver from '@/hooks/atoms/useObserver'
import useArticlesSearch from '@/hooks/select/search/useArticlesSearch'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import Post from '@/components/post/Post'

const ArticlesSearch = ({ word }: { word: string | string[] }) => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useArticlesSearch(word)
  const setRef = useObserver({ hasNextPage, fetchNextPage })

  return (
    <>
      {data && data.pages[0].length > 0
        ? data.pages.map((page, page_index) =>
          page.map((item, index) => (
            <Post
              key={item.id}
              data={item}
              setRef={data.pages.length - 1 === page_index && page.length - 1 === index && setRef}
            />
          )),
        ) : !isFetching && <Empty text='検索結果はありません' />
      }

      {isFetching && <Circular />}
    </>
  )
}

export default ArticlesSearch
