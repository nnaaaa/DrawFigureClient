import { AxiosClient } from "./axios"

export const createFigure = async (figureDto) => {
  const res = await AxiosClient.post("/users/figures", figureDto)
  return res.data
}

export const editFigure = async (figureDto) => {
  const res = await AxiosClient.patch(
    `/users/figures/${figureDto.id}`,
    figureDto
  )
  return res.data
}

export const getFigures = async () => {
  const res = await AxiosClient.get("/users/figures")
  return res.data
}
