import axios from "./axios";
import {ArticleType, Article} from "../types/article";

export interface ArticlesQuery {
  tag?: string,
  favorited?: string,
}

const getArticles = (query: ArticlesQuery) => axios.get('articles', {params: query})

const getArticle = (slug: string) => axios.get(`articles/${slug}`)

const deleteArticle = (slug: string) => axios.delete(`articles/${slug}`)

const updateArticle = (data: Article) => axios.put(`articles/${data.article.slug}`, data)

const sendComment = (slug: string) => axios.post(`articles/${slug}/comments`, {})

const getComments = (slug: string) => axios.get(`articles/${slug}/comments`)

const favArticle = (slug: string) => axios.post(`articles/${slug}/favorite`)

const unfavArticle = (slug: string) => axios.delete(`articles/${slug}/favorite`)

const createArticle = (data: Article) => axios.post('articles', data)

const getTags = () => axios.get('tags')


const articleApi = {
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  getComments,
  favArticle,
  unfavArticle,
  createArticle,
  getTags
}

export default articleApi