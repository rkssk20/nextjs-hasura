import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'

import styles from '@/styles/components/side/sidePost.module.scss'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

type Props = {
  id: string
  title: string
  image: string | null | undefined
  username: string
}

const SidePost = ({ id, title, image, username }: Props) => {
  const [storageImage, setStorageImage] = useState('')
  const router = useRouter()

  useEffect(() => {
    if(image) {
      (async() => {
        const result = await getDownloadURL(ref(storage, image))

        setStorageImage(result)
      })()
    }
  }, [image])

  return (
    <ListItemButton
      key={id}
      className={styles.list_item}
      component='div'
      onClick={() => router.push(`/article/${id}`)}
    >
      {storageImage ? (
        <div className={styles.image_field}>
          <Image
            src={storageImage}
            alt='記事のトップ画像'
            layout='fixed'
            quality={70}
            width={80}
            height={80}
            objectFit='cover'
          />
        </div>
      ) : (
        <div className={styles.noimage}>
          <Image
            src='/favicon.png'
            quality={80}
            layout='fixed'
            width={32}
            height={32}
            alt='Next.js × Hasuraのメイン画像'
          />
        </div>
      )}

      <ListItemText
        className={styles.list_text}
        classes={{ primary: styles.list_text_primary }}
        primary={title}
        secondary={username}
        secondaryTypographyProps={{ noWrap: true }}
      />
    </ListItemButton>
  )
}

export default SidePost