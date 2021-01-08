import request from '@/utils/request'

// 获取终审列表
export function getFinalTrialList() {
  return request({
    url: '/stage/list',
    method: 'get',
  })
}

// 终审处理结果
export function finalTrialHandle(data) {
  return request({
    url: '/stage/add/opinion',
    method: 'post',
    data
  })
}

// 终审结果回显
export function getFinalTrialHandle(transactionCode) {
  return request({
    url: '/stage/find/opinion/?transactionCode=' + transactionCode,
    method: 'get',
  })
}
