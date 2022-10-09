import axios from "./axios";
import {ArticleType, Article} from "../types/article";

const getArticles = () => axios.get('articles')

const getItem = (slug: string) => axios.get(`articles/${slug}`)

const sendComment = (slug: string) => axios.post(`articles/${slug}/comments`, {})

const getComments = (slug: string) => axios.get(`articles/${slug}/comments`)

const favArticle = (slug: string) => axios.post(`articles/${slug}/favorite`)

const unfavArticle = (slug: string) => axios.delete(`articles/${slug}/favorite`)

const createArticle = (data: Article) => axios.post('articles', data)

export default {
  getArticles,
  getItem,
  getComments,
  favArticle,
  unfavArticle,
  createArticle
}