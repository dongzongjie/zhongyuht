import request from '@/utils/request'

// 获取GPS信息
export function getGPSdata(transactionCode) {
    return request({
        url: '/system/gps/' + transactionCode,
        method: 'get',
    })
}

// 获取保险信息
export function getInsuranceData(transactionCode) {
    return request({
        url: '/system/insurance/get/' + transactionCode,
        method: 'get',
    })
}