<template>
	<view class="container">
		<view class="signUpList">
			<view class="signUpList-li">
				<view class="signUpList-li-left">所属银行</view>
				<view  class="signUpList-li-right">
					<!-- <img class="bank_icon" src="../../static/assets/gsyh.png" alt=""> -->
				<text>{{userInfo.bankName}}</text>
				</view>
			</view>
			<view class="signUpList-li">
				<view  class="signUpList-li-left">预留手机号</view>
				<view class="signUpList-li-right"><text>{{formatMobile}}</text></view>
			</view>
			<view class="signUpList-li" style="border: none;">
				<view  class="signUpList-li-left">短信验证码</view>
				<view class="signUpList-li-right getNote">
					<input type="text" v-model="mesCode">
					<!-- <text class="getNote-btn">获取短信验证码</text> -->
					
					<view class="forget-pwd" v-if='time === 60' @click='getVerificationCode'>
						获取验证码
					</view>
					<view class="forget-pwd forget-pwd1" v-else>
						重新发送 {{time}} S
					</view>
				</view>
			</view>
		</view>
		<view class="tips">输入短信验证码即可完成网联签约</view>
		<button type="primary" class="enter-btn" @click='configTap'>确定</button>
	</view>
</template>
<script>
	
	import api from '@/api/apply/index.js'
	import loginApi from '@/api/login/index.js'
	
	
	export default {
		data() {
			return {
				userInfo:{
					
				},
				signOrderId:'', //签约流程id
				mesCode:'', //验证码
				time:60,
				debitCardData:{},
				formatMobile:'',
				mobile:'',
				orderId:'',
				userInfo:{}, //用户信息
				
			};
		},
		onLoad(options){
			this.userInfo = uni.getStorageSync('userInfo');
			
			this.orderId = options.orderId;
			this.mobile = uni.getStorageSync('loginUserName');
			console.log(this.mobile);
			
			this.formatMobile = this.mobile.substring(0,3) + '****' + this.mobile.substring(7)
			console.log(this.formatMobile);
			// tel.substr(0, 3) + '****' + tel.substr(7)
			
			this.getDebitCard(); //获取银行信息
			
			this.getUserInfo(); //获取用户信息
			
		},
		methods:{
			
			getUserInfo(){
				const consumerId = uni.getStorageSync('consumerId')
				
				loginApi.getUserInfo({consumerId}).then(res =>{
					console.log(this.userInfo);
					
					if(res.retCode === "000000"){
						this.userInfo = res.busiparam;
						uni.setStorageSync('userInfo', this.userInfo)
					}
					
				})
			},
			
			
			// 确认信息
			configTap(){
				
				let params = {
					loanOrderId:this.orderId,
					signOrderId: this.signOrderId,
					smsCode:this.mesCode,
				}
				
				api.unionSign(params).then(res => {
					if(res.retCode === "000000"){
						uni.navigateTo({
							url:`/pages/borrowingProcess/confirmLoan?orderId=${this.orderId}`
						})
					}
				})
				
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
			
			
			// 获取验证码
			getVerificationCode(){
			
				const consumerId = uni.getStorageSync('consumerId')
				let params  = {
					loanOrderId:this.orderId
				}
				
				api.sendSignCode(params).then(res => {
					
						if(res.retCode === "000000"){
							this.signOrderId = res.busiparam.signOrderId;
							console.log(res);
							let time = this.time;
							console.log(3333);
							
							this.setInterval = setInterval(() => {
								console.log(4444);
								if(time === 0){
									// time = 60;
									this.time = 60;
									clearTimeout(this.setInterval);
								}else{
									time--;
									this.time = time;
								}
								
								
							},1000)
											
							
						}
					
				
				
				})
				
			},
			
		}
	}
</script>

<style lang="stylus">
	.container{
		width 100vw
		height calc(100vh - 44px)
		background: #F2F2F2;
		overflow hidden
		.tips{
			width 100%
			height 44px
			line-height 44px
			color #AAAAAA
			font-size 12px
			text-indent 1em
		}
		.signUpList{
			width 100%
			height 152px
			background-color #fff
			box-sizing border-box
			padding-left 12px 
			font-size 14px
			padding-top 16px
			&-li{
				width 100%
				height 44px
				line-height 44px
				color #808080 
				border-bottom 1px solid #EEEEEE;
				display flex
				flex-direction row
				&-left{
					width 90px
				}
				&-right{
					width 270px
					padding-right 20px
					box-sizing border-box
					input{
						width 120px
					}
				}
				.getNote{
					display flex
					flex-direction row
					align-items center
					justify-content space-between
					&-btn{
						color #3B71D4
					}
				}
					
				.bank_icon{
					display inline-block
					width 14px
					height 14px
				}
			}
		}
		.enter-btn{
			width 300px
			height 44px
			border-radius 22px
			margin 30px auto 70px
		}
		
		 .forget-pwd {
			color: #3B71D4;
			font-size: 28upx;
		}
		 .forget-pwd1 {
			color: #ccc;
			width: 160upx;
			font-size: 28upx;
		}
		
	
	}
</style>
