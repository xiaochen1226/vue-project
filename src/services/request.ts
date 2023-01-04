import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IResponseError } from './type'
import { Notify } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000,
  withCredentials: true
})
// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code !== 1 || res.code !== 200) {
      return response.data
    } else {
      return response.data
    }
  },
  (error: AxiosError<IResponseError>) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          return Promise.reject(error)
        default:
          Notify(error.response.data.msg)
          return Promise.reject(error)
      }
    }
  }
)

export default service
