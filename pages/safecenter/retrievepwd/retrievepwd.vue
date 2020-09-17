<template>
	<view class="container">
		<view class="change-pwd-wrap">
			
			<view class="uni-form-item">
				<view class="uni-form-item-label">新密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd1' placeholder='请输入新的密码' v-model="newPassword"   />
				</view>
				<view class="uni-form-item-icon"
					@click="showPwd1 = !showPwd1"
				>
					<view class="icon" v-if="!showPwd1">&#xe676;</view>
					<view class="icon" v-if="showPwd1">&#xe644;</view>
				</view>
			</view>
			
			
			<view class="uni-form-item">
				<view class="uni-form-item-label">新密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd2' placeholder='请确认新的密码' v-model="newPassword1"   />
				</view>
				<view class="uni-form-item-icon"
					@click="showPwd2 = !showPwd2"
				>
					<view class="icon" v-if="!showPwd2">&#xe676;</view>
					<view class="icon" v-if="showPwd2">&#xe644;</view>
				</view>
			</view>
			
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd">请输入6到15位数字或字母登录密码</text>
		</view>
		<view class="button-wrap">
			<button class="take-sure" @click="handleTap">确认</button>
		</view>
		<!-- <uniBottomNav /> -->
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
				showPwd1:false,
				showPwd2:false,
				code: '',
				mobile:'',
				newPassword:'',
				newPassword1: '',
			}
		},
		components: {
			uniBottomNav,
			uniFormitem
		},
		onLoad(options) {
			this.code = options.code;
			this.mobile = options.mobile;


		},
		methods: {

	

			// 找回密码
			handleTap() {
				
			
				
				if(this.newPassword !== this.newPassword1){
					uni.showToast({
						title:'两次密码不一致!',
						icon:'none'
					})
					
					return false;
				}
				
				if(!this.newPassword){
					uni.showToast({
						title:'请输入密码',
						icon:'none'
					})
					
					return false;
					
					
				}
				
				if( !(/^[a-zA-Z0-9]{6,15}$/.test(this.newPassword))){
					uni.showToast({
						title:'请输入6到15位数字或字母登录密码',
						icon:'none'
					})
					
					return false;
					
				}
				


				let params = {
					loginUserName:this.mobile,
					captchaCode: this.code,
					loginPassword: md5.hex_md5(this.newPassword)
				}
				api.rewriteAppPwd(params).then(res => {
					console.log(res);
					if (res.retCode === "000000") {
						uni.switchTab({
							url: '/pages/mycenter/mycenter'
						})
					}
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
		width: 160upx;
		height: 50upx;
		background: #2493FF;
		border-radius: 25upx;
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
