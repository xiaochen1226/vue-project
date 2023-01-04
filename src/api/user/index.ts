import request from '@/services/request'
import { IUserLoginReq, IUserLoginRes, IUserRegister } from './type'
import { IResponseData } from '../type'

export const userLogin = (data: IUserLoginReq): Promise<IUserLoginRes> => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export const userRegister = (data: IUserRegister): Promise<IResponseData> => {
  return request({
    url: '/user/register',
    method: 'POST',
    data
  })
}

export const userUploadAvatar = (data: FormData): Promise<IResponseData> => {
  return request({
    url: '/user/avatar',
    method: 'POST',
    data
  })
}

export const userAuthTest = (): Promise<IResponseData> => {
  return request({
    url: '/user/test',
    method: 'GET'
  })
}
