import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _int2: any;
  _text: any;
  smallint: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_int2". All fields are combined with logical 'AND'. */
export type _Int2_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_int2']>;
  _gt?: InputMaybe<Scalars['_int2']>;
  _gte?: InputMaybe<Scalars['_int2']>;
  _in?: InputMaybe<Array<Scalars['_int2']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_int2']>;
  _lte?: InputMaybe<Scalars['_int2']>;
  _neq?: InputMaybe<Scalars['_int2']>;
  _nin?: InputMaybe<Array<Scalars['_int2']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "articles" */
export type Articles = {
  __typename?: 'articles';
  /** An object relationship */
  articles_profiles_relation?: Maybe<Profiles>;
  /** An array relationship */
  categories: Array<Categories>;
  comment_count: Scalars['Int'];
  created_at: Scalars['timestamp'];
  details: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  like_count: Scalars['Int'];
  title: Scalars['String'];
  user_id: Scalars['String'];
};


/** columns and relationships of "articles" */
export type ArticlesCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** order by aggregate values of table "articles" */
export type Articles_Aggregate_Order_By = {
  avg?: InputMaybe<Articles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Articles_Max_Order_By>;
  min?: InputMaybe<Articles_Min_Order_By>;
  stddev?: InputMaybe<Articles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Articles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Articles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Articles_Sum_Order_By>;
  var_pop?: InputMaybe<Articles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Articles_Var_Samp_Order_By>;
  variance?: InputMaybe<Articles_Variance_Order_By>;
};

/** order by avg() on columns of table "articles" */
export type Articles_Avg_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Articles_Bool_Exp>>;
  _not?: InputMaybe<Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Articles_Bool_Exp>>;
  articles_profiles_relation?: InputMaybe<Profiles_Bool_Exp>;
  categories?: InputMaybe<Categories_Bool_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "articles" */
export type Articles_Max_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "articles" */
export type Articles_Min_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "articles". */
export type Articles_Order_By = {
  articles_profiles_relation?: InputMaybe<Profiles_Order_By>;
  categories_aggregate?: InputMaybe<Categories_Aggregate_Order_By>;
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "articles" */
export enum Articles_Select_Column {
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "articles" */
export type Articles_Stddev_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "articles" */
export type Articles_Stddev_Pop_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "articles" */
export type Articles_Stddev_Samp_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "articles" */
export type Articles_Sum_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "articles" */
export type Articles_Var_Pop_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "articles" */
export type Articles_Var_Samp_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "articles" */
export type Articles_Variance_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An object relationship */
  article: Articles;
  articles_id: Scalars['String'];
  category: Scalars['smallint'];
  /** An object relationship */
  category_category?: Maybe<Categories>;
  id: Scalars['Int'];
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: InputMaybe<Categories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Categories_Max_Order_By>;
  min?: InputMaybe<Categories_Min_Order_By>;
  stddev?: InputMaybe<Categories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Categories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Categories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Categories_Sum_Order_By>;
  var_pop?: InputMaybe<Categories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Categories_Var_Samp_Order_By>;
  variance?: InputMaybe<Categories_Variance_Order_By>;
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  article?: InputMaybe<Articles_Bool_Exp>;
  articles_id?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Smallint_Comparison_Exp>;
  category_category?: InputMaybe<Categories_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  articles_id?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  articles_id?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  article?: InputMaybe<Articles_Order_By>;
  articles_id?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  category_category?: InputMaybe<Categories_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  ArticlesId = 'articles_id',
  /** column name */
  Category = 'category',
  /** column name */
  Id = 'id'
}

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  article: Articles;
  articles_id: Scalars['String'];
  comment: Scalars['String'];
  /** An array relationship */
  comments_likes: Array<Comments_Likes>;
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  like_count: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
  reply_count: Scalars['Int'];
  user_id: Scalars['String'];
};


