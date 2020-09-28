import axios, { AxiosRequestConfig } from 'axios'

export const rootBackendUrl = process.env.REACT_APP_ROOT_BACKEND_URL

const axiosInstance = axios.create({
  baseURL: `${rootBackendUrl}`,
})

class Http {
  public static get<T>(url: string, params?: Record<string, any>): Promise<ResponseDto<T>> {
    return axiosInstance.get(url, {
      params,
    })
  }

  public static post<T>(
    url: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<ResponseDto<T>> {
    return axiosInstance.post(url, body, config)
  }

  public static put<T>(url: string, body?: any): Promise<ResponseDto<T>> {
    return axiosInstance.put(url, body)
  }

  public static patch<T>(url: string, body?: any): Promise<ResponseDto<T>> {
    return axiosInstance.patch(url, body)
  }

  public static delete<T>(url: string): Promise<ResponseDto<T>> {
    return axiosInstance.delete(url)
  }
}

export type ResponseDto<T> = {
  /* описать ResponseDto */
}

export default Http
