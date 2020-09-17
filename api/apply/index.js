import url from '../url.js';
import ajax from '../ajax.js';

export default {
	// 上传身份图片
	faceDetectImage(param) {
	    return ajax.payload({
	      url:url.applycredit.faceDetectImage,
	      data: param
	    })
	},
	
	// 获取输入数据
	incomeData(param) {
	    return ajax.get({
	      url:url.applycredit.getParamsByType,
	      data: param
	    })
	},
	
	createBasicInformation(param){
		return ajax.payload({
		  url:url.applycredit.createBasicInformation,
		  data: param
		})
	},
	
	// 验证运营商服务密码
	verificationServiceCode(param){
		return ajax.payload({
		  url:url.applycredit.verificationServiceCode,
		  data: param
		})
		
	},
	
	// 图片验证码
	loginVerificationCode(param){
		return ajax.payload({
		  url:url.applycredit.loginVerificationCode,
		  data: param
		})
	},
	
	// 获取验证码
	verificationCode(param){
		return ajax.payload({
		  url:url.applycredit.verificationCode,
		  data: param
		})
	},
	
	// 运营商信息登录
	verificationCode(param){
		return ajax.payload({
		  url:url.applycredit.operatorsLogin,
		  data: param
		})
	},
	
	// 银行卡手机号验证
	bankVerificationCode(param){
		return ajax.payload({
		  url:url.applycredit.bankVerificationCode,
		  data: param
		})
	},
	
	// 银行卡绑定
	bindBankCard(param){
		return ajax.payload({
		  url:url.applycredit.bindBankCard,
		  data: param
		})
	},
	
	// 提交申请
	submitApply(param){
		return ajax.payload({
		  url:url.applycredit.submitApply,
		  data: param
		})
	},
	
	
	
	// 是否授信
	queryCredit(param){
		return ajax.payload({
		  url:url.applycredit.queryCredit,
		  data: param
		})
	},
	
	
	// 获取授信状态
	getCreditExtensionState(param){
		return ajax.payload({
		  url:url.applycredit.getCreditExtensionState,
		  data: param
		})
	},
	
	// 获取额度
	getQuotaQuery(param){
		return ajax.payload({
		  url:url.applycredit.getQuotaQuery,
		  data: param
		})
	},
	
	
	// 测算额度
	computeRepayPlan(param){
		return ajax.payload({
		  url:url.borrowingProcess.computeRepayPlan,
		  data: param
		})
	},
	
	// 获取已绑定银行卡
	getDebitCard(param){
		return ajax.payload({
		  url:url.borrowingProcess.getDebitCard,
		  data: param
		})
	},
	
	// 创建订单
	createOrder(param){
		
		return ajax.payload({
		  url:url.borrowingProcess.createOrder,
		  data: param
		})
		
	},
	//发送网联签约短信验证码
	sendSignCode(param){
		return ajax.payload({
		  url:url.borrowingProcess.sendSignCode,
		  data: param
		})
	},
	
	// 是否需要网联签约
	checkNeedUnionSign(param){
		return ajax.payload({
		  url:url.borrowingProcess.checkNeedUnionSign,
		  data: param
		})
		
	},
	
	// 网联签约
	unionSign(param){
		return ajax.payload({
		  url:url.borrowingProcess.unionSign,
		  data: param
		})
		
	},
	
	// 获取订单信息
	queryOrderNew(param){
		return ajax.payload({
		  url:url.borrowingProcess.queryOrderNew,
		  data: param
		})
		
	},
	
	// 提交借款
	submitLoan(param){
		return ajax.payload({
		  url:url.borrowingProcess.submitLoan,
		  data: param
		})
	},
	
	
	
	// 提交借款
	getData1(param){
		console.log(param);
		console.log(87776666)
		
		return ajax.payload({
		  url:url.borrowingProcess.getData1,
		  data: param
		})
	},
	
	
	
	
	
	
	
}