/**
 * ajax封装
 */
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
			console.warn('req', req)
            const res = req[1].data
            if ( res.retCode === '000000' ) {
                resolve(res)
            } else if (res.retCode === 9999) {
                uni.navigateTo({
                    url: '/pages/login/login',
                })
            } else if (error) {
                reject(res)
            } else {
                uni.showModal({
                    // title: '温馨提示',
                    content: res.retMsg,
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