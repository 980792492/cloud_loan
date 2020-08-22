
export default {
	/**
	 * 登录注册
	 * */
	login:{
		appLogin: '/yhdapp/userManager/applogin', //1.账号密码登入接口
		sendAuthCode: "/yhdapp/userManager/sendAuthCode", // 注册登入验证码
		saveAppUser: "/yhdapp/userManager/saveAppUser", //app注册人员保存,
		rewriteAppPwd: "/yhdapp/userManager/rewriteAppPwd", //忘记密码后找回密码
	}
}