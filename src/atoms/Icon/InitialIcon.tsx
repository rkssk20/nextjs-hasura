import Color from '@/lib/color'
import { definitions } from '@/types/supabase'

import styles from '@/styles/atoms/initialIcon.module.scss'
import Avatar from '@mui/material/Avatar'

interface AvatarIconProps {
  username: definitions['profiles']['username']
  variant: 'medium' | 'large' | 'link'
}

const AvatarIcon = ({ username, variant }: AvatarIconProps) => {
  const color = Color(username)

  return (
    <Avatar
      className={styles.avatar}
      classes={{
        root:
          variant === 'link'
            ? styles.avatar_link
            : variant === 'medium'
            ? styles.avatar_medium
            : styles.avatar_large,
      }}
      sx={{ bgcolor: color }}
    >
      {username.slice(0, 1)}
    </Avatar>
  )
}

export default AvatarIcon
