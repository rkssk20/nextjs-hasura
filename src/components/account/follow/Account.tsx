import type { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import type { definitions } from '@/types/supabase'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'
import InitialIcon from '@/atoms/Icon/InitialIcon'

import styles from '@/styles/components/account/follow/account.module.scss'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

type AccountProps = {
  id: definitions['profiles']['id']
  username: definitions['profiles']['username']
  avatar: definitions['profiles']['avatar']
  details: definitions['profiles']['details']
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>> | false
}

const Account = ({ id, username, avatar, details, setRef }: AccountProps) => {
  const router = useRouter()
  const url = `/account/${id}`

  return (
    <ListItemButton
      className={styles.list_item_button}
      classes={{ root: styles.list_item_button_root }}
      ref={setRef ? (ref: HTMLDivElement) => setRef(ref) : undefined}
      onClick={() => router.push(url, url)}
    >
      <ListItemIcon>
        {avatar ? (
          <AvatarIcon
            src={
              process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/' + avatar
            }
            variant='medium'
          />
        ) : (
          <InitialIcon username={username} variant='medium' />
        )}
      </ListItemIcon>

      <ListItemText
        secondaryTypographyProps={{
          noWrap: true,
        }}
        primary={username}
        secondary={details}
      />
    </ListItemButton>
  )
}

export default Account
