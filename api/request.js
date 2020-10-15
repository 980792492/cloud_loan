// 192.168.157.1
	import {BASE_URL} from '@/api/api.js'

/**
 * ajax封装
 */
let options = {
    title: '加载中',
}
export default function Ajax(opts, error, config) {
	
    const { data, url } = opts
	console.log(url);
	
	console.log('hanson23424324324324324324');
	console.log(BASE_URL);

    if (!config.noLoading) {
        uni.showLoading(options)
    }
	return new Promise((resolve, reject) => {
		console.log(BASE_URL + url);
        uni.request({
			// url:url,
			url: BASE_URL + url,
			sslVerify:false,
            method: config.method || 'POST',
            data: data,
            header: {
                token: uni.getStorageSync('token'),
				appVersion: '1',
				clientType:'android',
				appId: 'yhd_v1',
                'Content-Type': config.payload ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(req => {
			console.log(req);
			console.log(6666666666);
			console.warn('req', req)
            const res = req[1].data
            if ( res.retCode === '000000' || res.retCode === '4001' ) {
                resolve(res)
            } else if (res.retCode === 1106) {
                uni.navigateTo({
                    url: '/pages/login/login',
                })
            }else if (res.retCode === 9999) {
				uni.showToast({
				    title: res.retMsg,
				    icon: 'none'
				})
				
                resolve(res)
                
            } else if (error) {
                reject(res)
            } else {
                uni.showToast({
                    title: res.retMsg,
                    icon: 'none'
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