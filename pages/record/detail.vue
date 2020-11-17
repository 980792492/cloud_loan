<template>
	<view class="container">
		<view class="top-title">借款金额</view>
		<view class="amountInput">
			{{data.amount}}
		</view>
		<view class="line"></view>
		<view>
			<uni-list>
				<uni-list-item title="借款总金额" :rightText="data.amount" :showArrow="false" />
			    <uni-list-item title="借款期限" :rightText="data.periods" :showArrow="false" />
				<uni-list-item title="借款时间" :rightText="data.periods" :showArrow="false" />
				<uni-list-item title="借款状态" :rightText="statusTexts[data.orderStatus]" :showArrow="false" />
				<uni-list-item title="还款方式" rightText="等额本息" :showArrow="false" />
				<uni-list-item title="合同协议" :showArrow="false">
					<view slot="right" @click='agreeTap'>
						<text style="color: #007AFF; font-size: 14px;">点击查看</text>
					</view>
				</uni-list-item>
				<uni-list-item title="到账银行" :showArrow="false">
					<view slot="right">
						<img class="bank_icon" :src="userInfo.bankPicUrl" alt=""><text style="font-size: 14px;color:#333333">{{userInfo.bankName + '(' + this.cardNo +  ')'}}</text>
					</view>
				</uni-list-item>
				<uni-list-item title="还款计划" :showArrow="false">
					<view slot="right">
						<uni-icons @click="changeIcon"  :type="icontype" size="16"></uni-icons>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="plan-list" v-show="icontype==='arrowup'">
			<view class="plan-list-tile">剩余还款计划</view>
			<view class="plan-list-li" v-for="(planItem,planIndex) in data.repayPlanList" :key='planItem.period'>
				<text>{{planItem.planRepayDate}}</text>
				<text style="font-size: 16px;">{{planItem.planRepayAmount/100 + '元'}}</text>
			</view>
		</view>
		
		<!-- 合同选择 -->
		<uni-popup ref="agreepop" type="bottom">
			<view class='bank-pop'>
				<view class="header">
					<view></view>
					<view class="title">
						<text>合同列表</text>
					</view>
					<view class='close-icon' @click="closeAgreePopTap">
						<image src='../../static/assets/register005.png'></image>
					</view>
				</view>
				<view class="content">
					<view class="item" v-for='(agreementItem,agreementIndex) in agreementData' :key='agreementIndex' @click='selectAgreementTap(agreementItem.url)'>
					<!-- 	<view class="icon">
							<image :src='bankItem.paramsDesc'></image>
						</view> -->
						<text>{{agreementItem.title}}</text>
					</view>
		
				</view>
		
			</view>
		</uni-popup>
		
		
		
		
		
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import api from '@/api/loan/index.js'
	
	export default {
		components: {uniList,uniListItem,uniPopup,uniIcons},
		data(){
			return {
				statusTexts:['待生成第三方订单','待提交','放款中','放款成功','放款失败','已取消','已结清','已逾期','还款中','','资金匹配中','资金匹配成功','资金匹配失败'],
			agreementData:[],
				agreementUrl:'', //合同url
				data:{},
				loanOrderId:'', //订单id
				amount:'',
				date: 3,
				icontype:'arrowdown',
				plan:[
					{time:'3月2日', money:'600.00'},
					{time:'4月2日', money:'300.00'},
					{time:'5月2日', money:'200.00'},
					{time:'6月2日', money:'100.00'}
				],
				userInfo:{},
				cardNo:''
				
			}
		},
		onLoad(options){
			this.userInfo = uni.getStorageSync('userInfo');
			this.cardNo = this.userInfo.cardNo.substring(this.userInfo.cardNo.length-4,this.userInfo.cardNo.length)
				
			this.loanOrderId = options.loanOrderId;
			this.getAgreement();
			this.getOrderInfo();
			
		},
		
		methods: {
			// 关闭银行卡弹框
			closeAgreePopTap() {
				this.$refs.agreepop.close();
			
			},
			
			getOrderInfo(){
				const consumerId = uni.getStorageSync('consumerId')
				let params = {
					consumerId,
					orderId:this.loanOrderId
				}
				api.getLoanOrderInfo(params).then(res => {
					let data = res.busiparam
					let amount = data.amount;
					data.amount = '¥' + (amount/100);
					// data.amount1 = '¥' + (amount/100);
					data.periods = data.periods + '个月'
					this.data = data;
					console.log(this.data);
					console.log(res)
				})
			},
			
			//查看合同
			agreeTap(){
				this.$refs.agreepop.open();
								
				// console.log(this.agreementUrl);
				// if(this.agreementUrl){
				// 	// this.agreementUrl = 'https://www.baidu.com/'
				// 	let url = encodeURIComponent(this.agreementUrl)
				// 	console.log(url);
				// 	console.log(`/pages/webView/index?url=${url}`)
				// 	uni.navigateTo({
				// 		url:`/pages/webView/index?url=${url}`
				// 	})
				// }
			},
			
			selectAgreementTap(url){
				this.$refs.agreepop.close();
				
				uni.navigateTo({
					url:`/pages/webView/index?url=${url}`
				})
				
			},
			
			
			getAgreement(){
				const consumerId = uni.getStorageSync('consumerId')
				
				let params ={
					consumerId,
					applyFlowId:'',
					loanOrderId:this.loanOrderId,
					sceneList:['loanSuccess']
				}
				console.log(params);
				console.log('_____')
				api.getAgreement(params).then(res => {
					console.log(7878787878787878)
					let data = res.busiparam;
					data = [
						{
						      "title": "申请人姓名信息的协议",
						            "url": "https://www.baidu.com"
					},
					{
						"title": "申请人信息的协议",
						            "url": "https://www.baidu.com"
					}
					]
					
					this.agreementData = data;
					return false;
					data.forEach(val  => {
						if(val.title === "借款合同"){
							this.agreementUrl = val.url
							
						}
					})
				})
			},
			
			getQueryRepayPlan(){
				const consumerId = uni.getStorageSync('consumerId')
				let params = {
					consumerId,
					loanOrderId:this.loanOrderId,
					flag:2
				}
				api.queryRepayPlan().then(res => {
					console.log(res);
				})
			},
			
			
			changeIcon(){
				this.icontype = this.icontype === 'arrowup' ? 'arrowdown' : 'arrowup'
			}
		}
	}
