// 提供商品相关的api函数

import request from '@/utils/request'

/**
 * 获取商品详情
 * @param {String} id - 商品id
 */
export const findGoods = (id) => {
  return request('/goods', 'get', { id })
}
/***
 * @param {String} id - 商品ID
 * @param {Number} limit -获取条数
 */
export const findRelGoods = (id, limit = 16) => {
  return request('/goods/relevant', 'get', { id: limit })
}
/***
 * @param {Number} type
 * @param {Number} limit
 *
 */
export const findHotGoods = ({ id, type = 1, limit = 3 }) => {
  return request('/goods/hot', 'get', { id, type, limit })
}

/****
 * @param {String} id - 商品id
 */
export const findCommentInfoByGoods = (id) => {
  // return request(`/goods/${id}/evaluate`, 'get')
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get')
}
// https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate
export const findCommentList = (id) => {
  // return request(`/goods/${id}/evaluate`, 'get')
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page`, 'get')
}
