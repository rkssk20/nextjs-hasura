import type { MouseEvent } from 'react'
import type { definitions } from '@/types/supabase'

// カテゴリ
export type CategoriesProps = {
  text: 'フロント' | 'サーバーレス'
  url: 'front' | 'serverless'
}

// 記事一つ
export type ArticleType = {
  id: definitions['articles']['id']
  user_id: definitions['articles']['user_id']
  image: definitions['articles']['image']
  title: definitions['articles']['title']
  details: definitions['articles']['details']
  like_count: definitions['articles']['like_count']
  comment_count: definitions['articles']['comment_count']
  created_at: definitions['articles']['created_at']
  avatar: definitions['profiles']['avatar']
  username: definitions['profiles']['username']
  categories: string[] | number[]
}

// アカウントトップ10
export type ProfilesSummaryType = {
  id: definitions['profiles']['id']
  username: definitions['profiles']['username']
  avatar: definitions['profiles']['avatar']
  details: definitions['profiles']['details']
  follower_count: definitions['profiles']['follower_count']
}

// ダイアログ
export type DialogProps = {
  dialog: boolean
  handleClose: (e?: MouseEvent) => void
}

// 記事一つ
// export type ArticleType = {
//   id: string;
//   title: string;
//   details: string;
//   image?: string | undefined;
//   like_count: number;
//   comment_count: number;
//   created_at: string;
//   categories: {
//     category: number
//   }[]
//   profiles: {
//     id: string
//     usernmae: string
//     avatar: string | null
//   }
//   likes: {
//     id: number | undefined
//   }[]
// }

// プロフィールの詳細api
export type ProfileDetailsType = {
  follow: number
  follower: number
  mine: boolean
  following: boolean
}

// フォロー、フォロワーapi
export type FollowType = {
  display_id: string
  name: string
}[]

// コメント
export type CommentType = {
  id: number
  display_id: string
  created_at: string
  image: string
  likes: number
  like: boolean
  content: string
  name: string
  mine: boolean
  replies: number
}

// リプライ
export type RepliesType = {
  id: number
  comment_id: number
  display_id: string
  created_at: string
  image: string
  likes: number
  like: boolean
  content: string
  name: string
  mine: boolean
}

// トレンド
export type TrendType = {
  id: string
  title: string
  image: string
  name: string
}
