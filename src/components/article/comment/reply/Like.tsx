import { useState, ReactElement } from 'react'
import dynamic from 'next/dynamic'
import type { definitions } from '@/types/supabase'
import useMutateRepliesLike from '@/hooks/mutate/useMutateRepliesLikes'

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
  comment_id: definitions['replies']['comment_id']
  id: definitions['replies']['id']
  replies_like: definitions['replies_likes'][] | undefined
}

// ログイン時のいいねボタン
export const LoginLike = ({ comment_id, id, replies_like }: LoginLikeProps) => {
  const { mutate, isLoading } = useMutateRepliesLike(comment_id, id)

  // いいね
  const handleLikes = () => {
    if (isLoading) return

    mutate(replies_like && replies_like.length > 0 ? replies_like[0].id : undefined)
  }

  return (
    <Like handle={handleLikes}>
      {replies_like && replies_like[0]?.id ? <FavoriteIcon /> : <FavoriteBorderIcon color='action' />}
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
