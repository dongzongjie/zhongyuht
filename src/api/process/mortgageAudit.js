import request from '@/utils/request'

// 抵押审核列表
export function mortgageList() {
    return request({
        url: '/stage/diya/list',
        method: 'get',
    })
}

// 抵押审核数据
export function findMortgage(transactionCode) {
    return request({
        url: '/examine/find/diya?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 抵押审核审批
export function mortgageAudit(data) {
    return request({
        url: '/stage/add/diya/opinion',
        method: 'post',
        data
    })
}

// 抵押审核回显
export function findMortgageAudit(transactionCode) {
    return request({
        url: '/stage/find/diya/opinion?transactionCode=' + transactionCode,
        method: 'get',
    })
}