import request from '@/utils/request'

// 查询bank列表
export function listBank(query) {
    return request({
        url: '/system/bank/list',
        method: 'get',
        params: query
    })
}

// 查询bank详细
export function getBank(id) {
    return request({
        url: '/system/bank/' + id,
        method: 'get'
    })
}

// 新增bank
export function addBank(data) {
    return request({
        url: '/system/bank',
        method: 'post',
        data: data
    })
}

// 修改bank
export function updateBank(data) {
    return request({
        url: '/system/bank',
        method: 'put',
        data: data
    })
}

// 删除bank
export function delBank(id) {
    return request({
        url: '/system/bank/' + id,
        method: 'delete'
    })
}

// 导出bank
export function exportBank(query) {
    return request({
        url: '/system/bank/export',
        method: 'get',
        params: query
    })
}