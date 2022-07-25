import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useMutation } from '@apollo/client'
import { INSERT_ARTICLES } from '@/graphql/mutate'
import { accountState, notificateState, draftState } from '@/lib/recoil'

const useInsertArticles = () => {
  // const account = useRecoilValue(accountState)
  const setNotificate = useSetRecoilState(notificateState)
  const setDraft = useSetRecoilState(draftState)

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

  return { mutateFunction, loading }
}

export default useInsertArticles
