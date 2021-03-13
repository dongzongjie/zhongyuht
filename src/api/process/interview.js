import request from '@/utils/request'

// 查询面签列表
export function listInterview(query) {
    return request({
        url: '/system/business/jujuelist',
        method: 'get',
        params: query
    })
}

// 面签详情
export function findInterviewData(transactionCode) {
    return request({
        url: '/system/test/mianqian?transactionCode=' + transactionCode,
        method: 'get',
    })
}