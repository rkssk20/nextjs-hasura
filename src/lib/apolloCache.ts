import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        person_articles: {
          keyArgs: false,
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