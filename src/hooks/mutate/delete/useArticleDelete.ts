import { useRouter } from 'next/router'
import { deleteObject, ref } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { useMutation } from '@apollo/client'
import { DELETE_ARTICLES } from '@/graphql/mutate'
import { useSetRecoilState } from 'recoil'
import { notificateState } from '@/lib/recoil'

const useArticleDelete = (image: string | undefined) => {
  const setNotificate = useSetRecoilState(notificateState)
  const router = useRouter()

  console.log(image)

  const [mutateFunction, { loading }] = useMutation(DELETE_ARTICLES, {
    update: (cache, {data}) => {
      cache.modify({
        fields: {
          person_articles(existing = []) {
            return [data.delete_articles_by_pk, ...existing]
          }
        }
      })
    },
    onCompleted: async() => {
      await deleteObject(ref(storage, image))

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