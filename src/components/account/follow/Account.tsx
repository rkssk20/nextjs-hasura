import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'
import InitialIcon from '@/atoms/Icon/InitialIcon'

import styles from '@/styles/components/account/follow/account.module.scss'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

type AccountProps = {
  id: string
  username: string
  avatar: string | null
  details: string | null
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>> | false
}

const Account = ({ id, username, avatar, details, setRef }: AccountProps) => {
  const [image, setImage] = useState('')
  const router = useRouter()
  const url = `/account/${id}`

  useEffect(() => {
    if(avatar) {
      (async() => {
        const result = await getDownloadURL(ref(storage, avatar))

        setImage(result)
      })()
    }
  }, [avatar])

  return (
    <ListItemButton
      className={styles.list_item_button}
      classes={{ root: styles.list_item_button_root }}
      ref={setRef ? (ref: HTMLDivElement) => setRef(ref) : undefined}
      onClick={() => router.push(url, url)}
    >
      <ListItemIcon>
        {image ? (
          <AvatarIcon
            src={ image }
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
