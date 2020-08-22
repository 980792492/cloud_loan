/**
 * ajax封装
 */
// import uni from ''

const baseUrl = "//47.110.155.207:8182"
    
let options = {
    title: '加载中',
}
export default function Ajax(opts, error, config) {
    const { data, url } = opts
    if (!config.noLoading) {
        uni.showLoading(options)
    }
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method: config.method || 'post',
            data: data,
            header: {
                token: uni.getStorageSync('token'),
				appVersion: '1',
				clientType:'android',
				appId: 'yhd_v1',
                'Content-Type': config.payload ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(req => {
            const res = req.data
            if (res.retCode === 1000) {
                resolve(res)
            } else if (res.code === 9999) {
                uni.navigateTo({
                    url: '/pages/login/login',
                })
            } else if (error) {
                reject(res)
            } else {
                uni.showModal({
                    // title: '温馨提示',
                    content: res.message,
                    showCancel: false
                })
            }
            if (!config.noLoading) {
                uni.hideLoading()
            }
        }).catch(() => {
            if (!config.noLoading) {
                uni.hideLoading()
            }
        })
    })
}