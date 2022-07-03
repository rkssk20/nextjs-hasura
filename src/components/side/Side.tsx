import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import styles from '@/styles/components/side/side.module.scss'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'

const Side = () => {
  const router = useRouter()

  useEffect(() => {
    fetch(`/api/getTrend`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className={styles.field}>
      {/* {loading ? null : (
        <List className={styles.list} classes={{ root: styles.list_root }}>
          <li className={styles.header}>
            <TrendingUpIcon />
            <Typography className={styles.title}>トレンド</Typography>
          </li>

          {data.length > 0 &&
            data.map((item) => (
              <ListItemButton
                key={item.id}
                className={styles.list_item}
                component='div'
                onClick={() => router.push(`/article/${item.id}`)}
              >
                {item.image ? (
                  <div className={styles.image_field}>
                    <Image
                      src={item.image}
                      alt='記事のトップ画像'
                      quality={70}
                      width={80}
                      height={80}
                      objectFit='cover'
                    />
                  </div>
                ) : (
                  <div className={styles.noimage}>
                    <Image src='/favicon.png' quality={80} width={32} height={32} />
                  </div>
                )}

                <ListItemText
                  className={styles.list_text}
                  classes={{ primary: styles.list_text_primary }}
                  primary={item.title}
                  secondary={item.name}
                  secondaryTypographyProps={{ noWrap: true }}
                />
              </ListItemButton>
            ))} */}

          <NextLink href='/' passHref>
            <Button
              LinkComponent='a'
              className={styles.more_button}
              classes={{ root: styles.more_button_root }}
            >
              さらに表示
            </Button>
          </NextLink>
        {/* </List> */}
      {/* )} */}

      {/* 最下部 */}
      <div className={styles.list_under}>
        <NextLink href='/about' passHref>
          <MuiLink className={styles.link} underline='hover' color='' variant='caption'>
            このサイトについて
          </MuiLink>
        </NextLink>

        <Typography variant='caption'>@2022 Next.js × Supabase</Typography>
      </div>
    </div>
  )
}

export default Side
