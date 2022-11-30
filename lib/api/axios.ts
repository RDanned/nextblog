import axios from "axios";
import {host} from "../../config/host"
import {getItem, clearStorage} from "../helpers/psStorage";
import Router from 'next/router'

export type DefaultResponse = {
  data: {
    errors?: {
      [key: string]: string[]
    }
  }
}

const axiosInstance = axios.create({
  baseURL: host
})

axiosInstance.interceptors.request.use(
  (request) => {
    if(getItem("token")){
      request.headers["Authorization"] = `Token ${getItem("token")}`;
    }

    return request;
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  (error) => {
    if (401 === error.response.status && Router.route != '/user/login' && !error.request.url.endsWith('user')) {
      Router.push('/user/login')
      clearStorage()
    }

    throw error
  }
)


export default axiosInstance