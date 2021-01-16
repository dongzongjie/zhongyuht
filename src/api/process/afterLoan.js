import request from '@/utils/request'

// 获取贷后列表
export function getAfterLoanList() {
    return request({
        url: '/system/daihou/list',
        method: 'get',
    })
}

// 获取贷后详情
export function getAfterLoanDetails(id) {
    return request({
        url: '/system/daihou/' + id,
        method: 'get',
    })
}

// 贷后当前处理人+解锁
export function afterLoanHandlePeople(data) {
    return request({
        url: '/system/daihou/get/user',
        method: 'post',
        data
    })
}

// 贷后审批
export function afterLoanHandle(data) {
    return request({
        url: '/system/daihou/go',
        method: 'post',
        data
    })
}