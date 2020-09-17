<template>
	<view class="container">
		<view class="change-pwd-wrap">
			
			<view class="uni-form-item">
				<view class="uni-form-item-label">原密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd1' placeholder='请输入原密码' v-model="oldPassword"   />
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
					<input :password='!showPwd2' placeholder='请输入6到15位数字或字母新密码' v-model="newPassword"   />
				</view>
				<view class="uni-form-item-icon"
					@click="showPwd2 = !showPwd2"
				>
					<view class="icon" v-if="!showPwd2">&#xe676;</view>
					<view class="icon" v-if="showPwd2">&#xe644;</view>
				</view>
			</view>
			
			
			<view class="uni-form-item">
				<view class="uni-form-item-label">新密码</view>
				<view class="uni-form-item-type">
					<input :password='!showPwd3' placeholder='请确认新的密码' v-model="newPassword1"   />
				</view>
				<view class="uni-form-item-icon"
					@click="showPwd3 = !showPwd3"
				>
					<view class="icon" v-if="!showPwd3">&#xe676;</view>
					<view class="icon" v-if="showPwd3">&#xe644;</view>
				</view>
			</view>
			
		
		</view>
		<view class="forget-pwd-wrap">
			<text class="forget-pwd" @click="goPageTap">忘记密码</text>
		</view>
		<view class="button-wrap">
			<button class="take-sure" @click='configTap'>确认</button>
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
				showPwd3:false,
				showPwd: true,
				oldPassword: '',
				newPassword: '',
				newPassword1: ''

			}
		},
		components: {
			uniBottomNav,
			uniFormitem
		},
		methods: {

			goPageTap() {
				uni.navigateTo({
					url: '/pages/safecenter/retrievepwd/retrievepwdphone'
				})
			},

			//修改密码事件
			configTap() {
				console.log(8766554442321);
				
				console.log(this.oldPassword);
				if (!this.oldPassword) {
					uni.showToast({
						title: '请输入原密码',
						icon: 'none'
					})
					return false;
				}
				if (!this.newPassword) {
					uni.showToast({
						title: '请输入新密码',
						icon: 'none'
					})
					return false;
				}
				if (!this.newPassword1) {
					uni.showToast({
						title: '请确认新的密码',
						icon: 'none'
					})
					return false;
				}

				if (this.newPassword !== this.newPassword1) {
					uni.showToast({
						title: '两次新密码不一致，请重新输入',
						icon: 'none'
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
				console.log(md5);
				console.log(md5.hex_md5(this.oldPassword));
				console.log(3333333);

				let params = {
					loginUserName: uni.getStorageSync('userInfo').userName,
					oldPassword: md5.hex_md5(this.oldPassword),
					loginPassword: md5.hex_md5(this.newPassword)

				}
				console.log(99999991111)
				console.log(params);
				console.log(api.updatePwd);
				api.updatePwd(params).then(res => {
					if (res.retCode === "000000") {
						uni.showToast({
							title: '密码修改成功!'
						})
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})

						}, 2500)
					}
					console.log(res);
				})




			},

		}
	}
</script>

<style>
	
	
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
	.uni-form-item-icon  .icon {
		font-size: 40upx;
		font-weight: 600;
		color: #4C4C4C;
	}
	
	.container {
		padding: 48upx;
		font-size: 14px;
		line-height: 24px;
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
		color: #2493FF;
		font-size: 24upx;
	}
</style>
