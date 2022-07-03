import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import type { DialogProps } from '@/types/types'
import { notificateState } from '@/lib/recoil'
import Dialog from '@/components/dialog/Dialog'

import styles from '@/styles/components/dialog/share.module.scss'
import IconButton from '@mui/material/IconButton'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

type Props = DialogProps & {
  path: string
}

const Share = ({ path, dialog, handleClose }: Props) => {
  const setNotificate = useSetRecoilState(notificateState)
  const url = process.env.NEXT_PUBLIC_WEB_URL + '/article/' + path

  const share: {
    url: string
    social: 'twitter' | 'facebook' | 'line' | 'note' | 'hatena'
    label: 'Twitter' | 'Facebook' | 'LINE' | 'note' | 'はてブ'
  }[] = [
    {
      url: `https://twitter.com/share?url=${url}`,
      social: 'twitter',
      label: 'Twitter',
    },
    {
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      social: 'facebook',
      label: 'Facebook',
    },
    {
      url: `https://line.me/R/share?text=${url}`,
      social: 'line',
      label: 'LINE',
    },
    {
      url: `https://note.com/intent/post?url=${url}`,
      social: 'note',
      label: 'note',
    },
    {
      url: `https://b.hatena.ne.jp/add?mode=confirm&url=${url}`,
      social: 'hatena',
      label: 'はてブ',
    },
  ]

  // URLをコピー
  const handleCopy = () => {
    navigator.clipboard.writeText(url)

    setNotificate({
      open: true,
      message: 'URLをコピーしました',
    })
  }

  return (
    <Dialog dialog={dialog} handleClose={handleClose}>
      <Typography variant='h3'>この投稿をシェアする</Typography>

      <DialogActions className={styles.stack} classes={{ root: styles.stack_root }}>
        <FormControlLabel
          className={styles.label}
          classes={{ root: styles.label_root }}
          control={
            <IconButton className={styles.copy_button} onClick={handleCopy}>
              <ContentCopyIcon className={styles.copy} />
            </IconButton>
          }
          label='コピー'
          labelPlacement='bottom'
        />

        {share.map((item) => (
          <FormControlLabel
            key={item.social}
            className={styles.label}
            classes={{ root: styles.label_root }}
            control={
              <a
                key={item.social}
                href={item.url}
                target='_blank'
                rel='nofollow noopener noreferrer'
              >
                <IconButton className={styles.button} classes={{ root: styles.button_root }}>
                  <Image
                    src={`/image/${item.social}.png`}
                    alt='共有アイコン'
                    width={70}
                    height={70}
                    quality={70}
                  />
                </IconButton>
              </a>
            }
            label={item.label}
            labelPlacement='bottom'
          />
        ))}
      </DialogActions>
    </Dialog>
  )
}

export default Share
