import request from '@/services/request'
import { IProductReq, IProductRes } from './type'
import { IResponseData } from '../type'

export const prodcutList = (params: IProductReq): Promise<IProductRes> => {
  return request({
    url: '/product',
    method: 'GET',
    params
  })
}

export const productInfo = (params: string): Promise<IProductRes> => {
  return request({
    url: `/product/${params}`,
    method: 'GET'
  })
}

export const productToMark = (productId: string): Promise<IResponseData> => {
  return request({
    url: `/product/${productId}/mark`,
    method: 'POST'
  })
}
