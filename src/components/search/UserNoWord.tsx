import useObserver from '@/hooks/atoms/useObserver'
import useNoSearchProfiles from '@/hooks/select/search/useNoSearchProfiles'
import Circular from '@/atoms/Circular'
import Account from '@/components/account/follow/Account'

const UserNoWord = () => {
  const { data, networkStatus, hasNextPage, fetchMore, cursor } = useNoSearchProfiles()

  const handleMore = () => {
    hasNextPage && fetchMore({
      variables: {
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
      {data && data.profiles.map((item, index) =>
        <Account
          key={item.id}
          id={item.id}
          username={item.username}
          avatar={item.avatar as string | null}
          details={item.details as string | null}
          setRef={ data.profiles.length - 1 === index && setRef}
        />
        )
      }

      {((networkStatus === 1) || (networkStatus === 3)) && <Circular />}
    </>
  )
}

export default UserNoWord
