<template>
	<view class="container">
		<text class="welcome">欢迎来到数钱吧C端版</text>
		<view class="login-wrap">
			<view class="uni-form-item">
				<view class="uni-form-item-label">手机号码</view>
				<!-- // 不是密码类型 -->
				<view class="uni-form-item-type">
					<input  placeholder='请输入手机号' v-model="loginUserName"  />
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">登录密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd' placeholder='请输入登录密码' v-model="password"   />
				</view>
				<view class="uni-form-item-icon"
					@click="takeShowPwd"
				>
					<view class="icon" v-if="!showPwd">&#xe676;</view>
					<view class="icon" v-if="showPwd">&#xe644;</view>
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd" @click='jumpPageTap("/pages/register/register")'>注册</text>
			<text class="forget-pwd" @click='jumpPageTap("/pages/safecenter/retrievepwd/retrievepwdphone")'>忘记密码</text>
			
		</view>
		<view class="take-login">
			<button class="login-button" @click="loginTap">立即登录</button>
		</view>
		<!-- <uni-bottom-nav /> -->
	</view>
</template>
<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import api from '@/api/login/index.js'
	import md5 from '@/utils/JQuery.md5.js'
	export default {
		onLoad: function(option) {
			this.loginUserName = option.loginUserName
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				loginUserName: '',
				password:'',
				showPwd: false
			}
		},
		components: {
			uniBottomNav,
			uniFormitem
		},
		mounted() {
		},
		methods: {
			
			jumpPageTap(url){
				console.log(333);
				uni.navigateTo({
					url: url
				
				})
			},
			takeShowPwd() {
				this.showPwd = !this.showPwd
			},
			loginTap(){
				
			
				if(!this.loginUserName){
					uni.showToast({
						icon:'none',
					    title: '请输入手机号',
					});
					return
				}
				if(!this.password){
					uni.showToast({
						icon:'none',
						title: '请输入密码'
					})
					return
				}
			
				api.login({loginUserName:this.loginUserName, loginPassword: md5.hex_md5(this.password)}).then(res => {
					const {consumerId, loginUserName, token, userId, identityCard} = res.busiparam
					uni.setStorageSync('consumerId', consumerId)
					uni.setStorageSync('loginUserName', loginUserName)
					uni.setStorageSync('token', token)
					uni.setStorageSync('userId', userId)
					identityCard && uni.setStorageSync('userId', userId)
					
				uni.switchTab({
					url:'/pages/index/index'
				})
					
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 48upx;
		font-size: 14px;
		line-height: 24px;
	}
	
	.welcome {
		color: #4C4C4C;
		font-size: 40upx;
		line-height: 280upx;
	}
	.login-wrap {
	}
	
	.forget-pwd-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 28upx;
	}
	.forget-pwd {
		color: #2493FF;
		font-size: 28upx;
	}
	
	.take-login {
		margin-top: 180upx;
	}
	.login-button {
		height: 80upx;
		font-size: 32upx;
		border-radius: 40upx;
		background: #2393FF;
		color: #fff;
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
</style>
