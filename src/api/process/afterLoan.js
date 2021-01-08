import request from '@/utils/request'

// 获取贷后列表
export function getAfterLoanList() {
  return request({
    url: '/system/daihou/list',
    method: 'get',
  })
}

// 获取贷后详情
export function getAfterLoanDetails(id) {
  return request({
    url: '/system/daihou/' + id,
    method: 'get',
  })
}
