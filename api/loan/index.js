import url from '../url.js';
import ajax from '../ajax.js';

export default {
	// 借款记录
	getLoanOrderList(param) {
	    return ajax.get({
	      url:url.loan.getLoanOrderList,
	      data: param
	    })
	},
	
	// 还款计划
	queryRepayPlan(param){
		return ajax.payload({
		  url:url.loan.queryRepayPlan,
		  data: param
		})
	},
	
	//获取借款详情
	getLoanOrderInfo(param){
		return ajax.get({
		  url:url.loan.getLoanOrderInfo,
		  data: param
		})
	},
	
	// 合同
	getAgreement(param){
		return ajax.payload({
		  url:url.loan.getAgreement,
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
	
	
	//提前结清数据
	toGetreplayInfo(param){
		return ajax.payload({
		  url:url.loan.toGetreplayInfo,
		  data: param
		})
	},
	
	//提前结清
	allRepayment(param){
		return ajax.payload({
		  url:url.loan.allRepayment,
		  data: param
		})
	},
	
	
	
	
	
	
	
	
	
}