import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // その人の投稿10件
        person_articles: {
          // キャッシュキーの設定
          keyArgs: (args) => {
            // 時間の情報を抜くことで、追加のデータは同じ配列に格納できる
            args?.where?.created_at && delete args.where.created_at
            return JSON.stringify(args)
          },
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }

            return [...existing, ...incoming]
          }
        },
        // その人のいいねした投稿10件
        likes_articles: {
          keyArgs: false,
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
  
            return [...existing, ...incoming]
          }
        },
        person_follows: {
          keyArgs: (args) => {
            args?.where?.created_at && delete args.where.created_at
            return JSON.stringify(args)
          },
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
  
            return [...existing, ...incoming]
          }
        },
        person_followers: {
          keyArgs: (args) => {
            args?.where?.created_at && delete args.where.created_at
            return JSON.stringify(args)
          },
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
  
            return [...existing, ...incoming]
          }
        },
        // フロントの投稿10件
        front_articles: {
          keyArgs: false,
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
  
            return [...existing, ...incoming]
          }
        },
        // サーバーレスの投稿10件
        serverless_articles: {
          keyArgs: false,
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
  
            return [...existing, ...incoming]
          }
        },
        // 記事へのいいね
        likes: {
          
        },
        comments: {
          keyArgs: false,
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
          
            return [...existing, ...incoming]
          }
        },
        profiles: {
          keyArgs: (args) => {
            args?.where?._and && delete args?.where?._and
            return JSON.stringify(args)
          },
          merge: (existing = [], incoming) => {
            if(!existing) {
              return incoming
            }
          
            return [...existing, ...incoming]
          }
        }
      }
    }
  }
})

export default cache