<template>
	<view class="container">
		<view class="change-pwd-wrap">
			<uniFormitem label='手机号码' placeholder='请输入手机号码' childTyle='input' />


			<view class="uni-form-item">
				<view class="uni-form-item-label">验证码</view>
				<view v-if="!isPwd" class="uni-form-item-type">
					<input placeholder='请输入验证码' />
				</view>
				<view class="uni-form-item-icon">
					<button class="icon-button" @click="open">获取验证码</button>
				</view>
			</view>
		</view>
		<view class="forget-pwd-wrap">
			<!-- <text class="forget-pwd">请输入6到15位数字或字母登录密码</text> -->
		</view>
		<view class="button-wrap">
			<button class="take-sure">下一步</button>
		</view>

		<!-- // -->
		<uni-popup ref="popup" type="dialog">
			<view class="content-wrap">
				<view class="title">
					<view>数钱吧C端版</view>
					<view class="close-operate">
						<image class="close-icon" src="../../../static/assets/register005.png" />
					</view>
				</view>
				<view class="tips">
					<view>该手机号 尚未注册数钱吧C端版</view>
				</view>
				<view class="actions">
					<view class="button-wrap">
						<button class="operator">返回注册</button>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			uniBottomNav,
			uniFormitem,
			uniPopup,
			uniPopupDialog
		},
		methods: {
			open() {
				this.$refs.popup.open()
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


	/* // */
	.content-wrap {
		background: #FFF;
		padding: 48upx 0;
		font-size: 32upx;
		border-radius: 16upx;
	}


	.content-wrap .title {
		text-align: center;
		padding: 0upx 48upx;
		border-bottom: 1px solid #EDEDED;
		padding-bottom: 36upx;
		position: relative;
	}
	
	.title .close-operate {
		position: absolute;
		top: 0upx;
		right: 48upx;
	}
	.close-operate .close-icon {
		width: 48upx;
		height: 48upx;
	}

	.content-wrap .tips {
		text-align: center;
		padding: 48upx;
		font-size: 28upx;
		color: #4C4C4C;
		padding-bottom: 60upx;

	}

	.content-wrap .actions {
		padding: 0 48upx;
		display: flex;
		justify-content: space-between;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	}

	.actions .operator {
		width: 496upx;
		height: 80upx;
		color: #fff;
		background: #2393FF;
		border-radius: 40upx;
		font-size: 32upx;
	}
</style>
