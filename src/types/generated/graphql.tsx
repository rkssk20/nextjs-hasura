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

/** columns and relationships of "articles" */
export type Articles = {
  __typename?: 'articles';
  /** An array relationship */
  categories: Array<Categories>;
  comment_count: Scalars['Int'];
  /** An array relationship */
  comments: Array<Comments>;
  created_at: Scalars['timestamp'];
  details: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  like_count: Scalars['Int'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An object relationship */
  profile: Profiles;
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


/** columns and relationships of "articles" */
export type ArticlesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "articles" */
export type ArticlesLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
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
  categories?: InputMaybe<Categories_Bool_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
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
  categories_aggregate?: InputMaybe<Categories_Aggregate_Order_By>;
  comment_count?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
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
  likes: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
  /** An array relationship */
  replies: Array<Replies>;
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


/** columns and relationships of "comments" */
export type CommentsRepliesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Order_By>>;
  where?: InputMaybe<Replies_Bool_Exp>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: InputMaybe<Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
  stddev?: InputMaybe<Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comments_Sum_Order_By>;
  var_pop?: InputMaybe<Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<Comments_Variance_Order_By>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
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
  likes?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  replies?: InputMaybe<Replies_Bool_Exp>;
  reply_count?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "comments_likes" */
export type Comments_Likes = {
  __typename?: 'comments_likes';
  /** An object relationship */
  comment?: Maybe<Comments>;
  comment_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profiles;
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
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
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
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
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

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  articles_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  articles_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  likes?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  replies_aggregate?: InputMaybe<Replies_Aggregate_Order_By>;
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
  Likes = 'likes',
  /** column name */
  ReplyCount = 'reply_count',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "firebase_articles" */
export type Firebase_Articles = {
  __typename?: 'firebase_articles';
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

/** Boolean expression to filter rows from the table "firebase_articles". All fields are combined with a logical 'AND'. */
export type Firebase_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Firebase_Articles_Bool_Exp>>;
  _not?: InputMaybe<Firebase_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Firebase_Articles_Bool_Exp>>;
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

/** Ordering options when selecting data from "firebase_articles". */
export type Firebase_Articles_Order_By = {
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

/** select columns of table "firebase_articles" */
export enum Firebase_Articles_Select_Column {
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

/** order by aggregate values of table "follows" */
export type Follows_Aggregate_Order_By = {
  avg?: InputMaybe<Follows_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Follows_Max_Order_By>;
  min?: InputMaybe<Follows_Min_Order_By>;
  stddev?: InputMaybe<Follows_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Follows_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Follows_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Follows_Sum_Order_By>;
  var_pop?: InputMaybe<Follows_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Follows_Var_Samp_Order_By>;
  variance?: InputMaybe<Follows_Variance_Order_By>;
};

/** order by avg() on columns of table "follows" */
export type Follows_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
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

/** order by max() on columns of table "follows" */
export type Follows_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  follower_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "follows" */
export type Follows_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  follower_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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

/** order by stddev() on columns of table "follows" */
export type Follows_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "follows" */
export type Follows_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "follows" */
export type Follows_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "follows" */
export type Follows_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "follows" */
export type Follows_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "follows" */
export type Follows_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "follows" */
export type Follows_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "hasura_articles" */
export type Hasura_Articles = {
  __typename?: 'hasura_articles';
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

/** Boolean expression to filter rows from the table "hasura_articles". All fields are combined with a logical 'AND'. */
export type Hasura_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Hasura_Articles_Bool_Exp>>;
  _not?: InputMaybe<Hasura_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Hasura_Articles_Bool_Exp>>;
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

/** Ordering options when selecting data from "hasura_articles". */
export type Hasura_Articles_Order_By = {
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

/** select columns of table "hasura_articles" */
export enum Hasura_Articles_Select_Column {
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

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  avg?: InputMaybe<Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Likes_Max_Order_By>;
  min?: InputMaybe<Likes_Min_Order_By>;
  stddev?: InputMaybe<Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Likes_Variance_Order_By>;
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

/** order by avg() on columns of table "likes" */
export type Likes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

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

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  articles_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  articles_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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

/** order by stddev() on columns of table "likes" */
export type Likes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "likes" */
export type Likes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "likes" */
export type Likes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "likes" */
export type Likes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "likes" */
export type Likes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "likes" */
export type Likes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "likes" */
export type Likes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "nextjs_articles" */
export type Nextjs_Articles = {
  __typename?: 'nextjs_articles';
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

/** Boolean expression to filter rows from the table "nextjs_articles". All fields are combined with a logical 'AND'. */
export type Nextjs_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Nextjs_Articles_Bool_Exp>>;
  _not?: InputMaybe<Nextjs_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Nextjs_Articles_Bool_Exp>>;
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

/** Ordering options when selecting data from "nextjs_articles". */
export type Nextjs_Articles_Order_By = {
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

/** select columns of table "nextjs_articles" */
export enum Nextjs_Articles_Select_Column {
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
  /** An array relationship */
  articles: Array<Articles>;
  avatar?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An array relationship */
  comments_likes: Array<Comments_Likes>;
  details?: Maybe<Scalars['String']>;
  follow_count: Scalars['Int'];
  follower_count: Scalars['Int'];
  /** An array relationship */
  follows: Array<Follows>;
  id: Scalars['String'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An array relationship */
  replies: Array<Replies>;
  /** An array relationship */
  replies_likes: Array<Replies_Likes>;
  username: Scalars['String'];
};


/** columns and relationships of "profiles" */
export type ProfilesArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesComments_LikesArgs = {
  distinct_on?: InputMaybe<Array<Comments_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Likes_Order_By>>;
  where?: InputMaybe<Comments_Likes_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesFollowsArgs = {
  distinct_on?: InputMaybe<Array<Follows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Follows_Order_By>>;
  where?: InputMaybe<Follows_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesRepliesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Order_By>>;
  where?: InputMaybe<Replies_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesReplies_LikesArgs = {
  distinct_on?: InputMaybe<Array<Replies_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Replies_Likes_Order_By>>;
  where?: InputMaybe<Replies_Likes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  articles?: InputMaybe<Articles_Bool_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_likes?: InputMaybe<Comments_Likes_Bool_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  follow_count?: InputMaybe<Int_Comparison_Exp>;
  follower_count?: InputMaybe<Int_Comparison_Exp>;
  follows?: InputMaybe<Follows_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  replies?: InputMaybe<Replies_Bool_Exp>;
  replies_likes?: InputMaybe<Replies_Likes_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  articles_aggregate?: InputMaybe<Articles_Aggregate_Order_By>;
  avatar?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  comments_likes_aggregate?: InputMaybe<Comments_Likes_Aggregate_Order_By>;
  details?: InputMaybe<Order_By>;
  follow_count?: InputMaybe<Order_By>;
  follower_count?: InputMaybe<Order_By>;
  follows_aggregate?: InputMaybe<Follows_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  replies_aggregate?: InputMaybe<Replies_Aggregate_Order_By>;
  replies_likes_aggregate?: InputMaybe<Replies_Likes_Aggregate_Order_By>;
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

/** columns and relationships of "profiles_summary" */
export type Profiles_Summary = {
  __typename?: 'profiles_summary';
  avatar?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  follower_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "profiles_summary". All fields are combined with a logical 'AND'. */
export type Profiles_Summary_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Summary_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Summary_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  follower_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "profiles_summary". */
export type Profiles_Summary_Order_By = {
  avatar?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  follower_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "profiles_summary" */
export enum Profiles_Summary_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Details = 'details',
  /** column name */
  FollowerCount = 'follower_count',
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  articles: Array<Articles>;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** An array relationship */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  comments: Array<Comments>;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  comments_likes: Array<Comments_Likes>;
  /** fetch data from the table: "comments_likes" using primary key columns */
  comments_likes_by_pk?: Maybe<Comments_Likes>;
  /** fetch data from the table: "firebase_articles" */
  firebase_articles: Array<Firebase_Articles>;
  /** An array relationship */
  follows: Array<Follows>;
  /** fetch data from the table: "follows" using primary key columns */
  follows_by_pk?: Maybe<Follows>;
  /** fetch data from the table: "hasura_articles" */
  hasura_articles: Array<Hasura_Articles>;
  /** An array relationship */
  likes: Array<Likes>;
  /** fetch data from the table: "likes_articles" */
  likes_articles: Array<Likes_Articles>;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "nextjs_articles" */
  nextjs_articles: Array<Nextjs_Articles>;
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
  /** fetch data from the table: "profiles_summary" */
  profiles_summary: Array<Profiles_Summary>;
  /** An array relationship */
  replies: Array<Replies>;
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>;
  /** An array relationship */
  replies_likes: Array<Replies_Likes>;
  /** fetch data from the table: "replies_likes" using primary key columns */
  replies_likes_by_pk?: Maybe<Replies_Likes>;
  /** fetch data from the table: "supabase_articles" */
  supabase_articles: Array<Supabase_Articles>;
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


export type Query_RootFirebase_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Firebase_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Firebase_Articles_Order_By>>;
  where?: InputMaybe<Firebase_Articles_Bool_Exp>;
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


export type Query_RootHasura_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Hasura_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hasura_Articles_Order_By>>;
  where?: InputMaybe<Hasura_Articles_Bool_Exp>;
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


export type Query_RootNextjs_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Nextjs_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nextjs_Articles_Order_By>>;
  where?: InputMaybe<Nextjs_Articles_Bool_Exp>;
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


export type Query_RootProfiles_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Summary_Order_By>>;
  where?: InputMaybe<Profiles_Summary_Bool_Exp>;
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


export type Query_RootSupabase_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Supabase_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supabase_Articles_Order_By>>;
  where?: InputMaybe<Supabase_Articles_Bool_Exp>;
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

/** order by aggregate values of table "replies" */
export type Replies_Aggregate_Order_By = {
  avg?: InputMaybe<Replies_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Replies_Max_Order_By>;
  min?: InputMaybe<Replies_Min_Order_By>;
  stddev?: InputMaybe<Replies_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Replies_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Replies_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Replies_Sum_Order_By>;
  var_pop?: InputMaybe<Replies_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Replies_Var_Samp_Order_By>;
  variance?: InputMaybe<Replies_Variance_Order_By>;
};

/** order by avg() on columns of table "replies" */
export type Replies_Avg_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
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

/** order by max() on columns of table "replies" */
export type Replies_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "replies" */
export type Replies_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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

/** order by stddev() on columns of table "replies" */
export type Replies_Stddev_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "replies" */
export type Replies_Stddev_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "replies" */
export type Replies_Stddev_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "replies" */
export type Replies_Sum_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "replies" */
export type Replies_Var_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "replies" */
export type Replies_Var_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "replies" */
export type Replies_Variance_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
};

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
  /** An array relationship */
  articles: Array<Articles>;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** An array relationship */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  comments: Array<Comments>;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  comments_likes: Array<Comments_Likes>;
  /** fetch data from the table: "comments_likes" using primary key columns */
  comments_likes_by_pk?: Maybe<Comments_Likes>;
  /** fetch data from the table: "firebase_articles" */
  firebase_articles: Array<Firebase_Articles>;
  /** An array relationship */
  follows: Array<Follows>;
  /** fetch data from the table: "follows" using primary key columns */
  follows_by_pk?: Maybe<Follows>;
  /** fetch data from the table: "hasura_articles" */
  hasura_articles: Array<Hasura_Articles>;
  /** An array relationship */
  likes: Array<Likes>;
  /** fetch data from the table: "likes_articles" */
  likes_articles: Array<Likes_Articles>;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "nextjs_articles" */
  nextjs_articles: Array<Nextjs_Articles>;
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
  /** fetch data from the table: "profiles_summary" */
  profiles_summary: Array<Profiles_Summary>;
  /** An array relationship */
  replies: Array<Replies>;
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>;
  /** An array relationship */
  replies_likes: Array<Replies_Likes>;
  /** fetch data from the table: "replies_likes" using primary key columns */
  replies_likes_by_pk?: Maybe<Replies_Likes>;
  /** fetch data from the table: "supabase_articles" */
  supabase_articles: Array<Supabase_Articles>;
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


export type Subscription_RootFirebase_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Firebase_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Firebase_Articles_Order_By>>;
  where?: InputMaybe<Firebase_Articles_Bool_Exp>;
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


export type Subscription_RootHasura_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Hasura_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hasura_Articles_Order_By>>;
  where?: InputMaybe<Hasura_Articles_Bool_Exp>;
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


export type Subscription_RootNextjs_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Nextjs_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nextjs_Articles_Order_By>>;
  where?: InputMaybe<Nextjs_Articles_Bool_Exp>;
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


export type Subscription_RootProfiles_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Summary_Order_By>>;
  where?: InputMaybe<Profiles_Summary_Bool_Exp>;
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


export type Subscription_RootSupabase_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Supabase_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supabase_Articles_Order_By>>;
  where?: InputMaybe<Supabase_Articles_Bool_Exp>;
};

/** columns and relationships of "supabase_articles" */
export type Supabase_Articles = {
  __typename?: 'supabase_articles';
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

/** Boolean expression to filter rows from the table "supabase_articles". All fields are combined with a logical 'AND'. */
export type Supabase_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Supabase_Articles_Bool_Exp>>;
  _not?: InputMaybe<Supabase_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Supabase_Articles_Bool_Exp>>;
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

/** Ordering options when selecting data from "supabase_articles". */
export type Supabase_Articles_Order_By = {
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

/** select columns of table "supabase_articles" */
export enum Supabase_Articles_Select_Column {
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

export type GetProfilesAvatarQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProfilesAvatarQuery = { __typename?: 'query_root', profiles_by_pk?: { __typename?: 'profiles', avatar?: string | null } | null };

export type GetPersonArticlesQueryVariables = Exact<{
  _eq: Scalars['String'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetPersonArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'person_articles', id?: string | null, title?: string | null, details?: string | null, image?: string | null, comment_count?: number | null, like_count?: number | null, categories?: any | null, created_at?: any | null, user_id?: string | null, username?: string | null, avatar?: string | null }> };

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

export type GetNextjsArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetNextjsArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'nextjs_articles', id?: string | null, title?: string | null, image?: string | null, details?: string | null, user_id?: string | null, like_count?: number | null, comment_count?: number | null, created_at?: any | null, categories?: any | null, avatar?: string | null, username?: string | null }> };

export type GetSupabaseArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetSupabaseArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'supabase_articles', avatar?: string | null, categories?: any | null, comment_count?: number | null, created_at?: any | null, details?: string | null, id?: string | null, image?: string | null, like_count?: number | null, title?: string | null, user_id?: string | null, username?: string | null }> };

export type GetHasuraArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetHasuraArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'hasura_articles', id?: string | null, title?: string | null, details?: string | null, image?: string | null, comment_count?: number | null, like_count?: number | null, created_at?: any | null, categories?: any | null, user_id?: string | null, username?: string | null, avatar?: string | null }> };

export type GetFirebaseArticlesQueryVariables = Exact<{
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetFirebaseArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'firebase_articles', avatar?: string | null, categories?: any | null, comment_count?: number | null, created_at?: any | null, details?: string | null, id?: string | null, image?: string | null, like_count?: number | null, title?: string | null, user_id?: string | null, username?: string | null }> };

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
  _ilike: Scalars['String'];
  _lt?: InputMaybe<Scalars['timestamp']>;
}>;


export type GetSearchArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'person_articles', id?: string | null, user_id?: string | null, title?: string | null, details?: string | null, username?: string | null, image?: string | null, comment_count?: number | null, like_count?: number | null, created_at?: any | null, categories?: any | null, avatar?: string | null }> };

export type GetNoSearchProfilesQueryVariables = Exact<{
  _and?: InputMaybe<Array<Profiles_Bool_Exp> | Profiles_Bool_Exp>;
}>;


export type GetNoSearchProfilesQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: string, username: string, avatar?: string | null, details?: string | null, follow_count: number, follower_count: number }> };

export type GetSearchProfilesQueryVariables = Exact<{
  _and?: InputMaybe<Array<Profiles_Bool_Exp> | Profiles_Bool_Exp>;
  _ilike: Scalars['String'];
}>;


export type GetSearchProfilesQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: string, username: string, avatar?: string | null, details?: string | null, follow_count: number, follower_count: number }> };

export type GetTrendQueryVariables = Exact<{
  _in: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetTrendQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'person_articles', id?: string | null, title?: string | null, details?: string | null, image?: string | null, comment_count?: number | null, like_count?: number | null, categories?: any | null, created_at?: any | null, user_id?: string | null, username?: string | null, avatar?: string | null }> };

export type GetSideTrendQueryVariables = Exact<{
  _in: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetSideTrendQuery = { __typename?: 'query_root', articles: Array<{ __typename?: 'articles', id: string, title: string, image?: string | null, profile: { __typename?: 'profiles', username: string } }> };

export type GetTrendUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrendUserQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: string, username: string, avatar?: string | null, details?: string | null, follower_count: number }> };


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
export const GetProfilesAvatarDocument = gql`
    query GetProfilesAvatar($id: String!) {
  profiles_by_pk(id: $id) {
    avatar
  }
}
    `;

/**
 * __useGetProfilesAvatarQuery__
 *
 * To run a query within a React component, call `useGetProfilesAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesAvatarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfilesAvatarQuery(baseOptions: Apollo.QueryHookOptions<GetProfilesAvatarQuery, GetProfilesAvatarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfilesAvatarQuery, GetProfilesAvatarQueryVariables>(GetProfilesAvatarDocument, options);
      }
export function useGetProfilesAvatarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfilesAvatarQuery, GetProfilesAvatarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfilesAvatarQuery, GetProfilesAvatarQueryVariables>(GetProfilesAvatarDocument, options);
        }
export type GetProfilesAvatarQueryHookResult = ReturnType<typeof useGetProfilesAvatarQuery>;
export type GetProfilesAvatarLazyQueryHookResult = ReturnType<typeof useGetProfilesAvatarLazyQuery>;
export type GetProfilesAvatarQueryResult = Apollo.QueryResult<GetProfilesAvatarQuery, GetProfilesAvatarQueryVariables>;
export const GetPersonArticlesDocument = gql`
    query GetPersonArticles($_eq: String!, $_lt: timestamp = "now()") {
  articles: person_articles(
    where: {user_id: {_eq: $_eq}, created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
    id
    title
    details
    image
    comment_count
    like_count
    categories
    created_at
    user_id
    username
    avatar
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
export const GetNextjsArticlesDocument = gql`
    query GetNextjsArticles($_lt: timestamp = "now()") {
  articles: nextjs_articles(
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
 * __useGetNextjsArticlesQuery__
 *
 * To run a query within a React component, call `useGetNextjsArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNextjsArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextjsArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetNextjsArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetNextjsArticlesQuery, GetNextjsArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNextjsArticlesQuery, GetNextjsArticlesQueryVariables>(GetNextjsArticlesDocument, options);
      }
export function useGetNextjsArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNextjsArticlesQuery, GetNextjsArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNextjsArticlesQuery, GetNextjsArticlesQueryVariables>(GetNextjsArticlesDocument, options);
        }
export type GetNextjsArticlesQueryHookResult = ReturnType<typeof useGetNextjsArticlesQuery>;
export type GetNextjsArticlesLazyQueryHookResult = ReturnType<typeof useGetNextjsArticlesLazyQuery>;
export type GetNextjsArticlesQueryResult = Apollo.QueryResult<GetNextjsArticlesQuery, GetNextjsArticlesQueryVariables>;
export const GetSupabaseArticlesDocument = gql`
    query GetSupabaseArticles($_lt: timestamp = "now()") {
  articles: supabase_articles(
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
 * __useGetSupabaseArticlesQuery__
 *
 * To run a query within a React component, call `useGetSupabaseArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupabaseArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupabaseArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetSupabaseArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetSupabaseArticlesQuery, GetSupabaseArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupabaseArticlesQuery, GetSupabaseArticlesQueryVariables>(GetSupabaseArticlesDocument, options);
      }
export function useGetSupabaseArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupabaseArticlesQuery, GetSupabaseArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupabaseArticlesQuery, GetSupabaseArticlesQueryVariables>(GetSupabaseArticlesDocument, options);
        }
export type GetSupabaseArticlesQueryHookResult = ReturnType<typeof useGetSupabaseArticlesQuery>;
export type GetSupabaseArticlesLazyQueryHookResult = ReturnType<typeof useGetSupabaseArticlesLazyQuery>;
export type GetSupabaseArticlesQueryResult = Apollo.QueryResult<GetSupabaseArticlesQuery, GetSupabaseArticlesQueryVariables>;
export const GetHasuraArticlesDocument = gql`
    query GetHasuraArticles($_lt: timestamp = "now()") {
  articles: hasura_articles(
    where: {created_at: {_lt: $_lt}}
    order_by: {created_at: desc}
    limit: 10
  ) {
    id
    title
    details
    image
    comment_count
    like_count
    created_at
    categories
    user_id
    username
    avatar
  }
}
    `;

/**
 * __useGetHasuraArticlesQuery__
 *
 * To run a query within a React component, call `useGetHasuraArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHasuraArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHasuraArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetHasuraArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetHasuraArticlesQuery, GetHasuraArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHasuraArticlesQuery, GetHasuraArticlesQueryVariables>(GetHasuraArticlesDocument, options);
      }
export function useGetHasuraArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHasuraArticlesQuery, GetHasuraArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHasuraArticlesQuery, GetHasuraArticlesQueryVariables>(GetHasuraArticlesDocument, options);
        }
export type GetHasuraArticlesQueryHookResult = ReturnType<typeof useGetHasuraArticlesQuery>;
export type GetHasuraArticlesLazyQueryHookResult = ReturnType<typeof useGetHasuraArticlesLazyQuery>;
export type GetHasuraArticlesQueryResult = Apollo.QueryResult<GetHasuraArticlesQuery, GetHasuraArticlesQueryVariables>;
export const GetFirebaseArticlesDocument = gql`
    query GetFirebaseArticles($_lt: timestamp = "now()") {
  articles: firebase_articles(
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
 * __useGetFirebaseArticlesQuery__
 *
 * To run a query within a React component, call `useGetFirebaseArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFirebaseArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFirebaseArticlesQuery({
 *   variables: {
 *      _lt: // value for '_lt'
 *   },
 * });
 */
export function useGetFirebaseArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetFirebaseArticlesQuery, GetFirebaseArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFirebaseArticlesQuery, GetFirebaseArticlesQueryVariables>(GetFirebaseArticlesDocument, options);
      }
export function useGetFirebaseArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFirebaseArticlesQuery, GetFirebaseArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFirebaseArticlesQuery, GetFirebaseArticlesQueryVariables>(GetFirebaseArticlesDocument, options);
        }
