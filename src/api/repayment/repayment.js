import request from '@/utils/request'

// 获取还款明细列表
export function findRepaymentList() {
    return request({
        url: '/system/test/getHuankuan',
        method: 'get',
    })
}

// 获取还款明细详情
export function findRepayment(transactionCode) {
    return request({
        url: '/system/test/getInfo?transactionCode=' + transactionCode,
        method: 'get',
    })
}