import { UserFigureRoute } from "../utils/route"
import { AxiosClient } from "./axios"

export const createFigure = async (figureDto) => {
  const res = await AxiosClient.post(UserFigureRoute.create, figureDto)
  return res.data
}

export const editFigure = async (figureDto) => {
  const res = await AxiosClient.patch(
    `${UserFigureRoute.update}/${figureDto.id}`,
    figureDto
  )
  return res.data
}

export const getFigures = async () => {
  const res = await AxiosClient.get(UserFigureRoute.getAll)
  return res.data
}
