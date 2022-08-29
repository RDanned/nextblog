import axios from "axios";
import {host} from "../../config/host"
import {getItem} from "../helpers/psStorage";

const axiosInstance = axios.create({
  baseURL: host
})

axiosInstance.interceptors.request.use((request) => {
  if(getItem("token")){
    request.headers["Authorization"] = `Token ${getItem("token")}`;
  }

  return request;
})

export default axiosInstance