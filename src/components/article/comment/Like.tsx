import { ReactElement, useState } from 'react'
import dynamic from 'next/dynamic'
import type { definitions } from '@/types/supabase'
import useMutateCommentsLikes from '@/hooks/mutate/useMutateCommentsLikes'

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

type LoginLikeProps = {
  path: string
  id: definitions['replies']['id']
  comments_likes: definitions['comments_likes'][] | undefined
}

// ログイン時のいいねボタン
export const LoginLike = ({ path, id, comments_likes }: LoginLikeProps) => {
  const { mutate, isLoading } = useMutateCommentsLikes(path, id)

  // いいね
  const handleLikes = () => {
    if (isLoading) return

    mutate(comments_likes && comments_likes.length > 0 ? comments_likes[0].id : undefined)
  }

  return (
    <Like handle={handleLikes}>
      {comments_likes && comments_likes[0]?.id ? (
        <FavoriteIcon />
      ) : (
        <FavoriteBorderIcon color='action' />
      )}
    </Like>
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
