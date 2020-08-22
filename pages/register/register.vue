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
					<input v-model="captchaCode" placeholder='请输入验证码' />
				</view>
				<view class="uni-form-item-icon">
					<button :class="disabledSendCode ? 'icon-button disabled-button' : 'icon-button'" @click="getVerifyCode" :disabled="disabledSendCode">{{showText}}</button>
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<view class="uni-padding-wrap">
				<radio-group name="gender" @change="radioChange">
					<label class="radio">
						<radio value="true" :checked="checked" /><text>我已阅读《数钱吧C端版隐私协议》</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="take-login">
			<button :disabled="!canTakeRegister" 
			:class=" canTakeRegister ? 'login-button' : 'login-button disabled-button' "
			@click="takeRegister"
			>立即注册</button>
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
				captchaCode: '',
				showText: '获取验证码',
				disabledSendCode: false,
				checked: false
			}
		},
		components: {},
		computed: {
			canTakeRegister: function() {
				if (this.loginUserName && this.captchaCode && this.checked) {
					return true
				}
				return false
			}
		},
		methods: {
			getVerifyCode() {
				const values = {
					"loginUserName": this.loginUserName,
					"flag": 1
				}
				if (!values.loginUserName) {
					return false
				}
				api.register(values).then(res => {
					console.log('res', this)
					let showNum = 60;
					this.timer = setInterval(() => {
						showNum = showNum - 1;
						if (showNum <= 0) {
							this.disabledSendCode = false
							this.showText = '获取验证码'
							clearInterval(this.timer)
						}
						this.showText = `${showNum} s`
						this.disabledSendCode = true
					}, 1000)
				})
			},
			radioChange(e) {
				this.checked = !this.checked
			},
			takeRegister() {
				const value = {
					loginUserName: this.loginUserName,
					captchaCode: this.captchaCode
				}
				const url = `/pages/setpassword/setpassword?loginUserName=${value.loginUserName}&captchaCode=${value.captchaCode}`
				uni.navigateTo({
					url: url
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

	.uni-form-item-icon .disabled-button {
		background: #E5F1FF;
		color: #333333;
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

	.take-login .disabled-button {
		background: #E5F1FF;
		color: #333333;
	}
</style>
