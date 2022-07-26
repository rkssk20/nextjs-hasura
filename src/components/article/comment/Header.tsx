import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import CreatedAt from '@/lib/createdAt'
import InitialIcon from '@/atoms/Icon/InitialIcon'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'

import styles from '@/styles/components/article/comment/header.module.scss'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

type HeaderProps = {
  username: string
  user_id: string
  avatar: string | null
  created_at: string
}

const Header = ({ username, user_id, avatar, created_at }: HeaderProps) => {
  const [image, setImage] = useState('')
  const created = CreatedAt(created_at)

  useEffect(() => {
    if(avatar) {
      (async() => {
        const result = await getDownloadURL(ref(storage, avatar))

        setImage(result)
      })()
    }
  }, [avatar])

  return (
    <div className={styles.field}>
      {/* アバター */}
      <NextLink href={`/account/${user_id}`} as={`/account/${user_id}`} passHref>
        <MuiLink underline='none'>
          {image ? (
            <AvatarIcon
              src={ image }
              variant='link'
            />
          ) : (
            <InitialIcon username={username} variant='link' />
          )}
        </MuiLink>
      </NextLink>

      {/* タイトル */}
      <NextLink href={`/account/${user_id}`} as={`/account/${user_id}`} passHref>
        <MuiLink className={styles.title} underline='hover' variant='body1' color='inherit' noWrap>
          {username}
        </MuiLink>
      </NextLink>

      {/* 投稿日時 */}
      <Typography className={styles.created} variant='caption'>
        {'・' + created}
      </Typography>
    </div>
  )
}

export default Header
