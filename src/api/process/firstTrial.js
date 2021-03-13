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
export function getByMelting(data) {
    return request({
        url: '/system/test/getByMelting',
        method: 'post',
        data
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

// 初审重新审批
export function firstAgainHandle(data) {
    return request({
        url: '/stage/delete/allow/opinion?id=' + data,
        method: 'post',
    })
}

// 查询精真估
export function findJingZhenGu(data) {
    return request({
        url: '/system/jzg/addOrder/ceshi',
        method: 'post',
        data
    })
}

// 获取精真估结果
export function getJingZhenGuData(transactionCode) {
    return request({
        url: '/system/jzg/addOrder/select?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 获取历史审批意见
export function getHistoryOpinion(transactionCode) {
    return request({
        url: '/system/opinion/advise?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 获取省市
export function getOrder(params) {
    return request({
        url: '/system/jzg/addOrder/get',
        method: 'get',
        params
    })
}

// 获取授信图片
export function findPhoto(transactionCode, userId) {
    return request({
        url: '/examine/find/photo?transactionCode=' + transactionCode + '&userId=' + userId,
        method: 'get',
    })
}