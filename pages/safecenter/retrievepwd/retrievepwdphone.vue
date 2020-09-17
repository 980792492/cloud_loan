<template>
	<view class="container">
		<view class="change-pwd-wrap">
			<view class="uni-form-item">
				<view class="uni-form-item-label">手机号</view>
				<view class="uni-form-item-type">
					<input  type='number' placeholder='请输入手机号码' v-model="mobile"   />
				</view>
				<view class="uni-form-item-icon"
					@click="takeShowPwd"
				>
					<!-- <view class="icon" v-if="!showPwd">&#xe676;</view> -->
					<!-- <view class="icon" v-if="showPwd">&#xe644;</view> -->
				</view>
			</view>
			
			<!-- <uniFormitem label='手机号码' placeholder='请输入手机号码' childTyle='input' /> -->
			<view class="uni-form-item">
				<view class="uni-form-item-label">验证码</view>
				<view  class="uni-form-item-type">
					<input placeholder='请输入验证码'  v-model="code"/>
				</view>
				<view class="uni-form-item-icon">
					<!-- <button class="icon-button" @click="getCodeTap">获取验证码</button> -->
					
					<view class="icon-button" v-if='time === 60' @click='getVerificationCode'>
						获取验证码
					</view>
					<view class="forget-pwd forget-pwd1" v-else>
						重新发送 {{time}} S
					</view>
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<!-- <text class="forget-pwd">请输入6到15位数字或字母登录密码</text> -->
		</view>
		<view class="button-wrap">
			<button class="take-sure" @click='handleTap'>下一步</button>
		</view>

		<!-- // -->
		<uni-popup ref="popup" type="dialog">
			<view class="content-wrap">
				<view class="title">
					<view>数钱吧C端版</view>
					<view class="close-operate">
						<image class="close-icon" src="../../../static/assets/register005.png" />
					</view>
				</view>
				<view class="tips">
					<view>该手机号 尚未注册数钱吧C端版</view>
				</view>
				<view class="actions">
					<view class="button-wrap">
						<button class="operator">返回注册</button>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import api from '@/api/login/index.js'
	import md5 from '@/utils/JQuery.md5.js'
	
	

	export default {
		data() {
			return {
				code:'', //code
				time:60,
				mobile:'', //手机号
				password:'', //密码

			}
		},
		components: {
			uniBottomNav,
			uniFormitem,
			uniPopup,
			uniPopupDialog
		},
		methods: {
			
			takeShowPwd(){
				
			},
			
			getVerificationCode(){
				
				if(!this.mobile){
					uni.showToast({
						title:'请输入手机号码',
						icon:'none'
					})
					return false;
				}
				let params = {
					loginUserName:this.mobile,
					flag:3
				}
				api.register(params).then(res => {
					
					
					if(res.retCode === '000000'){
						this.setInterval = setInterval(() => {
							console.log(4444);
							let time = this.time;
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
					console.log(res);
				})
					
			},
			open() {
				this.$refs.popup.open()
			},
			// 找回密码
			handleTap(){
				
				if(!this.mobile){
					uni.showToast({
						title:'请输入手机号码',
						icon:'none'
					})
					return false;
				}
				
				if(!this.code){
					uni.showToast({
						title:'请输入验证码',
						icon:'none'
					})
					return false;
				}
				
				uni.navigateTo({
					url:`/pages/safecenter/retrievepwd/retrievepwd?code=${this.code}&mobile=${this.mobile}`
				})
				
				return false;
				
				
				let params = {
					loginUserName: uni.getStorageSync('userInfo').userName,
					captchaCode:1212,
						loginPassword: 	md5.hex_md5(this.password)		
									}
				api.rewriteAppPwd(params).then(res => {
					console.log(res);
					if(res.retCode === "000000"){
						uni.navigateTo({
							url:'/pages/safecenter/retrievepwd/retrievepwd'
						})
					}
				})
				
			},
		}
	}
</script>

<style>
	.container {
		padding: 48upx;
		font-size: 14px;
		line-height: 24px;
	}

	.change-pwd-wrap {
		padding-top: 140upx;
	}

	.uni-form-item {
		width: 100%;
		display: flex;
		border-bottom: 1upx solid #313131;
		align-items: center;
		padding-top: 30upx;
		padding-bottom: 15upx;
		line-height: 40upx;
	}

	.uni-form-item-label {
		font-size: 36upx;
		color: #323232;
		padding-right: 20upx;

	}

	.uni-form-item-type {
		flex: 1;
	}

	.uni-form-item-icon {
		padding-right: 10upx;
		/* font-size: 80upx; */
	}

	.uni-form-item-icon .icon-button {
		font-size: 22upx;
		color: #fff;
		width: 180upx;
		height: 50upx;
		background: #2493FF;
		border-radius: 25upx;
		text-align: center;
		line-height: 50upx;
	}




	.take-sure {
		height: 80upx;
		font-size: 32upx;
		border-radius: 40upx;
		background: #2393FF;
		color: #fff;
	}
	

	.forget-pwd-wrap {
		padding-top: 14upx;
		padding-bottom: 200upx;
	}
	
	
	
	.uni-form-item {
		width: 100%;
		display: flex;
		border-bottom: 1upx solid #313131;
		align-items: center;
		padding-top: 30upx;
		padding-bottom: 15upx;
		line-height: 40upx;
	}
	.uni-form-item-label {
		font-size: 36upx;
		color: #323232;
		padding-right: 20upx;
		
	}
	.uni-form-item-type {
		flex: 1;
	}
	.uni-form-item-icon {
		padding-right: 10upx;
		/* font-size: 80upx; */
	}
	.uni-form-item-icon  .icon {
		font-size: 40upx;
		font-weight: 600;
		color: #4C4C4C;
	}
	

	.forget-pwd {
		
		width: 180upx;
		height: 50upx;
		background: #E5F2FF;
		border-radius: 25upx;
		text-align: center;
		line-height: 50upx;
		
		
		color: #666666;
		font-size: 24upx;
	}


	/* // */
	.content-wrap {
		background: #FFF;
		padding: 48upx 0;
		font-size: 32upx;
		border-radius: 16upx;
	}


	.content-wrap .title {
		text-align: center;
		padding: 0upx 48upx;
		border-bottom: 1px solid #EDEDED;
		padding-bottom: 36upx;
		position: relative;
	}
	
	.title .close-operate {
		position: absolute;
		top: 0upx;
		right: 48upx;
	}
	.close-operate .close-icon {
		width: 48upx;
		height: 48upx;
	}

	.content-wrap .tips {
		text-align: center;
		padding: 48upx;
		font-size: 28upx;
		color: #4C4C4C;
		padding-bottom: 60upx;

	}

	.content-wrap .actions {
		padding: 0 48upx;
		display: flex;
		justify-content: space-between;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	}

	.actions .operator {
		width: 496upx;
		height: 80upx;
		color: #fff;
		background: #2393FF;
		border-radius: 40upx;
		font-size: 32upx;
	}
</style>
