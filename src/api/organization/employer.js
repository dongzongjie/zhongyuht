import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listEmployer(query) {
  return request({
    url: '/system/employer/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getEmployer(id) {
  return request({
    url: '/system/employer/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addEmployer(data) {
  return request({
    url: '/system/employer',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateEmployer(data) {
  return request({
    url: '/system/employer',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delEmployer(id) {
  return request({
    url: '/system/employer/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportEmployer(query) {
  return request({
    url: '/system/employer/export',
    method: 'get',
    params: query
  })
}