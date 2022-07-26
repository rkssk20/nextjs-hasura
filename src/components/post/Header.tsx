import { useState, useEffect, MouseEvent, TouchEvent } from 'react'
import NextLink from 'next/link'
import { getDownloadURL, ref } from 'firebase/storage'
import CreatedAt from '@/lib/createdAt'
import { storage } from '@/lib/firebase'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'
import InitialIcon from '@/atoms/Icon/InitialIcon'

import styles from '@/styles/components/post/header.module.scss'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

interface HeaderProps {
  id: string
  username: string
  avatar: string | null
  created_at: string
}

const Header = ({ id, username, avatar, created_at }: HeaderProps) => {
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
      <NextLink href={`/account/${id}`} as={`/account/${id}`} passHref>
        <MuiLink
          underline='none'
          onClick={(e: MouseEvent<HTMLSpanElement>) => e.stopPropagation()}
          onMouseDown={(e: MouseEvent<HTMLSpanElement>) => e.stopPropagation()}
          onTouchStart={(e: TouchEvent<HTMLSpanElement>) => e.stopPropagation()}
        >
          {image ? (
            <AvatarIcon
              src={image}
              variant='link'
            />
          ) : username && (
            <InitialIcon username={username} variant='link' />
          )}
        </MuiLink>
      </NextLink>

      {/* タイトル */}
      <NextLink href={`/account/${id}`} as={`/account/${id}`} passHref>
        <MuiLink
          className={styles.title}
          underline='hover'
          variant='body1'
          color='inherit'
          noWrap
          onClick={(e: MouseEvent<HTMLSpanElement>) => e.stopPropagation()}
          onMouseDown={(e: MouseEvent<HTMLSpanElement>) => e.stopPropagation()}
          onTouchStart={(e: TouchEvent<HTMLSpanElement>) => e.stopPropagation()}
        >
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
