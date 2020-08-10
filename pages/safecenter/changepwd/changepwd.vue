<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<input class="uni-input" name="nickname" placeholder="请输入旧密码" />

			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" name="nickname" placeholder="请输入新密码" />

			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" name="nickname" placeholder="请输入新密码" />
			
			</view>
			<view class="uni-form-item uni-column">
				<button type='primary' form-type="submit">立即登录</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
