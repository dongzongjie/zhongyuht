import request from '@/utils/request'

// 获取合同数据
export function getContract(params) {
    return request({
        url: '/stage/hetong',
        method: 'get',
        params
    })
}