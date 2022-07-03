import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import { notificateState } from '@/lib/recoil'

const Mutate = async (path: string) => {
  const { data, error } = await supabase
    .from<definitions['articles']>('articles')
    .delete({ returning: 'minimal' })
    .eq('id', path)

  if (error) throw error

  return data
}

const useArticleDelete = (path: string) => {
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  const { mutate, isLoading } = useMutation(() => Mutate(path), {
    onSuccess: () => {
      router.push('/').then(() =>
        setNotificate({
          open: true,
          message: '記事を削除しました。',
        }),
      )
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました。',
      })
    },
  })

  return { mutate, isLoading }
}

export default useArticleDelete
