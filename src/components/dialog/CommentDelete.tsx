import type { DialogProps } from '@/types/types'
import type { definitions } from '@/types/supabase'
import useCommentDelete from '@/hooks/mutate/delete/useCommentDelete'
import Dialog from '@/components/dialog/Dialog'

import styles from '@/styles/components/dialog/_delete.module.scss'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

type Props = DialogProps & {
  path: string
  id: definitions['comments']['id']
}

const CommentDelete = ({ dialog, handleClose, path, id }: Props) => {
  const { mutate, isLoading } = useCommentDelete({ path, id, handleClose })

  // 記事を削除
  const handleDelete = () => {
    if (isLoading) return
    mutate()
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

export default CommentDelete
