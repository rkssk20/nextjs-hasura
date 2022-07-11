import type { MouseEvent } from 'react'
import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { DELETE_COMMENTS } from '@/graphql/mutate'
import { notificateState } from '@/lib/recoil'

const useCommentDelete = (handleClose: (e?: MouseEvent) => void) => {
  const setNotificate = useSetRecoilState(notificateState)

  const [mutateFunction, { loading }] = useMutation(DELETE_COMMENTS, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: 'コメントを削除しました'
      })

      handleClose()
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'コメントの削除に失敗しました'
      })
    }
  })

  return { mutateFunction, loading }
}

export default useCommentDelete
