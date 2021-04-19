import request from '@/utils/request'

// 获取财务列表
export function getFinanceList(params) {
    return request({
        url: '/system/caiwu/list',
        method: 'get',
        params
    })
}

// 获取财务详情
export function getFinance(transactionCode) {
    return request({
        url: '/system/caiwu/' + transactionCode,
        method: 'get',
    })
}

// 财务垫款信息保存
export function postFinance(data) {
    return request({
        url: '/system/caiwu',
        method: 'post',
        data
    })
}

// 获取打款账户
export function getAccount(params) {
    return request({
        url: '/system/caiwu/lists',
        method: 'get',
        params
    })
}

// 新增打款账户
export function addAccount(data) {
    return request({
        url: 'system/caiwu/insert',
        method: 'post',
        data
    })
}

// 删除打款账户
export function deleteAccount(params) {
    return request({
        url: 'system/caiwu/delete',
        method: 'get',
        params
    })
}

// 修改打款账户
export function editAccount(params) {
    return request({
        url: 'system/caiwu/tingyong',
        method: 'get',
        params
    })
}

// 删除图片
export function deletePic(params) {
    return request({
        url: 'system/caiwu/deletePic',
        method: 'get',
        params
    })
}