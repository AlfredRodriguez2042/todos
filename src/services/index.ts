import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'
export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    return request
  })
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
}
export const getTodosService = async (): Promise<AxiosResponse> => {
  return await axios.get(url)
}
