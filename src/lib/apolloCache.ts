import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  // addTypename: false,
  typePolicies: {
    // person_articles: {
    //   keyFields: (args) => {        
    //     return `articles:${ args.id }`
    //   },
    // },
    // nextjs_articles: {
    //   keyFields: (args) => {        
    //     return `articles:${ args.id }`
    //   },
    // },
    // supabase_articles: {
    //   keyFields: (args) => {        
    //     return `articles:${ args.id }`
    //   },
    // },
    // hasura_articles: {
    //   keyFields: (args) => {        
    //     return `articles:${ args.id }`
    //   },
    // },
    // firebase_articles: {
    //   keyFields: (args) => {        
    //     return `articles:${ args.id }`
    //   },
    // },
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
        nextjs_articles: {
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
        // Supabaseの投稿10件
        supabase_articles: {
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
        // Hasuraの投稿10件
        hasura_articles: {
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
        // Firebaseの投稿10件
        firebase_articles: {
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
        comments: {
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