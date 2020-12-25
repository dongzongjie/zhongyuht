import request from '@/utils/request'

// 查询保险列表
export function listInsuranceType(query) {
  return request({
    url: '/system/insuranceType/list',
    method: 'get',
    params: query
  })
}

// 查询保险详细
export function getInsuranceType(id) {
  return request({
    url: '/system/insuranceType/' + id,
    method: 'get'
  })
}

// 新增保险
export function addInsuranceType(data) {
  return request({
    url: '/system/insuranceType',
    method: 'post',
    data: data
  })
}

// 修改保险
export function updateInsuranceType(data) {
  return request({
    url: '/system/insuranceType',
    method: 'put',
    data: data
  })
}

// 删除保险
export function delInsuranceType(id) {
  return request({
    url: '/system/insuranceType/' + id,
    method: 'delete'
  })
}

// 导出保险
export function exportInsuranceType(query) {
  return request({
    url: '/system/insuranceType/export',
    method: 'get',
    params: query
  })
}