export type GetFirebaseArticlesQueryHookResult = ReturnType<typeof useGetFirebaseArticlesQuery>;
export type GetFirebaseArticlesLazyQueryHookResult = ReturnType<typeof useGetFirebaseArticlesLazyQuery>;
export type GetFirebaseArticlesQueryResult = Apollo.QueryResult<GetFirebaseArticlesQuery, GetFirebaseArticlesQueryVariables>;
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
    query GetSearchArticles($_ilike: String!, $_lt: timestamp = "now()") {
  articles: person_articles(
    where: {created_at: {_lt: $_lt}, _or: [{title: {_ilike: $_ilike}}, {details: {_ilike: $_ilike}}]}
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
    avatar
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
 *      _ilike: // value for '_ilike'
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
export const GetTrendDocument = gql`
    query GetTrend($_in: [String!]!) {
  articles: person_articles(where: {id: {_in: $_in}}, limit: 5) {
    id
    title
    details
    image
    comment_count
    like_count
    categories
    created_at
    user_id
    username
    avatar
  }
}
    `;

/**
 * __useGetTrendQuery__
 *
 * To run a query within a React component, call `useGetTrendQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendQuery({
 *   variables: {
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useGetTrendQuery(baseOptions: Apollo.QueryHookOptions<GetTrendQuery, GetTrendQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendQuery, GetTrendQueryVariables>(GetTrendDocument, options);
      }
export function useGetTrendLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendQuery, GetTrendQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendQuery, GetTrendQueryVariables>(GetTrendDocument, options);
        }
export type GetTrendQueryHookResult = ReturnType<typeof useGetTrendQuery>;
export type GetTrendLazyQueryHookResult = ReturnType<typeof useGetTrendLazyQuery>;
export type GetTrendQueryResult = Apollo.QueryResult<GetTrendQuery, GetTrendQueryVariables>;
export const GetSideTrendDocument = gql`
    query GetSideTrend($_in: [String!]!) {
  articles(where: {id: {_in: $_in}}, limit: 5) {
    id
    title
    image
    profile {
      username
    }
  }
}
    `;

/**
 * __useGetSideTrendQuery__
 *
 * To run a query within a React component, call `useGetSideTrendQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSideTrendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSideTrendQuery({
 *   variables: {
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useGetSideTrendQuery(baseOptions: Apollo.QueryHookOptions<GetSideTrendQuery, GetSideTrendQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSideTrendQuery, GetSideTrendQueryVariables>(GetSideTrendDocument, options);
      }
export function useGetSideTrendLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSideTrendQuery, GetSideTrendQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSideTrendQuery, GetSideTrendQueryVariables>(GetSideTrendDocument, options);
        }
export type GetSideTrendQueryHookResult = ReturnType<typeof useGetSideTrendQuery>;
export type GetSideTrendLazyQueryHookResult = ReturnType<typeof useGetSideTrendLazyQuery>;
export type GetSideTrendQueryResult = Apollo.QueryResult<GetSideTrendQuery, GetSideTrendQueryVariables>;
export const GetTrendUserDocument = gql`
    query GetTrendUser {
  profiles(limit: 5, order_by: {follower_count: desc}) {
    id
    username
    avatar
    details
    follower_count
  }
}
    `;

/**
 * __useGetTrendUserQuery__
 *
 * To run a query within a React component, call `useGetTrendUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrendUserQuery(baseOptions?: Apollo.QueryHookOptions<GetTrendUserQuery, GetTrendUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendUserQuery, GetTrendUserQueryVariables>(GetTrendUserDocument, options);
      }
export function useGetTrendUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendUserQuery, GetTrendUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendUserQuery, GetTrendUserQueryVariables>(GetTrendUserDocument, options);
        }
export type GetTrendUserQueryHookResult = ReturnType<typeof useGetTrendUserQuery>;
export type GetTrendUserLazyQueryHookResult = ReturnType<typeof useGetTrendUserLazyQuery>;
export type GetTrendUserQueryResult = Apollo.QueryResult<GetTrendUserQuery, GetTrendUserQueryVariables>;