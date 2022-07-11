import { ReactElement, useState } from 'react'
import dynamic from 'next/dynamic'
import type { GetCommentsQuery } from '@/types/generated/graphql'
import useInsertCommetnsLikes from '@/hooks/mutate/insert/useInsertCommentsLikes'
import useDeleteCommentsLikes from '@/hooks/mutate/delete/useDeleteCommentsLikes'

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

const InsertLike = ({ id }: { id: number }) => {
  const { mutateFunction, loading } = useInsertCommetnsLikes()

  const handleLikes = () => {
    if(loading) return

    mutateFunction({
      variables: {
        comment_id: id
      }
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteBorderIcon color='action' />
    </Like>
  )
}

const DeleteLike = ({ comments_likes_id }: { comments_likes_id: number }) => {
  const { mutateFunction, loading } = useDeleteCommentsLikes()

  const handleLikes = () => {
    if(loading) return

    mutateFunction({
      variables: {
        id: comments_likes_id
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
  id: number
  comments_likes_id: number | undefined
}

// ログイン時のいいねボタン
export const LoginLike = ({ id, comments_likes_id }: LoginLikeProps) => {
  return (
    comments_likes_id ?
    <DeleteLike comments_likes_id={ comments_likes_id } /> : <InsertLike id={ id } />
  )
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
