<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps active-color='#2494FF' :options="stepList" :active="activeStep"></uni-steps>
		</view>

		
		<view>
			<view class="urgent-person-wrap">
				<view class="basic-info">
					<uniFormitem label='持卡人' placeholder='请输入持卡人姓名' childTyle='input' />
					
					<view class="uni-form-item">
						<view class="uni-form-item-label">银行卡号</view>
						<view v-if="!isPwd" class="uni-form-item-type">
							<input placeholder='请输入银行卡号' />
						</view>
						<view class="login-picture-verify">
							<image class="reload" src="../../../static/assets/银行卡.png"></image>
						</view>
					</view>
					
					<view class="uni-form-item">
						<view class="uni-form-item-label">所属银行</view>
						<view v-if="!isPwd" class="uni-form-item-type">
							<input placeholder='请选择所属银行' />
						</view>
						<view class="uni-form-item-icon">
							<image class="icon-right" src="../../../static/assets/02right.png"></image>
						</view>
					</view>
					
					<uniFormitem label='预留手机号' placeholder='请输入银行预留手机号' childTyle='input' />
					<view class="uni-form-item">
						<view class="uni-form-item-label">短信验证</view>
						<view v-if="!isPwd" class="uni-form-item-type">
							<input placeholder='请输入短信验证码' />
						</view>
						<view class="forget-pwd">
							获取验证码
						</view>
					</view>
				</view>
			</view>
			
			<view class="remark">
				<label class="radio">
					<radio style="transform:scale(0.7)" value="r1" checked="true" />
					已阅读同意 <text class="text">《相关协议相关协议相关协议》</text>
				</label>
			</view>
			
			<view class="goto-next-wrap">
				<button class="goto-next">下一步</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"

	export default {
		data() {
			return {
				stepList: [{
					title: '基础信息'
				}, {
					title: '人脸识别'
				}, {
					title: '运营商认证'
				}, {
					title: '银行卡绑定'
				}],
				activeStep: 3
			}
		},
		components: {
			uniSteps,
			uniFormitem
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		background: #F2F2F2;
	}

	.step-wrap {
		padding: 15upx;
		font-size: 12upx;
		background: #fff;
	}

	.id-card-wrap {
		background: #fff;
		text-align: center;
		padding-top: 20upx;
		margin-bottom: 20upx;
		margin-top: 20upx;
	}

	.id-card-wrap .card-person {
		width: 300upx;
		height: 144upx;
	}

	.id-card-wrap .card-country {
		width: 300upx;
		height: 144upx;
	}

	.basic-info {
		padding: 0 15upx;
		background: #fff;
		margin-top: 20upx;
	}

	.basic-info .forget-pwd {
		color: #3B71D4;
		font-size: 14upx;
	}

	/* // */
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

	.uni-form-item-icon .icon-right {
		font-size: 22upx;
		width: 40upx;
		height: 40upx;
		padding-left: 50upx;
		padding-right: 6upx;

	}


	.remark {
		font-size: 16upx;
		padding-left: 20upx;
	}
	.remark .text {
		color: #007AFF;
		/* font-size: 16upx; */
	}


	/* // */
	.urgent-person-wrap {
		padding: 20upx 0;
		padding-bottom:  10upx;
	}

	.urgent-person-wrap .basic-info {
		margin-top: 0;
	}

	.urgent-person-wrap .urgent-person {
		font-size: 12upx;
		color: #808080;
		padding-left: 20upx;
		padding-bottom: 10upx;
	}

	/* // */
	.goto-next-wrap {
		margin-top: 80upx;
		padding: 0 40upx;
	}

	.goto-next-wrap .goto-next {
		width: 100%;
		height: 80upx;
		color: #fff;
		background: #2494FF;
		border-radius: 40upx;
		font-size: 32upx;
	}

	.login-picture-verify {
		display: flex;
		align-items: center;
	}

	.login-picture-verify .picture {
		width: 152upx;
		height: 56upx;
		padding-right: 20upx;
	}

	.login-picture-verify .reload {
		width: 60upx;
		height: 40upx;
		padding: 0 20upx;
		/* padding-left: 30upx; */
	}
</style>
