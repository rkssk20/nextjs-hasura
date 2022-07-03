import NextLink from 'next/link'
import type { DialogProps } from '@/types/types'
import Dialog from '@/components/dialog/Dialog'

import styles from '@/styles/components/dialog/report.module.scss'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

const Report = ({ dialog, handleClose }: DialogProps) => {
  return (
    <Dialog dialog={dialog} handleClose={handleClose}>
      <Typography className={styles.title} variant='h3'>
        問題を報告する
      </Typography>

      <NextLink href='#' shallow passHref>
        <MuiLink className={styles.link} classes={{ root: styles.link_root }}>
          お問い合わせフォーム
        </MuiLink>
      </NextLink>

      <Typography className={styles.sample} variant='body1' color='#536471'>
        ポートフォリオのため未実装です。個人で実装する場合はGoogle Formを利用すると思います。
      </Typography>
    </Dialog>
  )
}

export default Report
