import request from '@/utils/request'

// 查询overdue列表
export function listOverdue(query) {
  return request({
    url: '/system/overdue/list',
    method: 'get',
    params: query
  })
}

// 查询overdue详细
export function getOverdue(id) {
  return request({
    url: '/system/overdue/' + id,
    method: 'get'
  })
}

// 新增overdue
export function addOverdue(data) {
  return request({
    url: '/system/overdue',
    method: 'post',
    data: data
  })
}

// 修改overdue
export function updateOverdue(data) {
  return request({
    url: '/system/overdue',
    method: 'put',
    data: data
  })
}

// 删除overdue
export function delOverdue(id) {
  return request({
    url: '/system/overdue/' + id,
    method: 'delete'
  })
}

// 导出overdue
export function exportOverdue(query) {
  return request({
    url: '/system/overdue/export',
    method: 'get',
    params: query
  })
}