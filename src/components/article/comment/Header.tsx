import NextLink from 'next/link'
import type { definitions } from '@/types/supabase'
import CreatedAt from '@/lib/createdAt'
import InitialIcon from '@/atoms/Icon/InitialIcon'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'

import styles from '@/styles/components/article/comment/header.module.scss'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

type HeaderProps = {
  username: definitions['profiles']['username']
  user_id: definitions['profiles']['id']
  avatar: definitions['profiles']['avatar']
  created_at: string
}

const Header = ({ username, user_id, avatar, created_at }: HeaderProps) => {
  const created = CreatedAt(created_at)

  return (
    <div className={styles.field}>
      {/* アバター */}
      <NextLink href={`/account/${user_id}`} as={`/account/${user_id}`} passHref>
        <MuiLink underline='none'>
          {avatar ? (
            <AvatarIcon
              src={
                process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/' + avatar
              }
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
