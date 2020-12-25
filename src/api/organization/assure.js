import request from '@/utils/request'

// 查询assure列表
export function listAssure(query) {
  return request({
    url: '/system/assure/list',
    method: 'get',
    params: query
  })
}

// 查询assure详细
export function getAssure(id) {
  return request({
    url: '/system/assure/' + id,
    method: 'get'
  })
}

// 新增assure
export function addAssure(data) {
  return request({
    url: '/system/assure',
    method: 'post',
    data: data
  })
}

// 修改assure
export function updateAssure(data) {
  return request({
    url: '/system/assure',
    method: 'put',
    data: data
  })
}

// 删除assure
export function delAssure(id) {
  return request({
    url: '/system/assure/' + id,
    method: 'delete'
  })
}

// 导出assure
export function exportAssure(query) {
  return request({
    url: '/system/assure/export',
    method: 'get',
    params: query
  })
}