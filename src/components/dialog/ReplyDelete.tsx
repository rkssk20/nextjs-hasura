import type { DialogProps } from '@/types/types'
import useDeleteReplies from '@/hooks/mutate/delete/useDeleteReplies'
import Dialog from '@/components/dialog/Dialog'

import styles from '@/styles/components/dialog/_delete.module.scss'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

type Props = DialogProps & {
  id :number
}

const ReplyDelete = ({ dialog, handleClose, id }: Props) => {
  const {mutateFunction, loading} = useDeleteReplies(handleClose)

  // 記事を削除
  const handleDelete = () => {
    if (loading) return
    
    mutateFunction({
      variables: {
        id
      }
    })
  }

  return (
    <Dialog dialog={dialog} handleClose={handleClose}>
      <Typography variant='h3'>このコメントを削除しますか？</Typography>

      <Typography className={styles.error} variant='body1' color='error'>
        削除されたコメントは戻すことができません。
      </Typography>

      <Stack direction='row' justifyContent='center'>
        <Button
          className={styles.button}
          color='error'
          variant='contained'
          disableElevation
          onClick={handleDelete}
        >
          削除
        </Button>

        <Button
          className={styles.cancel}
          classes={{ root: styles.cancel_root }}
          color='inherit'
          variant='contained'
          disableElevation
          onClick={handleClose}
        >
          キャンセル
        </Button>
      </Stack>
    </Dialog>
  )
}

export default ReplyDelete
