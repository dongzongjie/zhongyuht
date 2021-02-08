import request from '@/utils/request'

// 获取合同数据
export function getContract(transactionCode) {
    return request({
        url: '/system/test/hetong?transactionCode=' + transactionCode,
        method: 'get',
    })
}