import request from '@/utils/request'

// 获取业绩详情
export function findPerformance(data) {
    return request({
        url: '/system/test/getYeji',
        method: 'post',
        data
    })
}

// 业绩考核
export function performanceAssess(data) {
    return request({
        url: '/system/test/updataYeji',
        method: 'post',
        data
    })
}