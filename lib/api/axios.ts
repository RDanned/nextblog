import axios from "axios";
import {host} from "../../config/host"

const axiosInstance = axios.create({
  baseURL: host
})

export default axiosInstance