/** columns and relationships of "comments" */
export type CommentsComments_LikesArgs = {
  distinct_on?: InputMaybe<Array<Comments_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Likes_Order_By>>;
  where?: InputMaybe<Comments_Likes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  article?: InputMaybe<Articles_Bool_Exp>;
  articles_id?: InputMaybe<String_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  comments_likes?: InputMaybe<Comments_Likes_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  reply_count?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "comments_likes" */
export type Comments_Likes = {
  __typename?: 'comments_likes';
  comment_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** order by aggregate values of table "comments_likes" */
export type Comments_Likes_Aggregate_Order_By = {
  avg?: InputMaybe<Comments_Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Likes_Max_Order_By>;
  min?: InputMaybe<Comments_Likes_Min_Order_By>;
  stddev?: InputMaybe<Comments_Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comments_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comments_Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comments_Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Comments_Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comments_Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Comments_Likes_Variance_Order_By>;
};

/** order by avg() on columns of table "comments_likes" */
export type Comments_Likes_Avg_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments_likes". All fields are combined with a logical 'AND'. */
export type Comments_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Likes_Bool_Exp>>;
  _not?: InputMaybe<Comments_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Likes_Bool_Exp>>;
  comment_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "comments_likes" */
export type Comments_Likes_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "comments_likes" */
export type Comments_Likes_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "comments_likes". */
export type Comments_Likes_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "comments_likes" */
export enum Comments_Likes_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "comments_likes" */
export type Comments_Likes_Stddev_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "comments_likes" */
export type Comments_Likes_Stddev_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "comments_likes" */
export type Comments_Likes_Stddev_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "comments_likes" */
export type Comments_Likes_Sum_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "comments_likes" */
export type Comments_Likes_Var_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "comments_likes" */
export type Comments_Likes_Var_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "comments_likes" */
export type Comments_Likes_Variance_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  article?: InputMaybe<Articles_Order_By>;
  articles_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  comments_likes_aggregate?: InputMaybe<Comments_Likes_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  reply_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  ArticlesId = 'articles_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  ReplyCount = 'reply_count',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "follows" */
export type Follows = {
  __typename?: 'follows';
  created_at: Scalars['timestamp'];
  follower_id: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
  user_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "follows". All fields are combined with a logical 'AND'. */
export type Follows_Bool_Exp = {
  _and?: InputMaybe<Array<Follows_Bool_Exp>>;
  _not?: InputMaybe<Follows_Bool_Exp>;
  _or?: InputMaybe<Array<Follows_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  follower_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "follows". */
export type Follows_Order_By = {
  created_at?: InputMaybe<Order_By>;
  follower_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "follows" */
export enum Follows_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "front_articles" */
export type Front_Articles = {
  __typename?: 'front_articles';
  avatar?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['_text']>;
  comment_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  like_count?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "front_articles". All fields are combined with a logical 'AND'. */
export type Front_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Front_Articles_Bool_Exp>>;
  _not?: InputMaybe<Front_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Front_Articles_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<_Text_Comparison_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "front_articles". */
export type Front_Articles_Order_By = {
  avatar?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "front_articles" */
export enum Front_Articles_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Categories = 'categories',
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  /** An object relationship */
  article?: Maybe<Articles>;
  articles_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
  user_id: Scalars['String'];
};

/** columns and relationships of "likes_articles" */
export type Likes_Articles = {
  __typename?: 'likes_articles';
  avatar?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['_int2']>;
  comment_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  like_count?: Maybe<Scalars['Int']>;
  likes_created?: Maybe<Scalars['timestamp']>;
  likes_id?: Maybe<Scalars['Int']>;
  likes_user?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "likes_articles". All fields are combined with a logical 'AND'. */
export type Likes_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Likes_Articles_Bool_Exp>>;
  _not?: InputMaybe<Likes_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Articles_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<_Int2_Comparison_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  likes_created?: InputMaybe<Timestamp_Comparison_Exp>;
  likes_id?: InputMaybe<Int_Comparison_Exp>;
  likes_user?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "likes_articles". */
export type Likes_Articles_Order_By = {
  avatar?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes_created?: InputMaybe<Order_By>;
  likes_id?: InputMaybe<Order_By>;
  likes_user?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "likes_articles" */
export enum Likes_Articles_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Categories = 'categories',
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  LikesCreated = 'likes_created',
  /** column name */
  LikesId = 'likes_id',
  /** column name */
  LikesUser = 'likes_user',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  article?: InputMaybe<Articles_Bool_Exp>;
  articles_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "likes". */
export type Likes_Order_By = {
  article?: InputMaybe<Articles_Order_By>;
  articles_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  ArticlesId = 'articles_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "person_articles" */
export type Person_Articles = {
  __typename?: 'person_articles';
  avatar?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['_int2']>;
  comment_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  like_count?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "person_articles". All fields are combined with a logical 'AND'. */
export type Person_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Articles_Bool_Exp>>;
  _not?: InputMaybe<Person_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Articles_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<_Int2_Comparison_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "person_articles". */
export type Person_Articles_Order_By = {
  avatar?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "person_articles" */
export enum Person_Articles_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Categories = 'categories',
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "person_followers" */
export type Person_Followers = {
  __typename?: 'person_followers';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  details?: Maybe<Scalars['String']>;
  follower_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "person_followers". All fields are combined with a logical 'AND'. */
export type Person_Followers_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Followers_Bool_Exp>>;
  _not?: InputMaybe<Person_Followers_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Followers_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  follower_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "person_followers". */
export type Person_Followers_Order_By = {
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  follower_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "person_followers" */
export enum Person_Followers_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "person_follows" */
export type Person_Follows = {
  __typename?: 'person_follows';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  details?: Maybe<Scalars['String']>;
  follower_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "person_follows". All fields are combined with a logical 'AND'. */
export type Person_Follows_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Follows_Bool_Exp>>;
  _not?: InputMaybe<Person_Follows_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Follows_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  follower_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "person_follows". */
export type Person_Follows_Order_By = {
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  follower_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "person_follows" */
export enum Person_Follows_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  avatar?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  follow_count: Scalars['Int'];
  follower_count: Scalars['Int'];
  id: Scalars['String'];
  /** An array relationship */
  profiles_articles_relation: Array<Articles>;
  username: Scalars['String'];
};


/** columns and relationships of "profiles" */
export type ProfilesProfiles_Articles_RelationArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  follow_count?: InputMaybe<Int_Comparison_Exp>;
  follower_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  profiles_articles_relation?: InputMaybe<Articles_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  avatar?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  follow_count?: InputMaybe<Order_By>;
  follower_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profiles_articles_relation_aggregate?: InputMaybe<Articles_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Details = 'details',
  /** column name */
  FollowCount = 'follow_count',
  /** column name */
  FollowerCount = 'follower_count',
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "articles" */
  articles: Array<Articles>;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** An array relationship */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  comments_likes: Array<Comments_Likes>;
  /** fetch data from the table: "comments_likes" using primary key columns */
  comments_likes_by_pk?: Maybe<Comments_Likes>;
  /** fetch data from the table: "follows" */
  follows: Array<Follows>;
  /** fetch data from the table: "follows" using primary key columns */
  follows_by_pk?: Maybe<Follows>;
  /** fetch data from the table: "front_articles" */
  front_articles: Array<Front_Articles>;
  /** fetch data from the table: "likes" */
  likes: Array<Likes>;
  /** fetch data from the table: "likes_articles" */
  likes_articles: Array<Likes_Articles>;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "person_articles" */
  person_articles: Array<Person_Articles>;
  /** fetch data from the table: "person_followers" */
  person_followers: Array<Person_Followers>;
  /** fetch data from the table: "person_follows" */
  person_follows: Array<Person_Follows>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "replies" */
  replies: Array<Replies>;
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>;
  /** An array relationship */
  replies_likes: Array<Replies_Likes>;
  /** fetch data from the table: "replies_likes" using primary key columns */
  replies_likes_by_pk?: Maybe<Replies_Likes>;
  /** fetch data from the table: "serverless_articles" */
  serverless_articles: Array<Serverless_Articles>;
};


export type Query_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootArticles_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootComments_LikesArgs = {
  distinct_on?: InputMaybe<Array<Comments_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Likes_Order_By>>;
  where?: InputMaybe<Comments_Likes_Bool_Exp>;
};


export type Query_RootComments_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFollowsArgs = {
  distinct_on?: InputMaybe<Array<Follows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Follows_Order_By>>;
  where?: InputMaybe<Follows_Bool_Exp>;
};


export type Query_RootFollows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFront_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Front_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Front_Articles_Order_By>>;
  where?: InputMaybe<Front_Articles_Bool_Exp>;
};


export type Query_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Articles_Order_By>>;
  where?: InputMaybe<Likes_Articles_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPerson_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Person_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Articles_Order_By>>;
  where?: InputMaybe<Person_Articles_Bool_Exp>;
};


export type Query_RootPerson_FollowersArgs = {
  distinct_on?: InputMaybe<Array<Person_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Followers_Order_By>>;
  where?: InputMaybe<Person_Followers_Bool_Exp>;
};


export type Query_RootPerson_FollowsArgs = {
  distinct_on?: InputMaybe<Array<Person_Follows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Follows_Order_By>>;
  where?: InputMaybe<Person_Follows_Bool_Exp>;
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRepliesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Order_By>>;
  where?: InputMaybe<Replies_Bool_Exp>;
};


export type Query_RootReplies_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReplies_LikesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Likes_Order_By>>;
  where?: InputMaybe<Replies_Likes_Bool_Exp>;
};


export type Query_RootReplies_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootServerless_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Serverless_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Serverless_Articles_Order_By>>;
  where?: InputMaybe<Serverless_Articles_Bool_Exp>;
};

/** columns and relationships of "replies" */
export type Replies = {
  __typename?: 'replies';
  comment: Scalars['String'];
  /** An object relationship */
  commentByCommentId: Comments;
  comment_id: Scalars['Int'];
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  like_count: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
  /** An array relationship */
  replies_likes: Array<Replies_Likes>;
  user_id: Scalars['String'];
};


/** columns and relationships of "replies" */
export type RepliesReplies_LikesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Likes_Order_By>>;
  where?: InputMaybe<Replies_Likes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "replies". All fields are combined with a logical 'AND'. */
export type Replies_Bool_Exp = {
  _and?: InputMaybe<Array<Replies_Bool_Exp>>;
  _not?: InputMaybe<Replies_Bool_Exp>;
  _or?: InputMaybe<Array<Replies_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  commentByCommentId?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  replies_likes?: InputMaybe<Replies_Likes_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "replies_likes" */
export type Replies_Likes = {
  __typename?: 'replies_likes';
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
  replies_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  reply?: Maybe<Replies>;
  user_id: Scalars['String'];
};

/** order by aggregate values of table "replies_likes" */
export type Replies_Likes_Aggregate_Order_By = {
  avg?: InputMaybe<Replies_Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Replies_Likes_Max_Order_By>;
  min?: InputMaybe<Replies_Likes_Min_Order_By>;
  stddev?: InputMaybe<Replies_Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Replies_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Replies_Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Replies_Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Replies_Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Replies_Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Replies_Likes_Variance_Order_By>;
};

/** order by avg() on columns of table "replies_likes" */
export type Replies_Likes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "replies_likes". All fields are combined with a logical 'AND'. */
export type Replies_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Replies_Likes_Bool_Exp>>;
  _not?: InputMaybe<Replies_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Replies_Likes_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  replies_id?: InputMaybe<Int_Comparison_Exp>;
  reply?: InputMaybe<Replies_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "replies_likes" */
export type Replies_Likes_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "replies_likes" */
export type Replies_Likes_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "replies_likes". */
export type Replies_Likes_Order_By = {
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  replies_id?: InputMaybe<Order_By>;
  reply?: InputMaybe<Replies_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "replies_likes" */
export enum Replies_Likes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RepliesId = 'replies_id',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "replies_likes" */
export type Replies_Likes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "replies_likes" */
export type Replies_Likes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "replies_likes" */
export type Replies_Likes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "replies_likes" */
export type Replies_Likes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "replies_likes" */
export type Replies_Likes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "replies_likes" */
export type Replies_Likes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "replies_likes" */
export type Replies_Likes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  replies_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "replies". */
export type Replies_Order_By = {
  comment?: InputMaybe<Order_By>;
  commentByCommentId?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  replies_likes_aggregate?: InputMaybe<Replies_Likes_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "replies" */
export enum Replies_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "serverless_articles" */
export type Serverless_Articles = {
  __typename?: 'serverless_articles';
  avatar?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['_text']>;
  comment_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  like_count?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "serverless_articles". All fields are combined with a logical 'AND'. */
export type Serverless_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Serverless_Articles_Bool_Exp>>;
  _not?: InputMaybe<Serverless_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Serverless_Articles_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<_Text_Comparison_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "serverless_articles". */
export type Serverless_Articles_Order_By = {
  avatar?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "serverless_articles" */
export enum Serverless_Articles_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Categories = 'categories',
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "articles" */
  articles: Array<Articles>;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** An array relationship */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  comments_likes: Array<Comments_Likes>;
  /** fetch data from the table: "comments_likes" using primary key columns */
  comments_likes_by_pk?: Maybe<Comments_Likes>;
  /** fetch data from the table: "follows" */
  follows: Array<Follows>;
  /** fetch data from the table: "follows" using primary key columns */
  follows_by_pk?: Maybe<Follows>;
  /** fetch data from the table: "front_articles" */
  front_articles: Array<Front_Articles>;
  /** fetch data from the table: "likes" */
  likes: Array<Likes>;
  /** fetch data from the table: "likes_articles" */
  likes_articles: Array<Likes_Articles>;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "person_articles" */
  person_articles: Array<Person_Articles>;
  /** fetch data from the table: "person_followers" */
  person_followers: Array<Person_Followers>;
  /** fetch data from the table: "person_follows" */
  person_follows: Array<Person_Follows>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "replies" */
  replies: Array<Replies>;
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>;
  /** An array relationship */
  replies_likes: Array<Replies_Likes>;
  /** fetch data from the table: "replies_likes" using primary key columns */
  replies_likes_by_pk?: Maybe<Replies_Likes>;
  /** fetch data from the table: "serverless_articles" */
  serverless_articles: Array<Serverless_Articles>;
};


export type Subscription_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootArticles_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootComments_LikesArgs = {
  distinct_on?: InputMaybe<Array<Comments_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Likes_Order_By>>;
  where?: InputMaybe<Comments_Likes_Bool_Exp>;
};


export type Subscription_RootComments_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFollowsArgs = {
  distinct_on?: InputMaybe<Array<Follows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Follows_Order_By>>;
  where?: InputMaybe<Follows_Bool_Exp>;
};


export type Subscription_RootFollows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFront_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Front_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Front_Articles_Order_By>>;
  where?: InputMaybe<Front_Articles_Bool_Exp>;
};


export type Subscription_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Articles_Order_By>>;
  where?: InputMaybe<Likes_Articles_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPerson_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Person_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Articles_Order_By>>;
  where?: InputMaybe<Person_Articles_Bool_Exp>;
};


export type Subscription_RootPerson_FollowersArgs = {
  distinct_on?: InputMaybe<Array<Person_Followers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Followers_Order_By>>;
  where?: InputMaybe<Person_Followers_Bool_Exp>;
};


export type Subscription_RootPerson_FollowsArgs = {
  distinct_on?: InputMaybe<Array<Person_Follows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Follows_Order_By>>;
  where?: InputMaybe<Person_Follows_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRepliesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Order_By>>;
  where?: InputMaybe<Replies_Bool_Exp>;
};


export type Subscription_RootReplies_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReplies_LikesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Likes_Order_By>>;
  where?: InputMaybe<Replies_Likes_Bool_Exp>;
};


export type Subscription_RootReplies_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootServerless_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Serverless_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Serverless_Articles_Order_By>>;
  where?: InputMaybe<Serverless_Articles_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type GetProfilesDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProfilesDetailsQuery = { __typename?: 'query_root', profiles_by_pk?: { __typename?: 'profiles', username: string, avatar?: string | null, details?: string | null } | null };

export type GetPersonArticlesQueryVariables = Exact<{
  _eq: Scalars['String'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetPersonArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'person_articles', id?: string | null, user_id?: string | null, title?: string | null, image?: string | null, details?: string | null, username?: string | null, avatar?: string | null, comment_count?: number | null, like_count?: number | null, created_at?: any | null, categories?: any | null }> };

export type GetPersonLikesArticlesQueryVariables = Exact<{
  _eq: Scalars['String'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetPersonLikesArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'likes_articles', id?: string | null, user_id?: string | null, title?: string | null, image?: string | null, details?: string | null, username?: string | null, avatar?: string | null, comment_count?: number | null, like_count?: number | null, created_at?: any | null, categories?: any | null, likes_created?: any | null }> };

export type GetPersonFollowsQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
  _eq: Scalars['String'];
}>;


export type GetPersonFollowsQuery = { __typename?: 'query_root', person_follows: Array<{ __typename?: 'person_follows', username?: string | null, avatar?: string | null, details?: string | null, follower_id?: string | null, created_at?: any | null }> };

export type GetPersonFollowersQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
  _eq: Scalars['String'];
}>;


export type GetPersonFollowersQuery = { __typename?: 'query_root', person_followers: Array<{ __typename?: 'person_followers', user_id?: string | null, username?: string | null, avatar?: string | null, details?: string | null, follower_id?: string | null, created_at?: any | null }> };

export type GetFollowsQueryVariables = Exact<{
  _eq: Scalars['String'];
  _eq1: Scalars['String'];
}>;


export type GetFollowsQuery = { __typename?: 'query_root', follows: Array<{ __typename?: 'follows', id: number, follower_id: string }> };

export type GetFrontArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetFrontArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'front_articles', id?: string | null, title?: string | null, image?: string | null, details?: string | null, user_id?: string | null, like_count?: number | null, comment_count?: number | null, created_at?: any | null, categories?: any | null, avatar?: string | null, username?: string | null }> };

export type GetServerlessArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetServerlessArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'serverless_articles', avatar?: string | null, categories?: any | null, comment_count?: number | null, created_at?: any | null, details?: string | null, id?: string | null, image?: string | null, like_count?: number | null, title?: string | null, user_id?: string | null, username?: string | null }> };

export type GetLikesQueryVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type GetLikesQuery = { __typename?: 'query_root', likes: Array<{ __typename?: 'likes', id: number }> };

export type GetCommentsQueryVariables = Exact<{
  _eq: Scalars['String'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetCommentsQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', id: number, user_id: string, like_count: number, reply_count: number, created_at: any, comment: string, comments_likes: Array<{ __typename?: 'comments_likes', id: number }>, profile: { __typename?: 'profiles', id: string, username: string, avatar?: string | null } }> };

export type GetRepliesQueryVariables = Exact<{
  _eq: Scalars['Int'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetRepliesQuery = { __typename?: 'query_root', replies: Array<{ __typename?: 'replies', id: number, user_id: string, comment_id: number, like_count: number, created_at: any, comment: string, profile: { __typename?: 'profiles', username: string, avatar?: string | null }, replies_likes: Array<{ __typename?: 'replies_likes', id: number }> }> };

export type GetNoSearchArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetNoSearchArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'person_articles', id?: string | null, user_id?: string | null, title?: string | null, image?: string | null, details?: string | null, username?: string | null, avatar?: string | null, comment_count?: number | null, like_count?: number | null, created_at?: any | null, categories?: any | null }> };

export type GetSearchArticlesQueryVariables = Exact<{
  _like: Scalars['String'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetSearchArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'person_articles', id?: string | null, user_id?: string | null, title?: string | null, details?: string | null, username?: string | null, image?: string | null, comment_count?: number | null, like_count?: number | null, created_at?: any | null, categories?: any | null }> };

export type GetNoSearchProfilesQueryVariables = Exact<{
  _and?: InputMaybe<Array<Profiles_Bool_Exp> | Profiles_Bool_Exp>;
}>;


export type GetNoSearchProfilesQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: string, username: string, avatar?: string | null, details?: string | null, follow_count: number, follower_count: number }> };

export type GetSearchProfilesQueryVariables = Exact<{
  _and?: InputMaybe<Array<Profiles_Bool_Exp> | Profiles_Bool_Exp>;
  _ilike: Scalars['String'];
}>;


export type GetSearchProfilesQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: string, username: string, avatar?: string | null, details?: string | null, follow_count: number, follower_count: number }> };


export const GetProfilesDetailsDocument = gql`
    query GetProfilesDetails($id: String!) {
  profiles_by_pk(id: $id) {
    username
    avatar
    details
  }
}
    `;

/**
 * __useGetProfilesDetailsQuery__
 *
 * To run a query within a React component, call `useGetProfilesDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfilesDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetProfilesDetailsQuery, GetProfilesDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfilesDetailsQuery, GetProfilesDetailsQueryVariables>(GetProfilesDetailsDocument, options);
      }
export function useGetProfilesDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfilesDetailsQuery, GetProfilesDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfilesDetailsQuery, GetProfilesDetailsQueryVariables>(GetProfilesDetailsDocument, options);
        }
export type GetProfilesDetailsQueryHookResult = ReturnType<typeof useGetProfilesDetailsQuery>;
export type GetProfilesDetailsLazyQueryHookResult = ReturnType<typeof useGetProfilesDetailsLazyQuery>;
export type GetProfilesDetailsQueryResult = Apollo.QueryResult<GetProfilesDetailsQuery, GetProfilesDetailsQueryVariables>;
export const GetPersonArticlesDocument = gql`
    query GetPersonArticles($_eq: String!, $_lt: timestamp = "now()") {
  articles: person_articles(
    where: {user_id: {_eq: $_eq}, created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
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
    `;

/**
 * __useGetPersonArticlesQuery__
 *
 * To run a query within a React component, call `useGetPersonArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonArticlesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetPersonArticlesQuery(baseOptions: Apollo.QueryHookOptions<GetPersonArticlesQuery, GetPersonArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonArticlesQuery, GetPersonArticlesQueryVariables>(GetPersonArticlesDocument, options);
      }
export function useGetPersonArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonArticlesQuery, GetPersonArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonArticlesQuery, GetPersonArticlesQueryVariables>(GetPersonArticlesDocument, options);
        }
export type GetPersonArticlesQueryHookResult = ReturnType<typeof useGetPersonArticlesQuery>;
export type GetPersonArticlesLazyQueryHookResult = ReturnType<typeof useGetPersonArticlesLazyQuery>;
export type GetPersonArticlesQueryResult = Apollo.QueryResult<GetPersonArticlesQuery, GetPersonArticlesQueryVariables>;
export const GetPersonLikesArticlesDocument = gql`
    query GetPersonLikesArticles($_eq: String!, $_lt: timestamp = "now()") {
  articles: likes_articles(
    where: {user_id: {_eq: $_eq}, likes_created: {_lt: $_lt}}
    order_by: {likes_created: desc}
    limit: 10
  ) {
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

/**
 * __useGetPersonLikesArticlesQuery__
 *
 * To run a query within a React component, call `useGetPersonLikesArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonLikesArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonLikesArticlesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetPersonLikesArticlesQuery(baseOptions: Apollo.QueryHookOptions<GetPersonLikesArticlesQuery, GetPersonLikesArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonLikesArticlesQuery, GetPersonLikesArticlesQueryVariables>(GetPersonLikesArticlesDocument, options);
      }
export function useGetPersonLikesArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonLikesArticlesQuery, GetPersonLikesArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonLikesArticlesQuery, GetPersonLikesArticlesQueryVariables>(GetPersonLikesArticlesDocument, options);
        }
export type GetPersonLikesArticlesQueryHookResult = ReturnType<typeof useGetPersonLikesArticlesQuery>;
export type GetPersonLikesArticlesLazyQueryHookResult = ReturnType<typeof useGetPersonLikesArticlesLazyQuery>;
export type GetPersonLikesArticlesQueryResult = Apollo.QueryResult<GetPersonLikesArticlesQuery, GetPersonLikesArticlesQueryVariables>;
export const GetPersonFollowsDocument = gql`
    query GetPersonFollows($_lt: timestamp = "now()", $_eq: String!) {
  person_follows(
    limit: 10
    order_by: {created_at: desc}
    where: {created_at: {_lt: $_lt}, user_id: {_eq: $_eq}}
  ) {
    username
    avatar
    details
    follower_id
    created_at
  }
}
    `;

/**
 * __useGetPersonFollowsQuery__
 *
 * To run a query within a React component, call `useGetPersonFollowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonFollowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonFollowsQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetPersonFollowsQuery(baseOptions: Apollo.QueryHookOptions<GetPersonFollowsQuery, GetPersonFollowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonFollowsQuery, GetPersonFollowsQueryVariables>(GetPersonFollowsDocument, options);
      }
export function useGetPersonFollowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonFollowsQuery, GetPersonFollowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonFollowsQuery, GetPersonFollowsQueryVariables>(GetPersonFollowsDocument, options);
        }
export type GetPersonFollowsQueryHookResult = ReturnType<typeof useGetPersonFollowsQuery>;
export type GetPersonFollowsLazyQueryHookResult = ReturnType<typeof useGetPersonFollowsLazyQuery>;
export type GetPersonFollowsQueryResult = Apollo.QueryResult<GetPersonFollowsQuery, GetPersonFollowsQueryVariables>;
export const GetPersonFollowersDocument = gql`
    query GetPersonFollowers($_lt: timestamp = "now()", $_eq: String!) {
  person_followers(
    limit: 10
    order_by: {created_at: desc}
    where: {created_at: {_lt: $_lt}, follower_id: {_eq: $_eq}}
  ) {
    user_id
    username
    avatar
    details
    follower_id
    created_at
  }
}
    `;

/**
 * __useGetPersonFollowersQuery__
 *
 * To run a query within a React component, call `useGetPersonFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonFollowersQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetPersonFollowersQuery(baseOptions: Apollo.QueryHookOptions<GetPersonFollowersQuery, GetPersonFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonFollowersQuery, GetPersonFollowersQueryVariables>(GetPersonFollowersDocument, options);
      }
export function useGetPersonFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonFollowersQuery, GetPersonFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonFollowersQuery, GetPersonFollowersQueryVariables>(GetPersonFollowersDocument, options);
        }
export type GetPersonFollowersQueryHookResult = ReturnType<typeof useGetPersonFollowersQuery>;
export type GetPersonFollowersLazyQueryHookResult = ReturnType<typeof useGetPersonFollowersLazyQuery>;
export type GetPersonFollowersQueryResult = Apollo.QueryResult<GetPersonFollowersQuery, GetPersonFollowersQueryVariables>;
export const GetFollowsDocument = gql`
    query GetFollows($_eq: String!, $_eq1: String!) {
  follows(where: {user_id: {_eq: $_eq}, follower_id: {_eq: $_eq1}}, limit: 1) {
    id
    follower_id
  }
}
    `;

/**
 * __useGetFollowsQuery__
 *
 * To run a query within a React component, call `useGetFollowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowsQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      _eq1: // value for '_eq1'
 *   },
 * });
 */
export function useGetFollowsQuery(baseOptions: Apollo.QueryHookOptions<GetFollowsQuery, GetFollowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFollowsQuery, GetFollowsQueryVariables>(GetFollowsDocument, options);
      }
export function useGetFollowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFollowsQuery, GetFollowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFollowsQuery, GetFollowsQueryVariables>(GetFollowsDocument, options);
        }
export type GetFollowsQueryHookResult = ReturnType<typeof useGetFollowsQuery>;
export type GetFollowsLazyQueryHookResult = ReturnType<typeof useGetFollowsLazyQuery>;
export type GetFollowsQueryResult = Apollo.QueryResult<GetFollowsQuery, GetFollowsQueryVariables>;
export const GetFrontArticlesDocument = gql`
    query GetFrontArticles($_lt: timestamp = "now()") {
  articles: front_articles(
    where: {created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
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
    `;

/**
 * __useGetFrontArticlesQuery__
 *
 * To run a query within a React component, call `useGetFrontArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFrontArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFrontArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetFrontArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetFrontArticlesQuery, GetFrontArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFrontArticlesQuery, GetFrontArticlesQueryVariables>(GetFrontArticlesDocument, options);
      }
export function useGetFrontArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFrontArticlesQuery, GetFrontArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFrontArticlesQuery, GetFrontArticlesQueryVariables>(GetFrontArticlesDocument, options);
        }
export type GetFrontArticlesQueryHookResult = ReturnType<typeof useGetFrontArticlesQuery>;
export type GetFrontArticlesLazyQueryHookResult = ReturnType<typeof useGetFrontArticlesLazyQuery>;
export type GetFrontArticlesQueryResult = Apollo.QueryResult<GetFrontArticlesQuery, GetFrontArticlesQueryVariables>;
export const GetServerlessArticlesDocument = gql`
    query GetServerlessArticles($_lt: timestamp = "now()") {
  articles: serverless_articles(
    where: {created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
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
    `;

/**
 * __useGetServerlessArticlesQuery__
 *
 * To run a query within a React component, call `useGetServerlessArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServerlessArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServerlessArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetServerlessArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetServerlessArticlesQuery, GetServerlessArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetServerlessArticlesQuery, GetServerlessArticlesQueryVariables>(GetServerlessArticlesDocument, options);
      }
export function useGetServerlessArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetServerlessArticlesQuery, GetServerlessArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetServerlessArticlesQuery, GetServerlessArticlesQueryVariables>(GetServerlessArticlesDocument, options);
        }
export type GetServerlessArticlesQueryHookResult = ReturnType<typeof useGetServerlessArticlesQuery>;
export type GetServerlessArticlesLazyQueryHookResult = ReturnType<typeof useGetServerlessArticlesLazyQuery>;
export type GetServerlessArticlesQueryResult = Apollo.QueryResult<GetServerlessArticlesQuery, GetServerlessArticlesQueryVariables>;
export const GetLikesDocument = gql`
    query GetLikes($_eq: String!) {
  likes(where: {articles_id: {_eq: $_eq}}, limit: 1) {
    id
  }
}
    `;

/**
 * __useGetLikesQuery__
 *
 * To run a query within a React component, call `useGetLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLikesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetLikesQuery(baseOptions: Apollo.QueryHookOptions<GetLikesQuery, GetLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLikesQuery, GetLikesQueryVariables>(GetLikesDocument, options);
      }
export function useGetLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLikesQuery, GetLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLikesQuery, GetLikesQueryVariables>(GetLikesDocument, options);
        }
export type GetLikesQueryHookResult = ReturnType<typeof useGetLikesQuery>;
export type GetLikesLazyQueryHookResult = ReturnType<typeof useGetLikesLazyQuery>;
export type GetLikesQueryResult = Apollo.QueryResult<GetLikesQuery, GetLikesQueryVariables>;
export const GetCommentsDocument = gql`
    query GetComments($_eq: String!, $_lt: timestamp = "now()") {
  comments(
    where: {articles_id: {_eq: $_eq}, created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
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
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetRepliesDocument = gql`
    query GetReplies($_eq: Int!, $_lt: timestamp = "now()") {
  replies(
    limit: 10
    where: {comment_id: {_eq: $_eq}, created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
  ) {
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
    `;

/**
 * __useGetRepliesQuery__
 *
 * To run a query within a React component, call `useGetRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepliesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetRepliesQuery(baseOptions: Apollo.QueryHookOptions<GetRepliesQuery, GetRepliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRepliesQuery, GetRepliesQueryVariables>(GetRepliesDocument, options);
      }
export function useGetRepliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRepliesQuery, GetRepliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRepliesQuery, GetRepliesQueryVariables>(GetRepliesDocument, options);
        }
export type GetRepliesQueryHookResult = ReturnType<typeof useGetRepliesQuery>;
export type GetRepliesLazyQueryHookResult = ReturnType<typeof useGetRepliesLazyQuery>;
export type GetRepliesQueryResult = Apollo.QueryResult<GetRepliesQuery, GetRepliesQueryVariables>;
export const GetNoSearchArticlesDocument = gql`
    query GetNoSearchArticles($_lt: timestamp = "now()") {
  articles: person_articles(
    where: {user_id: {}, created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
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
    `;

/**
 * __useGetNoSearchArticlesQuery__
 *
 * To run a query within a React component, call `useGetNoSearchArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoSearchArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoSearchArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetNoSearchArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetNoSearchArticlesQuery, GetNoSearchArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoSearchArticlesQuery, GetNoSearchArticlesQueryVariables>(GetNoSearchArticlesDocument, options);
      }
export function useGetNoSearchArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoSearchArticlesQuery, GetNoSearchArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoSearchArticlesQuery, GetNoSearchArticlesQueryVariables>(GetNoSearchArticlesDocument, options);
        }
export type GetNoSearchArticlesQueryHookResult = ReturnType<typeof useGetNoSearchArticlesQuery>;
export type GetNoSearchArticlesLazyQueryHookResult = ReturnType<typeof useGetNoSearchArticlesLazyQuery>;
export type GetNoSearchArticlesQueryResult = Apollo.QueryResult<GetNoSearchArticlesQuery, GetNoSearchArticlesQueryVariables>;
export const GetSearchArticlesDocument = gql`
    query GetSearchArticles($_like: String!, $_lt: timestamp = "now()") {
  articles: person_articles(
    where: {created_at: {_lt: $_lt}, _or: [{title: {_like: $_like}}, {details: {_like: $_like}}]}
    order_by: {created_at: desc}
    limit: 10
  ) {
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
  }
}
    `;

/**
 * __useGetSearchArticlesQuery__
 *
 * To run a query within a React component, call `useGetSearchArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchArticlesQuery({
 *   variables: {
 *      _like: // value for '_like'
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetSearchArticlesQuery(baseOptions: Apollo.QueryHookOptions<GetSearchArticlesQuery, GetSearchArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchArticlesQuery, GetSearchArticlesQueryVariables>(GetSearchArticlesDocument, options);
      }
export function useGetSearchArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchArticlesQuery, GetSearchArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchArticlesQuery, GetSearchArticlesQueryVariables>(GetSearchArticlesDocument, options);
        }
export type GetSearchArticlesQueryHookResult = ReturnType<typeof useGetSearchArticlesQuery>;
export type GetSearchArticlesLazyQueryHookResult = ReturnType<typeof useGetSearchArticlesLazyQuery>;
export type GetSearchArticlesQueryResult = Apollo.QueryResult<GetSearchArticlesQuery, GetSearchArticlesQueryVariables>;
export const GetNoSearchProfilesDocument = gql`
    query GetNoSearchProfiles($_and: [profiles_bool_exp!] = {follower_count: {_lte: null}, id: {_lt: ""}}) {
  profiles(
    where: {_and: $_and}
    limit: 10
    order_by: {follower_count: desc, id: desc}
  ) {
    id
    username
    avatar
    details
    follow_count
    follower_count
  }
}
    `;

/**
 * __useGetNoSearchProfilesQuery__
 *
 * To run a query within a React component, call `useGetNoSearchProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoSearchProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoSearchProfilesQuery({
 *   variables: {
 *      _and: // value for '_and'
 *   },
 * });
 */
export function useGetNoSearchProfilesQuery(baseOptions?: Apollo.QueryHookOptions<GetNoSearchProfilesQuery, GetNoSearchProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoSearchProfilesQuery, GetNoSearchProfilesQueryVariables>(GetNoSearchProfilesDocument, options);
      }
export function useGetNoSearchProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoSearchProfilesQuery, GetNoSearchProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoSearchProfilesQuery, GetNoSearchProfilesQueryVariables>(GetNoSearchProfilesDocument, options);
        }
