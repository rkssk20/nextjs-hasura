import styles from '@/styles/atoms/avatarIcon.module.scss'
import Avatar from '@mui/material/Avatar'

type Props = {
  src: string
  variant: 'medium' | 'large' | 'link'
}

const AvatarIcon = ({ src, variant }: Props) => {
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
      src={src}
    />
  )
}

export default AvatarIcon