</script>

<style lang="stylus">
	.container{
		width 100vw
		height 100vh
		background-color #F2F2F2;
	}
	/deep/ .uni-list-item__content-title{
		font-size 14px
		color #808080
	}
	/deep/ .uni-list-item__extra-text{
		font-size 14px
		color #333
	}
	.line{
		height 10px
	}
	.top-title{
		font-family PingFangSC-Regular
		font-size 16px
		color #808080
		line-height 40px
		text-align center
		background-color #fff
	}
	.amountInput{
		text-align center
		width 100%
		height 58px
		line-height 58px
		font-size 40px
		position relative
		background-color #fff
		font-family: DINAlternate-Bold;
	}
	
	.bank_icon{
		display inline-block
		width 14px
		height 14px
		margin-right 4px
	}
	.plan-list{
		width 350px
		height auto
		margin 12px auto 0
		padding 16px
		box-sizing border-box
		background-color #fff
		font-size 14px
		color #333333
		&-title{
			width 100%
			height 26px
			line-height 26px
		}
		&-li{
			width 100%
			display flex
			flex-direction row
			justify-content space-between
			line-height 44px
			height 44px
			border-bottom 1px dashed  #eee
		}
		
		text{
			font-size 28upx !important
			
		}
		text:last-child{
			font-weight 500
		}
		
	}
	
	/* 银行数据弹框 */
	.bank-pop {
		height: 812upx;
		background: #fff;
	}
	
	.bank-pop .header {
		padding: 24upx;
		width: 100%;
		height: 112upx;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
	}
	
	.bank-pop .header .title text {
		font-size: 32upx;
		color: #333;
	
	}
	
	.bank-pop .header .close-icon {
		width: 48upx;
		height: 48upx;
	}
	
	.bank-pop .header .close-icon image {
		width: 48upx;
		height: 48upx;
	}
	
	.bank-pop .content {
		height: 700upx;
	
		overflow-y: scroll;
		width: 100%;
		/* overflow: hidden; */
		background: #fff;
	
	}
	
	.bank-pop .content .item {
		width: 100%;
		height: 88upx;
		display: flex;
		align-items: center;
		border-top: 1upx solid #eee;
	
	}
	
	.bank-pop .content .item .icon {
		width: 28upx;
		height: 28upx;
		margin-left: 24upx;
		margin-right: 16upx;
	
	}
	
	.bank-pop .content .item .icon image {
		width: 28upx;
		height: 28upx;
	}
	
	.bank-pop .content .item text {
		padding-left: 12upx;
		font-size: 28upx;
		color: #333;
		line-height: 88upx;
	}
</style>
