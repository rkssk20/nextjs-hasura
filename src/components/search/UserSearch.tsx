import useObserver from '@/hooks/atoms/useObserver'
import useUserSearch from '@/hooks/select/search/useUserSearch'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import Account from '@/components/account/follow/Account'

const UserSearch = ({ word }: { word: string | string[] }) => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useUserSearch(word)
  const setRef = useObserver({ hasNextPage, fetchNextPage })

  return (
    <>
      {data && data?.pages[0].length > 0
        ? data.pages.map((page, page_index) =>
          page.map((item, index) => (
            <Account
              key={item.id}
              id={item.id}
              username={item.username}
              avatar={item.avatar}
              details={item.details}
              setRef={data.pages.length - 1 === page_index && page.length - 1 === index && setRef}
            />
          )),
        ) : !isFetching && <Empty text='検索結果はありません' />
      }

      {isFetching && <Circular />}
    </>
  )
}

export default UserSearch
