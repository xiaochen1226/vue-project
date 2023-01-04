import request from '@/services/request'
import { IResponseData } from '../type'

export const cartList = (): Promise<IResponseData> => {
  return request({
    url: '/cart',
    method: 'GET'
  })
}

export const addToCart = (productId: number): Promise<IResponseData> => {
  return request({
    url: `/cart/${productId}`,
    method: 'POST'
  })
}

export const updateCartItem = (
  id: number,
  data: any
): Promise<IResponseData> => {
  return request({
    url: `/cart/${id}`,
    method: 'PATCH',
    data
  })
}
