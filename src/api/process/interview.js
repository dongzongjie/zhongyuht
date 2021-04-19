import request from '@/utils/request'

// 查询面签列表
export function listInterview(query) {
    return request({
        url: '/system/business/mianqianlist',
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

// \下载面签列表
export function listDownloadInterview() {
    return request({
        url: '/system/basics/nomainqian',
        method: 'get',
    })
}