
export default {
	/**
	 * 登录注册
	 * */
	login:{
		appLogin: '/yhdapp/userManager/applogin', //1.账号密码登入接口
		sendAuthCode: "/yhdapp/userManager/sendAuthCode", // 注册登入验证码
		saveAppUser: "/yhdapp/userManager/saveAppUser", //app注册人员保存,
		rewriteAppPwd: "/yhdapp/userManager/rewriteAppPwd", //忘记密码后找回密码
		getUserInfo:"/yhdapp/userManager/getUserInfo", //获取用户信息
		updatePwd:"/yhdapp/userManager/updatePwd", //修改密码
	},
	/**
	 * 首页
	 * */
	index:{
		queryCredit: "/yhdapp/creditmanage/queryCredit", // 是否授信
	},
	// 授信
	applycredit:{
		getAgreement : "/yhdapp/creditmanage/getAgreement", // 获取协议
		haveAccountManager: "/yhdapp/creditmanage/getRelationCustomerManagerPhone", // 是否存客户经理，
		getParamsByType: "/yhdapp/parammanager/getParamsByType", // 查配置数据查询-- 根据type查询列表  例子 授信申请月收入的下拉type：YHDINCOMEMONTH 还款期数下拉的type ： YHDPERIOD
		getParamByKey: "/yhdapp/parammanager/getParamByKey", //查配置数据查询-- 根据Key查询单个实体记录  例子 注册协议名称的key： YHDSCHEME  ；
		createBasicInformation: "/yhdapp/creditmanage/createBasicInformation", // 授信申请,信息保存 创建申请流程，填写基础信息
		faceDetectImage: "/yhdapp/creditmanage/faceDetectImage", // 人脸识别照片上传
		getOperationmng:"/yhdapp/operationmng/checkValid", //获取通话记录
		upload: "/yhdapp/fileupload/upload", // 图片上传
		verificationServiceCode: "/yhdapp/operationmng/loginStep", //运营商密码
		loginOperators:"/yhdapp/operationmng/loginOperators", //首次 登陆运营商
		againLoginOperators: "/yhdapp/operationmng/crawl", //二次登陆运营商
		loginVerificationCode:"/yhdapp/operationmng/getLoginPicCodeUrl",  //首次 获取图型验证码
		againLoginVerificationCode:"/yhdapp/operationmng/getCrawlPicCode",//二次 获取图形验证码
		
		verificationCode:"/yhdapp/operationmng/sendLoginMsgCode",   //首次 获取验证码
		againVerificationCode:"/yhdapp/operationmng/sendCrawlMsgCode",//二次获取验证码
		operatorsLogin: "/yhdapp/operationmng/crawl", //登录确认运营商信息
		bankVerificationCode: '/yhdapp/creditmanage/sendDebitCardCode'  ,//获取银行卡手机号验证码
		bindBankCard: '/yhdapp/creditmanage/bindDebitCard', //银行卡号码
		submitApply: "/yhdapp/creditmanage/apply", //提交申请
		queryCredit:"/yhdapp/creditmanage/queryCredit",  //是否授信
		getCreditExtensionState: '/yhdapp/creditmanage/getExamineStatus', //获取授信状态
		getQuotaQuery: "/yhdapp/loanmng/quotaQuery", //获取额度
	},
	
	// 借款
	borrowingProcess:{
		lendingQuotaOfPlatform: "/yhdapp/loanmng/quotaQuery",  //获取借款额度
		computeRepayPlan: "/yhdapp/loanmng/computeRepayPlan", //测算还款计划
		getDebitCard: "/yhdapp/creditmanage/getDebitCard", //测算还款计划
		createOrder: "/yhdapp/loanmng/createOrder", //创建借款订单
		queryOrderNew:"/yhdapp/loanmng/queryOrderNew", //获取订单信息
		sendSignCode:"/yhdapp/loanmng/sendSignCode", //发送网联签约短信验证码
		checkNeedUnionSign:"/yhdapp/loanmng/checkNeedUnionSign", //确认是否需要网联签约
		unionSign: "/yhdapp/loanmng/unionSign", //网联签约
		submitLoan: "/yhdapp/loanmng/submitLoan", //提交借款
		getData1: "/store/glist"
		// sendDebitCardCode: "/yhdapp/creditmanage/sendDebitCardCode", //获取储蓄卡验证码
	},
	
	// 还款数据
	loan:{
		getLoanOrderList:'/yhdapp/loanmng/getLoanOrderList', //借款记录	
		queryRepayPlan:"/yhdapp/repaymentmng/queryRepayPlan", //查询还款计划
		getAgreement: "/yhdapp/creditmanage/getAgreement", //合同
		getLoanOrderInfo: "/yhdapp/loanmng/getLoanOrderInfo", //获取借款详情
		toGetreplayInfo: "/yhdapp/repaymentmng/toGetreplayInfo", //获取提前结清数据
		allRepayment:"/yhdapp/repaymentmng/allRepayment", //提前结清
	},
	
	
	
	
}
