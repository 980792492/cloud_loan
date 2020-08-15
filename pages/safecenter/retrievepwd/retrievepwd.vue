<template>
	<view class="container">
		<view class="change-pwd-wrap">
			<uniFormitem label='登录密码' placeholder='请输入新的密码' childTyle='input' isPwd />
			<uniFormitem label='登录密码' placeholder='请确认新密码' childTyle='input' isPwd />
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd">请输入6到15位数字或字母登录密码</text>
		</view>
		<view class="button-wrap">
			<button class="take-sure">确认</button>
		</view>
		<uniBottomNav />
	</view>
</template>

<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	export default {
		data() {
			return {

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

	.change-pwd-wrap {
		padding-top: 140upx;
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
