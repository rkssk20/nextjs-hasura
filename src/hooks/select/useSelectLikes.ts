import { useQuery } from '@apollo/client'
import { GET_LIKES } from '@/graphql/queries'
import type { GetLikesQuery } from '@/types/generated/graphql'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useSelectLikes = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)

  const { data, loading } = useQuery<GetLikesQuery>(GET_LIKES, {
    variables: {
      _eq: path
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, loading }
}

// const FetchData = async (path: string) => {
//   const id = supabase.auth.user()?.id

//   if (!id) throw 'error'

//   const { data, error } = await supabase
//     .from<definitions['likes']>('likes')
//     .select('id')
//     .match({ articles_id: path, user_id: id })

//   if (error) throw error

//   return data[0]
// }

// const useSelectLikes = (path: string) => {
//   const setNotificate = useSetRecoilState(notificateState)

//   const { data, isFetching } = useQuery(['likes', path], () => FetchData(path), {
//     onError: () => {
//       setNotificate({
//         open: true,
//         message: 'エラーが発生しました。',
//       })
//     },
//   })

//   return { data, isFetching }
// }

export default useSelectLikes
