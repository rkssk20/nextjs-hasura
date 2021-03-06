import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import InitialIcon from '@/atoms/Icon/InitialIcon'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'

import styles from '@/styles/components/article/header.module.scss'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

interface HeaderProps {
  user_id: string
  avatar: string | null
  name: string
  created_at: string
}

const Header = ({ user_id, avatar, name, created_at }: HeaderProps) => {
  const [image, setImage] = useState('')
  const created = new Date(created_at + 'Z')

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
          { image ?
            <AvatarIcon src={ image } variant='link' />
            :
            <InitialIcon username={name} variant='link' />
          }
        </MuiLink>
      </NextLink>

      <div className={styles.text_field}>
        {/* タイトル */}
        <NextLink href={`/account/${user_id}`} as={`/account/${user_id}`} passHref>
          <MuiLink underline='hover' variant='body1' color='inherit'>
            {name}
          </MuiLink>
        </NextLink>

        {/* 投稿日時 */}
        <Typography className={styles.created} variant='caption'>
          {created.getFullYear() + '年' + (created.getMonth() + 1) + '月' + created.getDate() + '日'}
        </Typography>
      </div>
    </div>
  )
}

export default Header
