import { ReactElement, Dispatch, SetStateAction, useState } from 'react'
import dynamic from 'next/dynamic'
import useSelectLikes from '@/hooks/select/useSelectLikes'
import useInsertLike from '@/hooks/mutate/insert/useInsertLike'
import useDeleteLike from '@/hooks/mutate/delete/useDeleteLike'

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

type Props = {
  path: string
  setLikeCountState: Dispatch<SetStateAction<number>>
}

// いいねボタン
const InsertLike = ({path, setLikeCountState}: Props) => {
  const { mutateFunction, loading } = useInsertLike(path)

  // いいね処理
  const handleLikes = () => {
    if (loading) return

    mutateFunction({
      variables: {
        articles_id: path
      }
    }).then(() => {
      setLikeCountState(prev => prev + 1)
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteBorderIcon color='action' />
    </Like>
  )
}

// いいね取り消しボタン
const DeleteLike = ({ id, path, setLikeCountState }: Props & { id: number }) => {
  const { mutateFunction, loading } = useDeleteLike(path)

  // いいね処理
  const handleLikes = () => {
    if (loading) return

    mutateFunction({
      variables: {
        id
      }
    }).then(() => {
      setLikeCountState(prev => prev - 1)
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteIcon />
    </Like>
  )
}

// ログイン時のいいねボタン
export const LoginLike = ({ path, setLikeCountState }: Props) => {
  const { data, loading } = useSelectLikes(path)

  if(loading) return null

  return (
    data?.likes[0]?.id ?
    <DeleteLike
      id={ data.likes[0].id as number }
      path={ path }
      setLikeCountState={ setLikeCountState }
    />
    :
    <InsertLike path={ path } setLikeCountState={ setLikeCountState} />
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
