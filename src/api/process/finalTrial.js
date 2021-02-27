import request from '@/utils/request'

// 获取终审列表
export function getFinalTrialList() {
    return request({
        url: '/stage/list',
        method: 'get',
    })
}

// 终审列表立即处理+解锁
export function finalTrialHandle(data) {
    return request({
        url: '/system/loan/repeat',
        method: 'post',
        data
    })
}

// 终审处理结果
export function finalHandle(data) {
    return request({
        url: '/stage/add/opinion',
        method: 'post',
        data
    })
}

// 终审结果回显
export function getFinalTrialHandle(transactionCode) {
    return request({
        url: '/stage/find/opinion/?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 添加补充信息
export function addSupplement(data) {
    return request({
        url: '/stage/add/supplement',
        method: 'post',
        data
    })
}