import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_LIKES } from '@/graphql/queries'
import type { GetLikesQuery } from '@/types/generated/graphql'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useSelectLikes = (path: string) => {
  const [likes, setLikes] = useState<number | null>(null)
  const setNotificate = useSetRecoilState(notificateState)

  const { data, loading } = useQuery<GetLikesQuery>(GET_LIKES, {
    variables: {
      _eq: path
    },
    onCompleted: data => {
      console.log(data);

      (data.likes.length > 0) && setLikes(data.likes[0].id)
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { data, loading, likes, setLikes, }
}

export default useSelectLikes