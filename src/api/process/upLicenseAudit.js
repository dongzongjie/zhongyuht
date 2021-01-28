import request from '@/utils/request'

// 上牌审核列表
export function upLicenseList() {
    return request({
        url: '/stage/shangpai/list',
        method: 'get',
    })
}

// 上牌审核数据
export function findUpLicense(transactionCode) {
    return request({
        url: '/examine/find/shangpai?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 上牌审核审批
export function upLicenseAudit(data) {
    return request({
        url: '/stage/add/shangpai/opinion',
        method: 'post',
        data
    })
}

// 上牌审核回显
export function findUpLicenseAudit(transactionCode) {
    return request({
        url: '/stage/find/shangpai/opinion?transactionCode=' + transactionCode,
        method: 'get',
    })
}