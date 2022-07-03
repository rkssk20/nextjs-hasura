import { ReactElement, Dispatch, SetStateAction, useState } from 'react'
import dynamic from 'next/dynamic'
import useSelectLikes from '@/hooks/select/useSelectLikes'
import useMutateLikes from '@/hooks/mutate/useMutateLikes'

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
  setLikeCountState: Dispatch<SetStateAction<number>>
}

// ログイン時のいいねボタン
export const LoginLike = ({ path, setLikeCountState }: LoginLikeProps) => {
  const { data, isFetching } = useSelectLikes(path)
  const { mutate, isLoading } = useMutateLikes(path, setLikeCountState)

  // いいね処理
  const handleLikes = () => {
    if (isFetching || isLoading) return

    mutate(data?.id)
  }

  return (
    <Like handle={handleLikes}>
      {data?.id && data.id ? <FavoriteIcon /> : <FavoriteBorderIcon color='action' />}
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
