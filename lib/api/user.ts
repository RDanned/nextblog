import axios from './axios'

interface LoginCredentials {
  email: string,
  password: string
}

const login = (credentials: LoginCredentials) => axios.post("users/login", {user: credentials})

interface RegisterCredentials {
  email: string,
  password: string,
  username: string
}

const register = (credentials: RegisterCredentials) => axios.post("users/", {user: credentials})

const getUser = () => axios.get("user")

export default {
  login,
  register,
  getUser
}