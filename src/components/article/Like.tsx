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
  setLikeCount: Dispatch<SetStateAction<number>>
}

// いいねボタン
const InsertLike = ({path, setLikes, setLikeCount}: Props & { setLikes: Dispatch<SetStateAction<number | null>>  }) => {
  const { mutateFunction, loading } = useInsertLike()

  // いいね処理
  const handleLikes = () => {
    if (loading) return

    mutateFunction({
      variables: {
        articles_id: path
      }
    }).then((data) => {
      data.data.insert_likes_one.id && setLikes(data.data.insert_likes_one.id)

      setLikeCount(prev => prev + 1)
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteBorderIcon color='action' />
    </Like>
  )
}

// いいね取り消しボタン
const DeleteLike = ({ id, path, setLikes, setLikeCount }: Props & { id: number,  setLikes: Dispatch<SetStateAction<number | null>> }) => {
  const { mutateFunction, loading } = useDeleteLike(path)

  // いいね処理
  const handleLikes = () => {
    if (loading) return

    mutateFunction({
      variables: {
        id
      }
    }).then(() => {
      setLikeCount(prev => prev - 1)
      setLikes(null)
    })
  }

  return (
    <Like handle={handleLikes}>
      <FavoriteIcon />
    </Like>
  )
}

// ログイン時のいいねボタン
export const LoginLike = ({ path, setLikeCount }: Props) => {
  const { loading, likes, setLikes } = useSelectLikes(path)

  if(loading) return null

  return (
    likes ?
    <DeleteLike
      id={ likes }
      path={ path }
      setLikes={ setLikes }
      setLikeCount={ setLikeCount }
    />
    :
    <InsertLike
      path={ path }
      setLikes={ setLikes }
      setLikeCount={ setLikeCount}
    />
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
