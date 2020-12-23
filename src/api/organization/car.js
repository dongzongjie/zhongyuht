import request from '@/utils/request'

// 查询车商信息列表
export function listCar(query) {
    return request({
        url: '/system/car/list',
        method: 'get',
        params: query
    })
}

// 查询车商信息详细
export function getCar(id) {
    return request({
        url: '/system/car/' + id,
        method: 'get'
    })
}

// 新增车商信息
export function addCar(data) {
    return request({
        url: '/system/car',
        method: 'post',
        data: data
    })
}

// 修改车商信息
export function updateCar(data) {
    return request({
        url: '/system/car',
        method: 'put',
        data: data
    })
}

// 删除车商信息
export function delCar(id) {
    return request({
        url: '/system/car/' + id,
        method: 'delete'
    })
}

// 导出车商信息
export function exportCar(query) {
    return request({
        url: '/system/car/export',
        method: 'get',
        params: query
    })
}

// 删除图片
export function deleteImg(filePath) {
    return request({
        url: '/system/test/delete?path=' + filePath,
        method: 'get',
    })
}