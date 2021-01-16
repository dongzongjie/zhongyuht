import request from '@/utils/request'

// 获取贷前列表
export function getBeforLoanList() {
    return request({
        url: '/system/basics/lists',
        method: 'get',
    })
}

// 获取贷前详细信息
export function getBeforLoanDetails(transactionCode) {
    return request({
        url: '/system/basics/get/' + transactionCode,
        method: 'get',
    })
}

// 贷前处理结果
export function beforLoanHandle(data) {
    return request({
        url: '/system/accout/no',
        method: 'post',
        data
    })
}

// 贷前结果回显
export function findBeforLoanHandle(transactionCode) {
    return request({
        url: '/system/accout/yes/' + transactionCode,
        method: 'get',
    })
}

// 贷前当前处理人+解锁
export function beforLoanHandlePeople(data) {
    return request({
        url: '/system/basics/get/user',
        method: 'post',
        data
    })
}