<template>
	<view class="container">
		<text class="welcome">欢迎来到数钱吧C端版</text>
		<view class="login-wrap">
			<uniFormitem label='手机号码' childTyle='input'   />
			<uniFormitem label='登录密码' childTyle='input' isPwd />
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd">忘记密码</text>
		</view>
		<view class="take-login">
			<button class="login-button">立即登录</button>
		</view>
		<!-- <uni-bottom-nav /> -->
	</view>
</template>
<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"

	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components: {
			uniBottomNav,
			uniFormitem
		},

		methods: {

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
		padding-top: 14upx;
	}
	.forget-pwd {
		color: #2493FF;
		font-size: 24upx;
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
