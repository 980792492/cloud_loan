<template>
	<view class="container">
		<view class="change-pwd-wrap">
			<view class="blod-wrap">
				<text class="blod">设置登录密码</text>用于登录数钱吧C端版
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">登录密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd' v-model="loginPassword" placeholder='请输入登录密码' />
				</view>
				<view class="uni-form-item-icon" @click="takeShowPwd">
					<view class="icon" v-if="!showPwd">&#xe676;</view>
					<view class="icon" v-if="showPwd">&#xe644;</view>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">登录密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd' v-model="loginPassword1" placeholder='请确认登录密码' />
				</view>
				<view class="uni-form-item-icon">
					<!-- <button :class="disabledSendCode ? 'icon-button disabled-button' : 'icon-button'" @click="getVerifyCode" :disabled="disabledSendCode">{{showText}}</button> -->
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd">请输入6到15位数字或字母登录密码</text>
		</view>
		<view class="button-wrap">
			<button class="take-sure" @click="takeSure">确认</button>
		</view>
	</view>
</template>

<script>
	import api from '@/api/login/index.js'
	import md5 from '@/utils/JQuery.md5.js'
	export default {
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.loginUserName = option.loginUserName
			this.captchaCode = option.captchaCode
		},
		data() {
			return {
				loginPassword: '',
				loginPassword1: '',
				showPwd: false
			}
		},
		components: {},
		methods: {
			takeShowPwd() {
				this.showPwd = !this.showPwd
			},
			takeSure() {
				if (this.loginPassword.length < 6) {
					uni.showToast({
						icon:'none',
					    title: '请设置您的密码',
					});
					return false
				}
				if (this.loginPassword !== this.loginPassword1) {
					uni.showToast({
						icon:'none',
					    title: '请确认两次密码是否一致',
					});
					return false
				}
				const values = {
					loginUserName: this.loginUserName,
					captchaCode: this.captchaCode,
					loginPassword: md5.hex_md5(this.loginPassword),
				}
				api.setPwd(values).then(res => {
					const url = `/pages/login/login?loginUserName=${values.loginUserName}`
					uni.navigateTo({
						url: url
					})
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 48upx;
		font-size: 28upx;
		line-height: 24px;
	}

	.change-pwd-wrap {
		padding-top: 140upx;
	}

	.blod-wrap {
		margin-bottom: 140upx;
	}

	.blod {
		font-size: 40upx;
		margin-right: 10upx;
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

	.forget-pwd {
		color: #666666;
		font-size: 24upx;
	}
</style>
