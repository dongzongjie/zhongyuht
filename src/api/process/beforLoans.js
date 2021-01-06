import request from '@/utils/request'

// 获取贷前列表
export function getBeforLoansList() {
    return request({
        url: '/system/basics/lists',
        method: 'get',
    })
}

// 获取贷前详细信息
export function getBeforLoansDetails(id) {
    return request({
        url: '/system/basics/get/' + id,
        method: 'get',
    })
}

// 贷前处理结果
export function beforLoansHandle(data) {
    return request({
        url: '/system/accout/no',
        method: 'post',
        data
    })
}

// 贷前结果回显
export function findBeforLoansHandle(transactionCode) {
    return request({
        url: '/system/accout/yes/' + transactionCode,
        method: 'get',
    })
}