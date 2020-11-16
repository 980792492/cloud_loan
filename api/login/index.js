import url from '../url.js';
import ajax from '../ajax.js';

export default {
	login(param) {
	    return ajax.payload({
	      url:url.login.appLogin,
	      data: param
	    })
	},
	
	// 退出登陆
	loginout(param){
		return ajax.get({
		  url:url.login.loginout,
		  data: param
		})	
	},
	
	//发送验证码
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
	},
	
	// 获取用户信息	
	getUserInfo(param){
		return ajax.get({
		  url:url.login.getUserInfo,
		  data: param
		})	
	},
	
	 //修改密码
	 updatePwd(param){
		 console.log(123321123)
		 return ajax.payload({
		   url:url.login.updatePwd,
		   data: param
		 })
	 },
	 
	 
	 // 找回密码
	 rewriteAppPwd(param){
		 return ajax.payload({
		   url:url.login.rewriteAppPwd,
		   data: param
		 })
	 },
	
	
}