import { useRouter } from 'next/router'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { nanoid } from 'nanoid'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { useMutation } from '@apollo/client'
import { INSERT_ARTICLES } from '@/graphql/mutate'
import { accountState, notificateState, draftState } from '@/lib/recoil'

const useInsertArticles = () => {
  // const account = useRecoilValue(accountState)
  const setNotificate = useSetRecoilState(notificateState)
  const setDraft = useSetRecoilState(draftState)
  const router = useRouter()

  const [mutateFunction, { loading }] = useMutation(INSERT_ARTICLES, {
    update: (cache, {data}) => {
      setDraft({
        title: '',
        details: '',
        categories: []
      })

      cache.modify({
        fields: {
          person_articles(existing = []) {
            // let categories: any[] = []

            // if(data.insert_categories.returning.length > 0) {
            //   data.insert_categories.returning.map((item: any) => {
            //     categories.push(item.category)
            //   })
            // }

            return [data.insert_articles_one, ...existing]
          }
        }
      })
    },
    onCompleted: () => {
      setNotificate({
        open: true,
        message: '記事を投稿しました'
      })
    },
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  type Props = {
    title: string
    image: Blob | null
    details: string
    categories: number[]
  }

  // 記事投稿処理
  const mutate = async({ title, image, details, categories }: Props) => {
    if (loading) return

    const id = nanoid()

    let url: null | string = null

    if(image) {
      const type = image.type
      const index = type.indexOf('/')
      url = `hasura-image/${nanoid()}.${type.substring(index + 1)}`

      const storageRef = ref(storage, url);
      await uploadBytes(storageRef, image).catch(() => {
        setNotificate({
          open: true,
          message: '投稿に失敗しました'
        })
        
        return
      });
    }

    let variables: {
      id: string;
      title: string;
      image: string | null;
      details: string;
      objects: { articles_id: string, category: number }[]
    } = {
      id,
      title,
      image: url,
      details,
      objects: []
    }

    if(categories.length > 0) {
      categories.map(item => {
        variables.objects.push({ articles_id: id, category: item })
      })
    }

    mutateFunction({
      variables
    }).then(() => {
      setDraft({
        title: '',
        details: '',
        categories: []
      })

      router.push('/')
    })
  }

  return { mutate, loading }
}

export default useInsertArticles
