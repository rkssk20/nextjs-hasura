import useObserver from '@/hooks/atoms/useObserver'
import useUserSearch from '@/hooks/select/search/useUserSearch'
import Circular from '@/atoms/Circular'
import Empty from '@/atoms/Empty'
import Account from '@/components/account/follow/Account'

const UserSearch = ({ word }: { word: string | string[] }) => {
  const { data, networkStatus, fetchMore, hasNextPage, cursor } = useUserSearch(word)

  const handleMore = () => {
    hasNextPage && fetchMore({
      variables: {
        _ilike: "%" + word + "%",
        _and: {
          follow_count: {
            _lte: cursor.follower_count
          },
          id: {
            _lt: cursor.id
          }
        }
      }
    })
  }

  const setRef = useObserver({ handleMore })

  return (
    <>
      {data && (data?.profiles.length > 0) ? data.profiles.map((item, index) => (
        <Account
          key={item.id}
          id={item.id}
          username={item.username}
          avatar={item.avatar as string | null}
          details={item.details as string | null}
          setRef={data.profiles.length - 1 === index && data.profiles.length - 1 === index && setRef}
        />)
      ) : (networkStatus === 7) && <Empty text='検索結果はありません' />
      }

      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </>
  )
}

export default UserSearch
