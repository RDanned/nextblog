import axios from "./axios";

const getList = () => axios.get('articles')

const getItem = (slug) => axios.get(`articles/${slug}`)

const sendComment = (slug) => axios.post(`articles/${slug}/comments`, {})

const getComments = (slug) => axios.get(`articles/${slug}/comments`)

export default {
  getList,
  getItem,
  getComments
}