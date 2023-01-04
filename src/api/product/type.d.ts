import { IResponseData } from '../type'

export interface IProductReq {
  offset: number
  limit: number
  name?: string
}

export interface IProductList {
  brand_id: number
  cate_id: number
  content: string
  createAt: string
  id: number
  merchant_id: number
  name: string
  original: number
  photo_url: string
  price: number
  summary: string
  tag: string
  updateAt: string
  photoUrl?: string[]
}

export interface IProductRes extends IResponseData {
  data: IProductList[]
  total?: number
}
