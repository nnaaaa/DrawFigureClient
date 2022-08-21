import { AxiosClient } from "./axios"
import Cookie from "js-cookie"
import { AuthRoute } from "../utils/route"

export const login = async (userDto) => {
  const res = await AxiosClient.post(AuthRoute.login, userDto)
  if (res.headers) {
    if (res.headers.accesstoken) {
      Cookie.set("accesstoken", res.headers.accesstoken)
    }
    // if (response.headers.refreshtoken) {
    //     Cookie.set('refreshtoken', response.headers.refreshtoken)
    // }
  }
  return res.data
}

export const register = async (userDto) => {
  const res = await AxiosClient.post(AuthRoute.register, userDto)
  if (res.headers) {
    if (res.headers.accesstoken) {
      Cookie.set("accesstoken", res.headers.accesstoken)
    }
    // if (response.headers.refreshtoken) {
    //     Cookie.set('refreshtoken', response.headers.refreshtoken)
    // }
  }
  return res.data
}

export const getProfile = async () => {
  const res = await AxiosClient.get(AuthRoute.getProfile)
  return res.data
}
