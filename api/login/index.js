import url from '../url.js';
import ajax from '../ajax.js';

export default {
	login(param) {
	    return ajax.payload({
	      url:url.login.appLogin,
	      data: param
	    })
	},
	register(param) {
		return ajax.payload({
		  url:url.login.sendAuthCode,
		  data: param
		})
	},
	setPwd(param){
		return ajax.payload({
		  url:url.login.saveAppUser,
		  data: param
		})
	}
}