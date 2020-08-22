<template>
	<view class="container">
		<text class="welcome">欢迎来到数钱吧C端版</text>
		<view class="login-wrap">
			<view class="uni-form-item">
				<view class="uni-form-item-label">手机号码</view>
				<!-- // 不是密码类型 -->
				<view class="uni-form-item-type">
					<input :placeholder='请输入手机号' v-model="usernmame"  />
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">登录密码</view>
				<view class="uni-form-item-type">
					<input :placeholder='请输入登录密码' v-model="password" password='isPwd'  />
				</view>
				<view class="uni-form-item-icon">
					<view class="icon">&#xe676;</view>
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd">忘记密码</text>
		</view>
		<view class="take-login">
			<button class="login-button" @click="login">立即登录</button>
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
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				usernmame: '',
				password:''
			}
		},
		components: {
			uniBottomNav,
			uniFormitem
		},
		mounted() {
		},
		methods: {
			login(){
				if(!this.usernmame){
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
				api.login({usernmame:this.usernmame, password: md5.hex_md5(this.password)}).then(res => {
					console.log(res)
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
