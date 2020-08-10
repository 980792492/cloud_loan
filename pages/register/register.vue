<template>
	<view class="container">
		<text>欢迎来到云好贷</text>
		<view>
			<page-head title="form"></page-head>
			<view class="uni-padding-wrap uni-common-mt">
				<form @submit="formSubmit" @reset="formReset">
					<view class="uni-form-item uni-column">
						<input class="uni-input" name="nickname" placeholder="请输入姓名" />
					</view>
					<view class="uni-form-item uni-column">
						<view>
							<input class="uni-input" name="nickname" placeholder="请输入验证码" />
						</view>
						<text>获取验证码</text>
					</view>
					<view class="uni-btn-v">
						<button type='primary' form-type="submit">立即登录</button>
					</view>
				</form>
			</view>
		</view>

		<uni-bottom-nav></uni-bottom-nav>
	</view>
</template>
<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"

	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components: {
			uniBottomNav,
		},

		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
