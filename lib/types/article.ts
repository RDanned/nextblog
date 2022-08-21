export interface ArticleList {
  articles: ArticleType[]
}

export interface Article {
  article: ArticleType
}

export type ArticleType = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: number;
  updatedAt: number;
  favorited: boolean;
  favoritesCount: number;
  author: AuthorType
}

export type AuthorType = {
  username: string,
  bio: string,
  image: string,
  following: boolean
}

export type CommentType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: AuthorType
}

export interface Comments {
  comments: CommentType[]
}