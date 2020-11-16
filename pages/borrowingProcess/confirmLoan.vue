<template>
	<view>
		<view class='header'>
			<view class="top-title">借款金额(元)</view>
			<view class="amountInput">
				<text class="amount">{{data.amount1}}</text>
			</view>
		</view>
		
		<view class="line"></view>
		<view class="content"></view>
		<view>
			<uni-list>
			    <uni-list-item title="借款期限"  :rightText="data.periods+'个月'" :showArrow="false"  />
			    <uni-list-item title="月利率" :rightText="data.interestRate + '%'" :showArrow="false" />
				<uni-list-item title="总利息" :rightText="'¥' + data.interest/100" :showArrow="false"  />
				<!-- <uni-list-item title="还款计划" :rightText="'首期' + data.repayPlanList[0].planRepayDate + ' 应还¥' + data.repayPlanList[0].planRepayAmount" @click="showDate('popup1')"/> -->
				<uni-list-item title="银行卡" :showArrow="false" >
					<view slot="right">
						<!-- <img class="bank_icon" src="../../static/assets/gsyh.png" alt=""> -->
						<text style="font-size: 14px;">{{debitCardData.bankName}}</text>
					</view>
				</uni-list-item>
				
				<uni-list-item v-if='customerManagerPhone' title="客户经理手机号" :rightText="customerManagerPhone" :showArrow="false"  />
				
			</uni-list>
		</view>
	
		<!-- <view v-if='state' :class="agreementState? 'loan-btn' : 'loan-btn unchecked-btn'"  @click="nowLoan">
			<text>立即借款</text>
		</view> -->
		<button  class="loan-btn"  @click="nowLoan">立即借款</button>
	<!-- 	<view>
			<uni-popup ref='popup' type='bottom'>
				<view class="popup-center">
					<view class="popup-center-title">借款期限<icon @click="hideDate('popup')" class="close-btn" type="clear" size="26" showArrow='false' /></view>
					<view class="popup-center-list">
						<view class="popup-center-li" v-for="(instalmentItem,instalmentIndex) in instalmentData" :key='instalmentItem.id' @click="changeDate(instalmentItem)" >{{instalmentItem.paramsDesc}}
						
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
		<view>
			<uni-popup ref='popup1' type='bottom'>
				<view class="popup-center">
					<view class="popup-center-title">还款计划<icon @click="hideDate('popup1')" class="close-btn" type="clear" size="26"/></view>
					<view class="popup-center-list">
						<view class="popup-center-li popup-center-plan" v-for="(repayPlanItem,repayPlanIndex) in data.repayPlanList" :key='repayPlanItem.period' >
							<text class="time">{{repayPlanItem.planRepayDate}}</text>
							<text class="amount">{{repayPlanItem.planRepayAmount}}元</text>
						</view>
					</view>
				</view>
			</uni-popup>
			<uni-popup ref='popup2'>
				<view class="popup-agreement">
					<v-tabs
					  height="50px"
					  v-model="activeTab"
					  :scroll="false"
					  activeColor="#333333"
					  color="#808080"
					  lineHeight="0"
					  :tabs="['投保须知/担保说明', '保险条款', '保险协议']"
					>
					</v-tabs>
					<span class="agreement-content">
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
					</span>
					<button type="primary" class="agreement-btn">我已阅读全部保险协议并确认</button>
				</view>
				<icon @click="hideDate('popup2')" class="agree-close"  type="cancel" color="#fff" size="36"/>
			</uni-popup>
		</view>
	 -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import api from '@/api/apply/index.js'
	import utils from '@/utils/utils.js'
	
	
	export default {
		components: {uniList,uniListItem,uniPopup},
		data(){
			return {
			customerManagerPhone:'',
				agreementState:false,
				debitCardData:{}, //银行信息
				data:{
					rate:'',
					interest:'',
					repayPlanList:[{
						planRepayDate:'',
						planRepayAmount:''
					}]
				
					
				},
				instalmentData:[],//分期数据
				instalment:0, //分期
				state:false,
				quotaAmount:0, //可借总额
				placeholderText:'',  
				quota:"",
				activeTab: 0,
				amount:'',
				date: 3,
				dateList:[3,6,9,12],
				repaymentPlan:[1,1,1,1],
				AGREEMENT: [
					'本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品本授权是在蚂蚁白领合作机构购买特定产',
					' 2本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品或使用该服务的对价选择进行信用付款涉及的用户个人信息查询、使用及授信、贷后管理相关事宜与信用服务提供方所订立的授权契约。',
					' 3本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品或使用该服务的对价选择进行信用付款涉及的用户个人信息查询、使用及授信、贷后管理相关事宜与信用服务提供方所订立的授权契约。',
				]
			}
		},
		onLoad(options){
			
			console.log(1111111111);
			console.log(options);
			this.orderId = options.orderId;
			this.customerManagerPhone = options.customerManagerPhone || "";
			// this.getParamsByType(); //获取分期数
			// this.getQuota(); //获取额度
			this.getDebitCard(); //获取银行信息
			this.getOrderInfo(this.orderId);  //获取订单信息
			
			
		},
		methods: {
			
			// 提交借款
			nowLoan(){
				const consumerId = uni.getStorageSync('consumerId')
				
				let params = {
					consumerId,
					loanOrderId:this.orderId,
					
				}
				api.submitLoan(params).then(res => {
					if(res.retCode === "000000"){
						
						uni.navigateTo({
							url:'/pages/borrowingProcess/examine'
						})
						
						
					}
					console.log(res)
				})
				
			},
			
			
			
			// 获取订单信息
			getOrderInfo(orderId){
				const consumerId = uni.getStorageSync('consumerId')
				let params = {
					loanOrderId:orderId
				}
				
				console.log(55555555555);
				console.log(params);
				api.queryOrderNew(params).then(res => {
					console.log(res);
					console.log(res.retCode)
					console.log(res.busiparam);
		
					
					console.log(8787878234324);
					let data = res.busiparam
					console.log(data);
					
					data.amount1= (data.amount / 100) + '元'
					
					
					this.data = data
					if(res.retCode === "000000"){
					
						console.log(this.data);
					}
					
					console.log(res);
				})
			},
			
			// 状态
			agreementTap(state){
				console.log(33333);
				console.log(state);
				this.agreementState = !this.agreementState;
				console.log(this.agreementState)
				
			},
			
			// 获取银行信息
			getDebitCard(){
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getDebitCard({consumerId}).then(res =>{
					console.log(res);
					if(res.retCode === "000000"){
						this.debitCardData = res.busiparam;
					}
					console.log('++++++++++');
				})
				
			},
			
			
			// 获取还款分期数
			getParamsByType() {
				const consumerId = uni.getStorageSync('consumerId')
				api.incomeData({
					paramsType: 'YHDPERIOD'
				}).then(res => {
					this.instalmentData = res.data;
					this.instalment = this.instalmentData[0].paramsValue;
					console.log(this.instalmentData);
					console.log(this.instalment);
					console.log(777777);
				})
			},
			
			// 获取额度
			getQuota(){
				
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getQuotaQuery({consumerId}).then(res => {
					console.log(888777666555)
					console.log(res);
					this.quotaAmount = res.busiparam.availableQuota;
					this.quota = utils.formatMoney(this.quotaAmount)
					console.log(this.quota);
					this.placeholderText = `最高可借${this.quota}`
				})
			},
			
			
			//输入金额事件
			amountChangeTap(){
				// if(this.amount  < )
				if(this.amount >= 1000){
					if(this.amount > this.quotaAmount){
						uni.showToast({
							title:`最高可借${this.quotaAmount}元`,
							icon:'none'
						})
						this.state = false;
					}else{
						console.log(4444466666888888)
						
						this.getComputeRepayPlan();
			
					}
				}else{
					this.state = false;
					
				}
			
				
				console.log(333333);
				
				
				
			},
			
			// 测试还款计划
			getComputeRepayPlan(){
				
				let params = {
					amount: this.amount,
					periods: this.instalment,
					orderId:this.orderId
				}
				
				api.computeRepayPlan(params).then(res => {
					console.log(res);
					if(res.retCode === "000000"){
						this.data = res.busiparam;
						this.data.amount1 = this.data.amount / 100;
						console.log(this.data);
						console.log(999988877776666)
						this.state = true;
						
					}
					
				})
				
				
			},
			
			
			// nowLoan(){
				
			// 	uni.navigateTo({
			// 		url:'/pages/borrowingProcess/examine'
			// 	})
			// 	if(!this.agreementState){
			// 		// uni.showToast({
			// 		// 	title:'请阅读同意《相关协议》',
			// 		// 	icon: 'none'
			// 		// })
			// 		return false;
			// 	}
				
			// 	uni.showModal({
			// 	    content: '借款订单已过期，请重新发起借款申请',
			// 		cancelText:'回首页',
			// 		confirmText:'重新发起',
			// 	    success: function (res) {
			// 	        if (res.confirm) {
			// 	            console.log('用户点击确定');
			// 	        } else if (res.cancel) {
			// 	            console.log('用户点击取消');
			// 	        }
			// 	    }
			// 	});
			// },
			
			// 借款期限事件
			changeDate(item){
				console.log(11111);
				console.log(item);
				
				this.instalment = item.paramsValue
				this.getComputeRepayPlan();
				
				this.$refs.popup.close()
			},
			
			hideDate(ref){
				this.$refs[ref].close()
			}
		}
	}
