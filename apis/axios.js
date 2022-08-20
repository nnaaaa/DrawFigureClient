import axios from "axios"
import Cookie from "js-cookie"
import queryString from "query-string"

export const normalCondition = {
  headers: {
    "content-type": "application/json",
  },
}
const AxiosClient = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
})
AxiosClient.interceptors.request.use(async (config) => {
  if (config && config.headers) {
    const accessToken = Cookie.get("accesstoken")
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }
  }
  return config
})

export { AxiosClient }
