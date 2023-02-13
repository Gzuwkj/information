import request from '@/utils/request'

export function getNerModelsList(params) {
  return request({
    url: '/query_dataset',
    method: 'get',
    params: params
  })
}
export function getSentence(params) {
  return request({
    url: '/config',
    method: 'get',
    params: params
  })
}
// export function getSentence(params) {
//   return request({
//     url: '/query_dataset',
//     method: 'get',
//     get: params
//     //# post--data  get--params
//   })
// }

