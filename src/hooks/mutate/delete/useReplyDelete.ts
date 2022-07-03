import type { MouseEvent } from 'react'
import { useMutation, useQueryClient, InfiniteData } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import { notificateState } from '@/lib/recoil'

const Mutate = async (id: number) => {
  const { data, error } = await supabase
    .from<definitions['replies']>('replies')
    .delete({ returning: 'minimal' })
    .eq('id', id)

  if (error) throw error

  return data
}

type Props = {
  id: definitions['replies']['id']
  comment_id: definitions['replies']['comment_id']
  handleClose: (e?: MouseEvent) => void
}

const useReplyDelete = ({ id, comment_id, handleClose }: Props) => {
  const setNotificate = useSetRecoilState(notificateState)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(() => Mutate(id), {
    onSuccess: () => {
      const existing: InfiniteData<[definitions['replies']]> | undefined = queryClient.getQueryData(
        ['replies', comment_id],
      )

      if (existing) {
        // キャッシュから対象のリプライを検索
        const index = existing.pages.map((page) => page.findIndex((item) => item.id === id))
        const page = index.findIndex((item) => item !== -1)

        // // キャッシュからリプライを削除
        existing.pages[page].splice(index[page], 1)

        // // キャッシュを更新
        queryClient.setQueryData(['replies', comment_id], {
          pageParams: existing.pageParams,
          pages: existing.pages,
        })
      }

      setNotificate({
        open: true,
        message: 'コメントを削除しました。',
      })
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
    onSettled: () => {
      handleClose()
    },
  })

  return { mutate, isLoading }
}

export default useReplyDelete
