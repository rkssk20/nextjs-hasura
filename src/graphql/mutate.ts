import { gql } from '@apollo/client'


export const UPDATE_PROFILES = gql`
  mutation UpdateProfiles($id: String!, $details: String, $username: String) {
    update_profiles_by_pk(pk_columns: {id: $id}, _set: {details: $details, username: $username}) {
      username
      details
    }
  }
`

export const UPDATE_PROFILES_AVATAR = gql`
  mutation UpdateProfilesAvatar($id: String!, $avatar: String!) {
    update_profiles_by_pk(pk_columns: {id: $id}, _set: {avatar: $avatar}) {
      avatar
    }
  }
`;

export const DLETE_PROFILES_AVATAR = gql`
  mutation DeleteProfilesAvatar($id: String!, $avatar: String = null) {
    update_profiles_by_pk(pk_columns: {id: $id}, _set: {avatar: $avatar}) {
      avatar
    }
  }
`;

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

export const INSERT_LIKES = gql`
  mutation InsertLikes($articles_id: String!) {
    insert_likes_one(object: {articles_id: $articles_id}) {
      id
    }
  }
`

export const DELETE_LIEKS = gql`
  mutation DeleteLikes($id: Int!) {
    delete_likes_by_pk(id: $id) {
      id
    }
  }
`