import request from '@/utils/request'

// 获取初审列表
export function getFirstTrialList(params) {
    return request({
        url: '/stage/allow',
        method: 'get',
        params
    })
}

// 初审列表立即处理+解锁
export function firstTrialHandle(data) {
    return request({
        url: '/system/loan/allow',
        method: 'post',
        data
    })
}

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

// 获取初审详情
export function getFirstDetails(userId, transactionCode) {
    return request({
        url: '/stage/' + userId + '/' + transactionCode,
        method: 'get',
    })
}

// 初审处理结果
export function firstHandle(data) {
    return request({
        url: '/system/opinion',
        method: 'post',
        data: data
    })
}

// 初审结果回显
export function getFirstHandle(transactionCode) {
    return request({
        url: '/system/opinion/' + transactionCode,
        method: 'get',
    })
}

// 查询精真估
export function findJingZhenGu(transactionCode) {
    return request({
        url: '/system/jzg/addOrder/ceshi?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 获取精真估结果
export function getJingZhenGuData(transactionCode) {
    return request({
        url: '/system/jzg/addOrder/select?transactionCode=' + transactionCode,
        method: 'get',
    })
}