import request from '@/utils/request'

// getByToken
export function getByToken() {
    return request({
        url: '/system/test/getByToken',
        method: 'get',
    })
}

// 获取百融详细信息
export function getByMelting(transactionCode) {
    return request({
        url: '/system/test/getByMelting?id=' + transactionCode,
        method: 'get',
    })
}

// 添加当前操作人
export function addFalseOperator(params) {
    return request({
        url: '/system/business/edit2',
        method: 'get',
        params
    })
}