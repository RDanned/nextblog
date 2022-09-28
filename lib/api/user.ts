import axios from './axios'
import {UserType} from "../types/user";

export interface LoginCredentials {
  email: string,
  password: string
}

const login = (credentials: LoginCredentials) => axios.post("users/login", {user: credentials})

export interface RegisterCredentials {
  email: string,
  password: string,
  username: string
}

const register = (credentials: RegisterCredentials) => axios.post("users/", {user: credentials})

const getUser = () => axios.get("user")

export interface UpdateUserData {
  user: UserType
}

const updateUser = (data: UpdateUserData) => axios.put("user", data)

export default {
  login,
  register,
  getUser,
  updateUser
}