import axios from "./axios";
import {ArticleType, Article} from "../types/article";

export interface ArticlesQuery {
  tag?: string
}

const getArticles = (query: ArticlesQuery) => axios.get('articles', {params: query})

const getItem = (slug: string) => axios.get(`articles/${slug}`)

const updateItem = (data: Article) => axios.put(`articles/${data.article.slug}`, data)

const sendComment = (slug: string) => axios.post(`articles/${slug}/comments`, {})

const getComments = (slug: string) => axios.get(`articles/${slug}/comments`)

const favArticle = (slug: string) => axios.post(`articles/${slug}/favorite`)

const unfavArticle = (slug: string) => axios.delete(`articles/${slug}/favorite`)

const createArticle = (data: Article) => axios.post('articles', data)

const getTags = () => axios.get('tags')

export default {
  getArticles,
  getItem,
  updateItem,
  getComments,
  favArticle,
  unfavArticle,
  createArticle,
  getTags
}