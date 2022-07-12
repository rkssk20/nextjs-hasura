import { useSetRecoilState } from 'recoil'
import { gql, useMutation } from '@apollo/client'
import { INSERT_ARTICLES } from '@/graphql/mutate'
import { notificateState, draftState } from '@/lib/recoil'

const useInsertArticles = () => {
  const setNotificate = useSetRecoilState(notificateState)
  const setDraft = useSetRecoilState(draftState)

  const [mutateFunction, { loading }] = useMutation(INSERT_ARTICLES, {
    update: (cache, {data}) => {
      console.log(data)

      setDraft({
        title: '',
        details: '',
        categories: []
      })

      cache.modify({
        fields: {
          person_articles(existing = [], { toReference }) {

            const fragment = cache.writeFragment({
              data: data.insert_articles_one,
              fragment: gql`
                fragment NewArticles on Articles {
                  id
                  user_id
                  title
                  details
                  username
                  image
                  comment_count
                  like_count
                  created_at
                  categories
                  username
                  avatar
                }
              `
            })

            console.log(fragment)
            // const insert_articles_one = data.insert_articles_one
            // insert_articles_one.__typename = "person_articles"
            // insert_articles_one.categories = []

            console.log(data.insert_articles_one)

            return [existing[0], ...existing]

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

            // return [{...data.insert_articles_one, __typename: 'person_articles'}, ...existing]
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
