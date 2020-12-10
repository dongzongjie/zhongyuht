import request from '@/utils/request'

// 查询秒批列表
export function listBusiness(query) {
    return request({
        url: '/system/business/list',
        method: 'get',
        params: query
    })
}

// 查询秒批详细
export function getBusiness(id) {
    return request({
        url: '/system/business/' + id,
        method: 'get'
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