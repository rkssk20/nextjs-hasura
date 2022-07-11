import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useMutation } from '@apollo/client'
import { INSERT_ARTICLES } from '@/graphql/mutate'
import { accountState, notificateState, draftState } from '@/lib/recoil'

const useInsertArticles = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const account = useRecoilValue(accountState)

  const [mutateFunction, { loading }] = useMutation(INSERT_ARTICLES, {
    update: (cache, {data}) => {
      console.log(data)

      cache.modify({
        fields: {
          person_articles(existing = []) {
            
            // const write = cache.writeQuery({
            //   query: gql`
            //     query person_articles {
            //       __typename
            //       id
            //       user_id
            //       title
            //       image
            //       details
            //       username
            //       avatar
            //       comment_count
            //       like_count
            //       created_at
            //       categories
            //     }
            //   `,
            //   data: [{__typename: 'person_articles', ...data.insert_articles_one}, ...existing]
            // })

            // console.log(write);

            return [{...data.insert_articles_one, __typename: 'person_articles'}, ...existing]
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
