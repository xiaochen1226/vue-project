import { IResponseData } from '../type'

interface IUser {
  id: number
  name: string
  nickname: string
  token: string
  avatar_url: string
}

export interface IUserLoginRes extends IResponseData {
  data: IUser
}

export interface IUserLoginReq {
  name: string
  password: string
}

export interface IUserRegister extends IUserLoginReq {
  nickname: string
}
