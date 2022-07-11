import { gql } from '@apollo/client'

// アカウント削除
export const DELETE_PROFILES = gql`
  mutation DeleteProfiles($id: String!) {
    delete_profiles_by_pk(id: $id) {
      id
    }
  }
`

// プロフィールの変更
export const UPDATE_PROFILES = gql`
  mutation UpdateProfiles($id: String!, $details: String, $username: String) {
    update_profiles_by_pk(pk_columns: {id: $id}, _set: {details: $details, username: $username}) {
      username
      details
    }
  }
`

// プロフィール画像の変更
export const UPDATE_PROFILES_AVATAR = gql`
  mutation UpdateProfilesAvatar($id: String!, $avatar: String!) {
    update_profiles_by_pk(pk_columns: {id: $id}, _set: {avatar: $avatar}) {
      avatar
    }
  }
`;

// プロフィール画像の削除
export const DLETE_PROFILES_AVATAR = gql`
  mutation DeleteProfilesAvatar($id: String!, $avatar: String = null) {
    update_profiles_by_pk(pk_columns: {id: $id}, _set: {avatar: $avatar}) {
      avatar
    }
  }
`;

// フォロー
export const INSERT_FOLLOWS = gql`
  mutation InsertFollows($follower_id: String!) {
    insert_follows_one(object: {follower_id: $follower_id}) {
      id
      follower_id
    }
  }
`

// フォローを外す
export const DELETE_FOLLOWS = gql`
  mutation MyMutation($id: Int!) {
    delete_follows_by_pk(id: $id) {
      id
      follower_id
    }
  }
`

// 記事の投稿
export const INSERT_ARTICLES = gql`
  mutation InsertArticles($details: String!, $id: String!, $image: String, $title: String!, $objects: [categories_insert_input!]! = [{ articles_id: "", category: "" }]) {
    insert_articles_one(object: {title: $title, image: $image, details: $details, id: $id}) {
      id
      comment_count
      created_at
      details
      image
      like_count
      title
      user_id
    }
    insert_categories(objects: $objects) {
      returning {
        id
        category
        articles_id
      }
    }
  }
`;

// 記事の削除
export const DELETE_ARTICLES = gql`
  mutation DeleteArticles($id: String!) {
    delete_articles_by_pk(id: $id) {
      id
    }
  }
`

// いいね
export const INSERT_LIKES = gql`
  mutation InsertLikes($articles_id: String!) {
    insert_likes_one(object: {articles_id: $articles_id}) {
      id
    }
  }
`

// いいねの取り消し
export const DELETE_LIEKS = gql`
  mutation DeleteLikes($id: Int!) {
    delete_likes_by_pk(id: $id) {
      id
    }
  }
`

// コメントの投稿
export const INSERT_COMMENTS = gql`
  mutation InsertComments($comment: String!, $articles_id: String!) {
    comments: insert_comments_one(object: {comment: $comment, articles_id: $articles_id}) {
      comment
      articles_id
      id
      like_count
      reply_count
      user_id
      created_at
      profile {
        avatar
        username
      }
      comments_likes {
        id
      }
    }
  }
`

// コメントの削除
export const DELETE_COMMENTS = gql`
  mutation DeleteComments($id: Int!) {
    delete_comments_by_pk(id: $id) {
      id
    }
  }
`

// コメントのいいね
export const INSERT_COMMENTS_LIKES = gql`
  mutation InsertCommentsLikes($comment_id: Int!) {
    insert_comments_likes_one(object: {comment_id: $comment_id}) {
      id
    }
  }
`

// コメントのいいね取り消し
export const DELETE_COMMENTS_LIKES = gql`
  mutation DeleteCommentsLikes($id: Int!) {
    delete_comments_likes_by_pk(id: $id) {
      id
    }
  }
`

// リプライの投稿
export const INSERT_REPLIES = gql`
  mutation InsertReplies($comment_id: Int!, $comment: String!) {
    insert_replies_one(object: {comment_id: $comment_id, comment: $comment}) {
      id
      user_id
      comment_id
      comment
      like_count
      created_at
      comment_id
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

// リプライの削除
export const DELETE_REPLIES = gql`
  mutation DeleteReplies($id: Int!) {
    delete_replies_by_pk(id: $id) {
      id
    }
  }
`

// リプライのいいね
export const INSERT_REPLIES_LIKES = gql`
  mutation InsertRepliesLikes($replies_id: Int!) {
    insert_replies_likes_one(object: {replies_id: $replies_id}) {
      id
    }
  }
`

// リプライのいいね取り消し
export const DELETE_REPLIES_LIKES = gql`
  mutation DeleteRepliesLikes($id: Int!) {
    delete_replies_likes_by_pk(id: $id) {
      id
    }
  }
`