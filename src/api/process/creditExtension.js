import request from '@/utils/request'

// 获取授信列表
export function getCreditExtensionList() {
    return request({
        url: '/stage/grant',
        method: 'get',
    })
}

// 获取授信详情
export function creditExtensionDetails(transactionCode) {
    return request({
        url: '/stage/grant/basic?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 授信操作处理
export function creditHandle(data) {
    return request({
        url: '/stage/grant/add',
        method: 'post',
        data
    })
}

// 授信操作处理回显
export function getCreditHandle(transactionCode) {
    return request({
        url: '/stage/grant/find?transactionCode=' + transactionCode,
        method: 'get',
    })
}