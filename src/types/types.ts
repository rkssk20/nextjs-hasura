import type { MouseEvent } from 'react'

// カテゴリ
export type CategoriesProps = {
  text: 'Next.js' | 'Supabase' | 'Hasura' | 'Firebase'
  url: 'nextjs' | 'supabase' | 'hasura' |'firebase'
}

// 記事１つ
export type ArticleType = {
  id: string;
  user_id: string;
  title: string;
  image: string | null;
  details: string;
  username: string;
  avatar: string | null;
  comment_count: number;
  like_count: number;
  created_at: string;
  categories: number[];
}

// プロフィール
export type ProfileType = {
  item: {
    id: string
    username: string
    avatar: string | undefined
    details: string
    follow_count: number
    follower_count: number
  }
}

// ダイアログ
export type DialogProps = {
  dialog: boolean
  handleClose: (e?: MouseEvent) => void
}

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
