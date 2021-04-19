import request from '@/utils/request'

// 查询我的客户列表
export function listMyCustomer(query) {
    return request({
        url: '/stage/my/customer',
        method: 'get',
        params: query
    })
}