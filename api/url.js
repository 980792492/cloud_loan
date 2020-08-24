
export default {
	/**
	 * 登录注册
	 * */
	login:{
		appLogin: '/yhdapp/userManager/applogin', //1.账号密码登入接口
		sendAuthCode: "/yhdapp/userManager/sendAuthCode", // 注册登入验证码
		saveAppUser: "/yhdapp/userManager/saveAppUser", //app注册人员保存,
		rewriteAppPwd: "/yhdapp/userManager/rewriteAppPwd", //忘记密码后找回密码
	},
	/**
	 * 首页
	 * */
	index:{
		queryCredit: "/yhdapp/creditmanage/queryCredit", // 是否授信
	},
	applycredit:{
		getAgreement : "/yhdapp/creditmanage/getAgreement", // 获取协议
		haveAccountManager: "/yhdapp/creditmanage/getRelationCustomerManagerPhone", // 是否存客户经理，
		getParamsByType: "/yhdapp/parammanager/getParamsByType", // 查配置数据查询-- 根据type查询列表  例子 授信申请月收入的下拉type：YHDINCOMEMONTH 还款期数下拉的type ： YHDPERIOD
		getParamByKey: "/yhdapp/parammanager/getParamByKey", //查配置数据查询-- 根据Key查询单个实体记录  例子 注册协议名称的key： YHDSCHEME  ；
		createBasicInformation: "/yhdapp/creditmanage/createBasicInformation", // 授信申请,信息保存 创建申请流程，填写基础信息
		faceDetectImage: "/yhdapp/creditmanage/faceDetectImage", // 人脸识别照片上传
		upload: "/yhdapp/fileupload/upload", // 图片上传
	}
}