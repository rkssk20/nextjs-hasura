import useObserver from '@/hooks/atoms/useObserver'
import useUserNoWord from '@/hooks/select/search/useUserNoWord'
import Circular from '@/atoms/Circular'
import Account from '@/components/account/follow/Account'

const UserNoWord = () => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useUserNoWord()
  const setRef = useObserver({ hasNextPage, fetchNextPage })

  return (
    <>
      {data &&
        data.pages.map((page, page_index) =>
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
        )
      }

      {isFetching && <Circular />}
    </>
  )
}

export default UserNoWord
