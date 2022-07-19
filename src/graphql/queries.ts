import { gql } from '@apollo/client'

// プロフィール詳細
export const GET_PROFILES_DETAILS = gql`
  query GetProfilesDetails($id: String!) {
    profiles_by_pk(id: $id) {
      username
      avatar
      details
    }
  }
`

// その人の投稿10件
export const GET_PERSON_ARTICLES = gql`
  query GetPersonArticles($_eq: String!, $_lt: timestamp = "now()") {
    articles: person_articles(where: {user_id: {_eq: $_eq}, created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      id
      user_id
      title
      image
      details
      username
      avatar
      comment_count
      like_count
      created_at
      categories
    }
  }
`

// その人のいいねした投稿10件
export const GET_PERSON_LIKES_ARTICLES = gql`
  query GetPersonLikesArticles($_eq: String!, $_lt: timestamp = "now()") {
    articles: likes_articles(where: {user_id: {_eq: $_eq}, likes_created: {_lt: $_lt}}, order_by: {likes_created: desc}, limit: 10) {
      id
      user_id
      title
      image
      details
      username
      avatar
      comment_count
      like_count
      created_at
      categories
      likes_created
    }
  }
`;

// その人のフォロー10件
export const GET_PERSON_FOLLOWS = gql`
  query GetPersonFollows($_lt: timestamp = "now()", $_eq: String!) {
    person_follows(limit: 10, order_by: {created_at: desc}, where: {created_at: {_lt: $_lt}, user_id: {_eq: $_eq}}) {
      username
      avatar
      details
      follower_id
      created_at
    }
  }
`

// その人のフォロワー10件
export const GET_PERSON_FOLLOWERS = gql`
  query GetPersonFollowers($_lt: timestamp = "now()", $_eq: String!) {
    person_followers(limit: 10, order_by: {created_at: desc}, where: {created_at: {_lt: $_lt}, follower_id: {_eq: $_eq}}) {
      user_id
      username
      avatar
      details
      follower_id
      created_at
    }
  }
`

// フォローの有無
export const GET_FOLLOWS = gql`
  query GetFollows($_eq: String!, $_eq1: String!) {
    follows(where: {user_id: {_eq: $_eq}, follower_id: {_eq: $_eq1}}, limit: 1) {
      id
      follower_id
    }
  }
`

// Next.jsの投稿10件
export const GET_NEXTJS_ARTICLES = gql`
  query GetNextjsArticles($_lt: timestamp = "now()") {
    articles: nextjs_articles(where: {created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      id
      title
      image
      details
      user_id
      like_count
      comment_count
      created_at
      categories
      avatar
      username
    }
  }
`

// Supabaseの投稿10件
export const GET_SUPABASE_ARTICLES = gql`
  query GetSupabaseArticles($_lt: timestamp = "now()") {
    articles: supabase_articles(where: {created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      avatar
      categories
      comment_count
      created_at
      details
      id
      image
      like_count
      title
      user_id
      username
    }
  }
`

// 	Hasuraの投稿10件
export const GET_HASURA_ARTICLES = gql`
  query GetHasuraArticles($_lt: timestamp = "now()") {
    articles: hasura_articles(where: {created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      avatar
      categories
      comment_count
      created_at
      details
      id
      image
      like_count
      title
      user_id
      username
    }
  }
`

// 	Firebaseの投稿10件
export const GET_FIREBASE_ARTICLES = gql`
  query GetFirebaseArticles($_lt: timestamp = "now()") {
    articles: firebase_articles(where: {created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      avatar
      categories
      comment_count
      created_at
      details
      id
      image
      like_count
      title
      user_id
      username
    }
  }
`

// 記事のいいね
export const GET_LIKES = gql`
  query GetLikes($_eq: String!) {
    likes(where: {articles_id: {_eq: $_eq}}, limit: 1) {
      id
    }
  }
`

// コメント10件
export const GET_COMMENTS = gql`
  query GetComments($_eq: String!, $_lt: timestamp = "now()") {
    comments(where: {articles_id: {_eq: $_eq}, created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      id
      user_id
      like_count
      reply_count
      created_at
      comment
      comments_likes(limit: 1) {
        id
      }
      profile {
        id
        username
        avatar
      }
    }
  }
`

// リプライ10件
export const GET_REPLIES = gql`
  query GetReplies($_eq: Int!, $_lt: timestamp = "now()") {
    replies(limit: 10, where: {comment_id: {_eq: $_eq}, created_at: {_lt: $_lt}}, order_by: {created_at: desc}) {
      id
      user_id
      comment_id
      like_count
      created_at
      comment
      profile {
        username
        avatar
      }
      replies_likes {
        id
      }
    }
  }
`

// 未記入時の記事検索ページ10件
export const GET_NO_SEARCH_ARTICLES = gql`
  query GetNoSearchArticles($_lt: timestamp = "now()") {
    articles: person_articles(where: {user_id: {}, created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
      id
      user_id
      title
      image
      details
      username
      avatar
      comment_count
      like_count
      created_at
      categories
    }
  }
`

// 記事の検索10件
export const GET_SEARCH_ARTICLES = gql`
  query GetSearchArticles($_like: String!, $_lt: timestamp = "now()") {
    articles: person_articles(where: {created_at: {_lt: $_lt}, _or: [{title: {_like: $_like}}, {details: {_like: $_like}}]}, order_by: {created_at: desc}, limit: 10) {
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
  }
`

// 未記入時のアカウント検索ページ10件
export const GET_NO_SEARCH_PROFILES = gql`
  query GetNoSearchProfiles($_and: [profiles_bool_exp!] = {follower_count: {_lte: null}, id: {_lt: ""}}) {
    profiles(where: {_and: $_and}, limit: 10, order_by: {follower_count: desc, id: desc}) {
      id
      username
      avatar
      details
      follow_count
      follower_count
    }
  }
`

// アカウントの検索10件
export const GET_SEARCH_PROFILES = gql`
  query GetSearchProfiles($_and: [profiles_bool_exp!] = {follower_count: {_lte: null}, id: {_lt: ""}}, $_ilike: String!) {
    profiles(where: {_and: $_and, _or: [{username: {_ilike: $_ilike}}, {details: {_ilike: $_ilike}}]}, limit: 10, order_by: {follower_count: desc, id: desc}) {
      id
      username
      avatar
      details
      follow_count
      follower_count
    }
  }
`