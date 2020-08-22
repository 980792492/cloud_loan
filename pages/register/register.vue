<template>
	<view class="container">
		<text class="welcome">欢迎来到数钱吧C端版</text>
		<view class="login-wrap">
			<view class="uni-form-item">
				<view class="uni-form-item-label">手机号码</view>
				<view class="uni-form-item-type">
					<input v-model="loginUserName" placeholder='请输入手机号码' />
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">验证码</view>
				<view class="uni-form-item-type">
					<input placeholder='请输入验证码' />
				</view>
				<view class="uni-form-item-icon">
					<button class="icon-button" @click="getVerifyCode" >{{showText}}</button>
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<view class="uni-padding-wrap">
				<label class="radio">
					<!-- <radio class="check-icon" value="r1" checked="true" />我已阅读《数钱吧C端版隐私协议》</label> -->
					<radio class="check-icon" value="r1" />我已阅读《数钱吧C端版隐私协议》</label>
			</view>
		</view>
		<view class="take-login">
			<button class="login-button">立即注册</button>
		</view>
	</view>
</template>
<script>
	import api from '@/api/login/index.js'
	import md5 from '@/utils/JQuery.md5.js'

	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				loginUserName: '',
				showText: '获取验证码'
			}
		},
		components: {
		},

		methods: {
			getVerifyCode() {
				const values = {
					"loginUserName": this.loginUserName,
					"flag": 1
				}
				api.register(values).then(res => {
					console.log('res', this)
					const showNum = 60
					this.timer = setTimeout(() => {
						showNum --;
						this.showText = `${showNum} s`
					}, 60000)
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
		width: 160upx;
		height: 50upx;
		background: #2493FF;
		border-radius: 25upx;
	}

	.forget-pwd-wrap {
		padding-top: 14upx;
	}

	.forget-pwd {
		/* color: #2493FF; */
		font-size: 24upx;
	}

	.check-icon {
		font-size: 30upx;
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
</style>
