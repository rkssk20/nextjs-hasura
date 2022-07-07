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

// フロントの投稿10件
export const GET_FRONT_ARTICLES = gql`
  query GetFrontArticles($_lt: timestamp!) {
    articles: front_articles(where: {created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
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

// サーバーレスの投稿10件
export const GET_SERVERLESS_ARTICLES = gql`
  query GetServerlessArticles($_lt: timestamp!) {
    articles: serverless_articles(where: {created_at: {_lt: $_lt}}, order_by: {created_at: desc}, limit: 10) {
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

export const GET_LIKES = gql`
  query GetLikes($_eq: String!) {
    likes(where: {articles_id: {_eq: $_eq}}, limit: 1) {
      id
    }
  }
`