import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { DELETE_ARTICLES } from '@/graphql/mutate'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useArticleDelete = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  const [mutateFunction, { loading }] = useMutation(DELETE_ARTICLES, {
    onCompleted: () => {
      setNotificate({
        open: true,
        message: '記事を削除しました'
      })

      router.push('/')
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  return { mutateFunction, loading }
}

export default useArticleDelete