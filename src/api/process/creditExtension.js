import request from '@/utils/request'

// 获取授信列表
export function getCreditExtensionList(params) {
    return request({
        url: '/stage/grant',
        method: 'get',
        params
    })
}

// 授信列表立即处理+解锁
export function creditExtensionHandle(data) {
    return request({
        url: '/system/loan/grant',
        method: 'post',
        data
    })
}

// 获取授信详情
export function creditExtensionDetails(transactionCode) {
    return request({
        url: '/stage/now/grant?transactionCode=' + transactionCode,
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

// 授信操作重新处理
export function creditAgainHandle(id) {
    return request({
        url: '/stage/delete/grant/opinion?id=' + id,
        method: 'post',
    })
}