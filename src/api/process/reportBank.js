import request from '@/utils/request'

// 上报银行列表
export function getReportBankList() {
    return request({
        url: '/system/cailiao/list',
        method: 'get'
    })
}

// 上报银行立即处理+解锁
export function handleReport(data) {
    return request({
        url: '/system/cailiao/go',
        method: 'post',
        data
    })
}

// 获取上报银行贷款信息
export function getLoanData(transactionCode) {
    return request({
        url: '/system/cailiao/fenqi?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 获取上报银行开卡信息
export function getCardData(transactionCode) {
    return request({
        url: '/system/test/kaika?transactionCode=' + transactionCode,
        method: 'get',
    })
}

// 提交贷款信息
export function loanSubmit(data) {
    return request({
        url: '/system/test/fangkuan',
        method: 'post',
        data
    })
}

// 提交开卡信息
export function cardSubmit(data) {
    return request({
        url: '/system/test/card',
        method: 'post',
        data
    })
}