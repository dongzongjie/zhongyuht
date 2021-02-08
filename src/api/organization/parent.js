import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listParent(query) {
  return request({
    url: '/system/parent/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getParent(id) {
  return request({
    url: '/system/parent/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addParent(data) {
  return request({
    url: '/system/parent',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateParent(data) {
  return request({
    url: '/system/parent',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delParent(id) {
  return request({
    url: '/system/parent/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportParent(query) {
  return request({
    url: '/system/parent/export',
    method: 'get',
    params: query
  })
}