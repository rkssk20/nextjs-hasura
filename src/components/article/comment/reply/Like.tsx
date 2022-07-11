import { useState, ReactElement } from 'react'
import dynamic from 'next/dynamic'
import type { GetRepliesQuery } from '@/types/generated/graphql'
import useInsertRepliesLikes from '@/hooks/mutate/insert/useInsertRepliesLikes'
import useDeleteRepliesLikes from '@/hooks/mutate/delete/useDeleteRepliesLikes'

import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Login = dynamic(import('@/components/dialog/Login'))

const Like = ({ handle, children }: { handle: () => void; children: ReactElement }) => {
  return (
    <IconButton aria-label='いいね' color='primary' onClick={handle}>
      {children}
    </IconButton>
  )
}

const InsertLikes = ({id}: {id: number}) => {
  const { mutateFunction, loading } = useInsertRepliesLikes()

  const handleLikes = () => {
    if(loading) return

    mutateFunction({
      variables: {
        replies_id: id
      }
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteBorderIcon color='action' />
    </Like>
  )
}

const DeleteLikes = ({replies_like_id}: {replies_like_id: number}) => {
  const { mutateFunction, loading } = useDeleteRepliesLikes()

  const handleLikes = () => {
    if(loading) return

    mutateFunction({
      variables: {
        id: replies_like_id
      } 
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteIcon />
    </Like>
  )
}

type LoginLikeProps = {
  comment_id: GetRepliesQuery['replies'][0]['comment_id']
  id: GetRepliesQuery['replies'][0]['id']
  replies_like_id: number | undefined
}

// ログイン時のいいねボタン
export const LoginLike = ({ comment_id, id, replies_like_id }: LoginLikeProps) => {
  return replies_like_id ? <DeleteLikes replies_like_id={ replies_like_id } /> : <InsertLikes id={ id } />
}

// ログアウト時のいいねボタン
export const LogoutLike = () => {
  const [dialog, setDialog] = useState(false)

  if (dialog) return <Login dialog={dialog} handleClose={() => setDialog(false)} />

  return (
    <Like handle={() => setDialog(true)}>
      <FavoriteBorderIcon color='action' />
    </Like>
  )
}
