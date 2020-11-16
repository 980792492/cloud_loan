<template>
	<view class="container">
		<uni-nav-bar left-icon="back" style="border-bottom: none" background-color="#007AFF" color="#fff"  right-text="借款记录" title="云好贷" @clickLeft='clickLeft' @clickRight='clickRight'></uni-nav-bar>
		<view class="main">
			<view class="main-title">{{data.mark}}</view>
			<!-- <view class="main-title norepay">逾期未还</view> -->
			<view class="main-money"><text>￥{{data.payMoney/100}}</text>
		<!--	<uni-icons @click="changeIcon" color="#aaa"  type="arrowright" size="24">-->
			</uni-icons></view>
			<button type="primary" class="loan-btn" @click="loan">去还款</button>
			<view class="tips">我们会在还款日当天自动从<text style="color: #2E99FF;">{{userInfo.bankName + '(' + this.cardNo +  ')'}}</text>中自动扣款，请确保当日银行卡中余额充足</view>
			<!-- <view class="tips waring">逾期会严重影响您的征信，请尽快结清逾期款项</view> -->
		</view>
		<view class="surplus">
			<view class="surplus-list">
				<view class="surplus-list-title">剩余还款计划</view>
				<view class="surplus-list-li" v-for="items in data.repayPlanList" :key='items.period'>
					<text>{{items.planRepayDate}}</text>
					<view>
						<text style="font-size: 16px;">{{items.planRepayAmount/100}}</text>
						<uni-icons @click="changeIcon" color="#aaa"  type="arrowright" size="20"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<div style="height: 20px;">
			
		</div>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import api from '@/api/loan/index.js'
	
	export default {
	    components: {uniNavBar, uniIcons},
		data(){
			return{
				cardNo:'',
				userInfo:{
					
				},
				data:{
					
				},
				plan:[
					{time:'3月2日', money:'600.00'},
					{time:'4月2日', money:'300.00'},
					{time:'5月2日', money:'200.00'},
					{time:'6月2日', money:'100.00'}
				]
			}
		},
		onLoad(){
			this.userInfo = uni.getStorageSync('userInfo');
			this.cardNo = this.userInfo.cardNo.substring(this.userInfo.cardNo.length-4,this.userInfo.cardNo.length)
		
		},
		onShow(){
			this.toGetreplayInfo();
		},
		methods:{
			
		
			
			//借款记录
			clickRight(){
				uni.redirectTo({
					url:'/pages/record/index'
				})
			},
			
			//获取提前结清数据
			toGetreplayInfo(){
				const consumerId = uni.getStorageSync('consumerId')
				
				api.toGetreplayInfo({flag:1,consumerId}).then(res => {
					console.log(res);
					if(res.retCode === "000000"){
						this.data = res.busiparam;
						
					}
					
				})
			},
			// 返回
			clickLeft(){
				console.log(33333);
				uni.navigateBack({
					delta:1
				})
			},
			loan(){
				uni.navigateTo({
					url:'/pages/repayment/advance?flag=1'
				})
			
			}
		}
	}
</script>

<style lang="stylus">
	/deep/ .uni-navbar--border{
		border: none;
	}
	.container{
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		background: url(../../static/assets/Group12.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.main{
		width: 315px;
		height: 325px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 8px 4px rgba(0,0,0,.2);
		margin: 30px auto 0;
		box-sizing: border-box;
		padding-top: 20px;
	}
	.main-title{
		height 60px
		line-height 60px
		font-size: 20px;
		text-align: center;
		color #333333
	}
	.norepay{
		color #EE2532 
		font-size 20px
	}
		
	.main-money{
		height 48px
		line-height 48px
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		margin-bottom 45px
		display flex
		flex-direction row
		justify-content center
		align-items center
	}
	.loan-btn{
		width: 275px;
		height: 44px;
		border-radius: 22px;
		margin:0 auto 36px;
	}
	.tips{
		width 100%
		height auto
		line-height 20px
		text-align center
		font-size 12px
		color #aaa
		box-sizing border-box
		padding 0 21px
	}
	.waring{
		font-size 12px
		color #333333
	}
	.surplus{
		width 315px
		height auto
		margin 24px auto 0
		position relative
		padding-top 6px
		&::before{
			content ''
			display block
			width 100%
			height 12px
			border-radius 6px
			background-color #2494FF
			position absolute
			top 0
			left 0
		}
		&::after{
			content ''
			display block
			width 95%
			height 12px
			border-radius 0 0 15px 15px
			background-color #fff
			position absolute
			top 6px
			left 2.5%
		}
		&-list{
			width 295px
			height auto
			box-sizing border-box
			padding 20px  16px  48px
			background-color #fff
			margin 0 auto
			box-shadow: 0 2px 8px 2px rgba(0,0,0,.3)
			border-radius 6px
			&-li{
				width 100%
				height 44px
				line-height 44px
				font-size 14px
				display flex
				flex-direction row
				justify-content space-between
				align-items center
				border-bottom 1px dashed #eee
			}
			&-title{
				font-size 14px
				line-height 20px
			}
		}
	}
</style>