</script>

<style lang="stylus">
	page{
		background #f2f2f2
	}
	
	.header{
		
		width 100%
		height 196upx
		background #fff
	}
	.line{
		height 10px
		background-color #F2F2F2;
	}
	.top-title{
		font-family PingFangSC-Regular
		font-size 16px
		color #808080
		line-height 80upx
		text-align center
	}
	.amountInput{
		display flex
		flex-direction row
		justify-content center
		align-items center
		width 100%
		height 88upx
		
		position relative
	}
	.amountInput text{
		line-height 88upx
		font-size 30px
		color #000000
		font-weight bold
	}
	
	.palceholderStyle{
		font-size 20px
		color #ccc
		font-weight normal
	}
	.bank_icon{
		display inline-block
		width 14px
		height 14px
	}
	.loan-btn{
		width 300px
		height 44px
		border-radius 22px
		margin 50px auto 70px
		background #2494FF
		color #fff
		
	}
	
		.loan-btn text{
				color #fff
		}
	.unchecked-btn{
		background rgba(36,148,255,0.4)
		// background-color 
	}
	
	
	.remark{
		display flex
		align-items center
		font-size 12px
	}
	.remark .icon{
		margin-left 24upx;
		width 24upx;
		height 24upx;
		margin-right 12upx;
	}
	.remark .icon image{
		width 100%;
		height 100%;
	}
	.popup-center{
		background-color #fff
		width 100%
		height 447px
		border-radius 8px 8px 0 0
		&-title{
			text-align center
			height 56px
			line-height 56px
			border-bottom 1px solid #EEEEEE
			font-size 16px
			color #333
			font-weight bold
			font-family: PingFangSC-Medium;
			position relative
		}
		.close-btn{
			position absolute
			right 10px
		}
		&-li{
			width 100%
			height 44px
			font-size 14px
			color #333
			line-height 44px
			border-bottom 1px solid #EEEEEE
			text-indent 1em
		}
		&-plan{
			display flex
			flex-direction row
			justify-content space-between
			.time{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #333333;
				line-height: inherit;
			}
			.amount{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #333333;
				text-align: right;
				line-height: inherit;
				padding-right 14px
			}
		}
		
	}
	.popup-agreement{
		width 320px
		height 442px
		background-color #fff
		border-radius 8px
	}
	.agreement-content{
		display block
		width 100%
		height 320px
		box-sizing border-box
		padding 0 20px
		overflow-y scroll
		font-size: 14px;
		color: #666666;
		line-height: 22px;
	}
	.agreement-btn{
		width 300px
		height 44px
		border-radius 22px
		margin 10px auto
	}
	.agree-close{
		color #fff
		margin 20px 45%  0
	}
</style>