export type GetNoSearchProfilesQueryHookResult = ReturnType<typeof useGetNoSearchProfilesQuery>;
export type GetNoSearchProfilesLazyQueryHookResult = ReturnType<typeof useGetNoSearchProfilesLazyQuery>;
export type GetNoSearchProfilesQueryResult = Apollo.QueryResult<GetNoSearchProfilesQuery, GetNoSearchProfilesQueryVariables>;
export const GetSearchProfilesDocument = gql`
    query GetSearchProfiles($_and: [profiles_bool_exp!] = {follower_count: {_lte: null}, id: {_lt: ""}}, $_ilike: String!) {
  profiles(
    where: {_and: $_and, _or: [{username: {_ilike: $_ilike}}, {details: {_ilike: $_ilike}}]}
    limit: 10
    order_by: {follower_count: desc, id: desc}
  ) {
    id
    username
    avatar
    details
    follow_count
    follower_count
  }
}
    `;

/**
 * __useGetSearchProfilesQuery__
 *
 * To run a query within a React component, call `useGetSearchProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchProfilesQuery({
 *   variables: {
 *      _and: // value for '_and'
 *      _ilike: // value for '_ilike'
 *   },
 * });
 */
export function useGetSearchProfilesQuery(baseOptions: Apollo.QueryHookOptions<GetSearchProfilesQuery, GetSearchProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchProfilesQuery, GetSearchProfilesQueryVariables>(GetSearchProfilesDocument, options);
      }
export function useGetSearchProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchProfilesQuery, GetSearchProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchProfilesQuery, GetSearchProfilesQueryVariables>(GetSearchProfilesDocument, options);
        }
export type GetSearchProfilesQueryHookResult = ReturnType<typeof useGetSearchProfilesQuery>;
export type GetSearchProfilesLazyQueryHookResult = ReturnType<typeof useGetSearchProfilesLazyQuery>;
export type GetSearchProfilesQueryResult = Apollo.QueryResult<GetSearchProfilesQuery, GetSearchProfilesQueryVariables>;