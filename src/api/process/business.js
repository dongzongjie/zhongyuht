import request from '@/utils/request'

// 查询秒批未审批列表
export function listBusinessUnreviewed(query) {
    return request({
        url: '/system/business/list',
        method: 'get',
        params: query
    })
}

// 查询秒批已通过列表
export function listBusinessPass(query) {
    return request({
        url: '/system/business/tongguolist',
        method: 'get',
        params: query
    })
}

// 查询秒批未通过列表
export function listBusinessNotPass(query) {
    return request({
        url: '/system/business/jujuelist',
        method: 'get',
        params: query
    })
}

// 查询秒批详细
export function getBusiness(transactionCode) {
    return request({
        url: '/stage/find?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 新增秒批
export function addBusiness(data) {
    return request({
        url: '/system/business',
        method: 'post',
        data: data
    })
}

// 修改秒批
export function updateBusiness(data) {
    return request({
        url: '/system/business',
        method: 'put',
        data: data
    })
}

// 删除秒批
export function delBusiness(id) {
    return request({
        url: '/system/business/' + id,
        method: 'delete'
    })
}

// 导出秒批
export function exportBusiness(query) {
    return request({
        url: '/system/business/export',
        method: 'get',
        params: query
    })
}

// 获取征信结果
export function getSelectState(transactionCode) {
    return request({
        url: '/system/test/selectState?codes=' + transactionCode,
        method: 'get',
    })
}

// 获取详版征信
export function findDetailsCredit(transactionCode) {
    return request({
        url: '/stage/find/details?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 增加详版征信
export function addDetailsCredit(data) {
    return request({
        url: '/stage/add/details',
        method: 'post',
        data: data
    })
}

// 解锁删除当前操作人
export function deleteOperator(id) {
    return request({
        url: '/system/business/edit?id=' + id,
        method: 'get',
    })
}