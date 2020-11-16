<template>
	<view class="container">
		
	<uni-nav-bar left-icon="back" style="border-bottom: none" background-color="#007AFF" color="#fff"  right-text="还当期" title="提前结清" @clickLeft='clickLeft' @clickRight='clickRight'></uni-nav-bar>
	
		
	<!-- 	<uni-nav-bar left-icon="back" background-color="#fff" color="#333" title="提前结清"  @clickLeft='clickLeft' @clickRight='clickRight'>
			<view slot="right" style="color: #2391FB;font-size: 14px;">还当期</view>
		</uni-nav-bar> -->
		<view class="detail-top">
			<view class="detail-top-title">还款金额</view>
			<view class="detail-top-money">{{data.totalPayMoney}}</view>
		</view>
		<view class="bank">
			<text style="color: #808080;">银行卡</text>
			<view>
				<img class="bank_icon" :src="userInfo.bankPicUrl" alt=""><text style="font-size: 14px;color:#333333">{{userInfo.bankName + '(' + this.cardNo +  ')'}}</text>
			</view>
		</view>
		<view class="btn-box">
			<button class="repay-btn" type="primary" @click='handleTap'>立即还款</button>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import api from '@/api/loan/index.js'
	
	export default {
		components: {uniNavBar},
		data() {
			return {
				userInfo:{},
				cardNo:'',
				data:{
					flag:2
				},
				
			};
		},
		onLoad(options){
			this.userInfo = uni.getStorageSync('userInfo');
			this.flag = options.flag || 2;
			
			
			this.cardNo = this.userInfo.cardNo.substring(this.userInfo.cardNo.length-4,this.userInfo.cardNo.length)
					
		
			this.toGetreplayInfo();
		},
		methods:{
			
			
			// 返回
			clickLeft(){
				console.log(33333);
				uni.navigateBack({
					delta:1
				})
			},
			
			
			//借款记录
			clickRight(){
				uni.redirectTo({
					url:'/pages/repayment/index'
				})
			},
			//提前结清
			handleTap(){
				const consumerId = uni.getStorageSync('consumerId')
				if(this.flag == 1){
					
					api.repayment({consumerId,period:1}).then(res => {
						console.log(123456789011111)
						if( res.retCode === "000000"){
							uni.showToast({
								title:'还款提交成功!',
								icon:'none'
							})
							
							setTimeout(()=>{
								uni.redirectTo({
									url: `/pages/repayment/repayIng?amount=${this.data.payMoney}`
								})
							},2500)
							
						}
					})
				}else{
					api.allRepayment({consumerId}).then(res => {
						if( res.retCode === "000000"){
							uni.showToast({
								title:'还款提交成功!',
								icon:'none'
							})
							
							setTimeout(()=>{
								uni.redirectTo({
									url: `/pages/repayment/repayIng?amount=${this.data.payMoney}`
								})
							},2500)
							
						}
					})
				}
			
			},
			

			
			//获取提前结清数据
			toGetreplayInfo(){
				const consumerId = uni.getStorageSync('consumerId')
				console.log({flag:this.flag,consumerId});
				console.log('+++++++');
				
				api.toGetreplayInfo({flag:parseFloat(this.flag),consumerId}).then(res => {
					console.log(res);
					if(res.retCode === "000000"){
						let data = res.busiparam;
						let total = 0;
						if(this.flag == 1){
							total = data.payMoney
						}else{
							data.repayPlanList.forEach(val => {
								total += val.planRepayAmount
							})
						}
						console.log(343434);
					
						
						data.totalPayMoney = total/ 100;
						this.data = data;
						console.log(this.data);
						
					}
					
				})
			},
		},
		
	}
</script>

<style lang="stylus" scoped>
	/deep/ .uni-navbar--border{
		border: none;
	}
	.container{
		width 100vw
		height 100vh
		background #F2F2F2
	}
	.detail-top{
		width 100%
		height 98px
		background-color #fff
		&-title{
			height 40px
			line-height 40px
			text-align center
			font-size 16px
			color #808080
		}
		&-money{
			height 44px
			line-height 44px
			font-family: DINAlternate-Bold;
			font-size: 30px;
			color: #000000;
			text-align center
			margin-bottom 15px
			font-weight bold
		}
	}
	.bank{
		width 100%
		height 44px
		margin-top 10px
		margin-bottom 40px
		background-color #fff
		display flex
		justify-content space-between
		align-items center
		font-size 14px
		padding 0 12px
		box-sizing border-box
	}
	
	.bank_icon{
		display inline-block
		width 14px
		height 14px
		vertical-align middle
		margin-right 4px
	}	
	.repay-btn{
		width 335px 
		height 40px
		line-height 40px
		border-radius 20px 
	}
</style>
