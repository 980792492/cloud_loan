<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps active-color='#2494FF' :options="stepList" :active="activeStep"></uni-steps>
		</view>

		<!-- 默认 服务密码 -->
		<view class="basic-info" v-if='operatorCertiType === 0'>
			<view class="uni-form-item">
				<view class="uni-form-item-label">手机号码</view>
				<view class="uni-form-item-type">
					<input type="number" v-model='phone' placeholder='请输入手机号码' />
				</view>
			</view>
			<!-- <uniFormitem label='手机号码' placeholder='请输入手机号码' childTyle='input' /> -->
			<view class="uni-form-item uni-form-item1">
				<view class="uni-form-item-label">服务密码</view>
				<view class="uni-form-item-type">
					<input placeholder='请输入服务密码' v-model="serviceCode" />
				</view>
				<view class="forget-pwd" @click="forgetTap">
					忘记密码?
				</view>
			</view>
		</view>


		<view v-else-if='operatorCertiType === 2'>
			<view class="basic-info">
				<view class="uni-form-item uni-form-item1">
					<view class="uni-form-item-label">手机号码</view>
					<view class="uni-form-item-type">
						<input type="number" v-model='phone' disabled="false" />
					</view>
				</view>
			</view>
			<view class="urgent-person-wrap">
				<view class="urgent-person">登陆校验</view>
				<view class="basic-info">
					<view class="uni-form-item">
						<view class="uni-form-item-label">图形验证</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入图形验证码' v-model="loginVerificationCode" />
						</view>
						<view class="login-picture-verify">
							<view class="picture">
								<text>{{loginVerificationCodeImg}}</text>
							</view>
							<!-- <image class="picture" :src="loginVerificationCode"></image> -->
							<image @click='getLoginVerificationCode(2)' class="reload" src="../../../static/assets/refresh.png"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else-if='operatorCertiType === 3'>
			<view class="basic-info">
				<view class="uni-form-item uni-form-item1">
					<view class="uni-form-item-label">手机号码</view>
					<view class="uni-form-item-type">
						<input type="number" v-model='phone' disabled="false" />
					</view>
				</view>
			</view>
			<view class="urgent-person-wrap">
				<view class="urgent-person">登陆校验</view>
				<view class="basic-info">
					<view class="uni-form-item uni-form-item1">
						<view class="uni-form-item-label">短信验证</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入短信验证码' v-model="verificationCode" />
						</view>
						<view class="forget-pwd" v-if='time === 60' @click='getVerificationCode'>
							获取验证码
						</view>
						<view class="forget-pwd forget-pwd1" v-else>
							重新发送 {{time}} S
						</view>

					</view>
				</view>
			</view>
		</view>
		<view v-else-if='operatorCertiType === 4'>
			<view class="basic-info">
				<view class="uni-form-item uni-form-item1">
					<view class="uni-form-item-label">手机号码</view>
					<view class="uni-form-item-type">
						<input type="number" v-model='phone' disabled="false" />
					</view>
				</view>
			</view>
			<view class="urgent-person-wrap">
				<view class="urgent-person">登陆校验</view>
				<view class="basic-info">
					<view class="uni-form-item">
						<view class="uni-form-item-label">图形验证</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入图形验证码' v-model="loginVerificationCode" />
						</view>
						<view class="login-picture-verify">
							<view class="picture">
								<text>{{loginVerificationCodeImg}}</text>
							</view>
							<!-- <image class="picture" :src="loginVerificationCode"></image> -->
							<image @click='getLoginVerificationCode(2)' class="reload" src="../../../static/assets/refresh.png"></image>
						</view>
					</view>
					<view class="uni-form-item uni-form-item1">
						<view class="uni-form-item-label">短信验证</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入短信验证码' v-model="verificationCode" />
						</view>
						<view class="forget-pwd" v-if='time === 60' @click='getVerificationCode'>
							获取验证码
						</view>
						<view class="forget-pwd forget-pwd1" v-else>
							重新发送 {{time}} S
						</view>

					</view>
				</view>
			</view>

		</view>


		<view v-else-if='operatorCertiType === 5'>
			<view class="basic-info">
				<view class="uni-form-item uni-form-item1">
					<view class="uni-form-item-label">手机号码</view>
					<view class="uni-form-item-type">
						<input type="number" v-model='phone' disabled="false" />
					</view>
				</view>
			</view>
			<view class="urgent-person-wrap">
				<view class="urgent-person">登陆校验</view>
				<view class="basic-info">
					<view class="uni-form-item uni-form-item1">
						<view class="uni-form-item-label">短信验证</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入短信验证码' v-model="verificationCode" />
						</view>
						<view class="forget-pwd" v-if='time === 60' @click='getVerificationCode'>
							获取验证码
						</view>
						<view class="forget-pwd forget-pwd1" v-else>
							重新发送 {{time}} S
						</view>

					</view>
					<view class="uni-form-item">
						<view class="uni-form-item-label">图形验证</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入图形验证码' v-model="loginVerificationCode" />
						</view>
						<view class="login-picture-verify">
							<view class="picture">
								<text>{{loginVerificationCodeImg}}</text>
							</view>
							<!-- <image class="picture" :src="loginVerificationCode"></image> -->
							<image @click='getLoginVerificationCode(2)' class="reload" src="../../../static/assets/refresh.png"></image>
						</view>
					</view>
				</view>
			</view>

		</view>


		<!-- 下一步 -->
		<view class="goto-next-wrap">
			<button class="goto-next" @click='handleTap'>下一步</button>
		</view>

	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import api from '@/api/apply/index.js'

	import utils from '@/utils/utils'



	export default {
		data() {
			return {
				state: 1, // 1代表首次 2代表二次
				loginOperatorsState: 1, //登陆运营商 1代表首次 2代表二次
				loginVerificationCodeState: 1, //获取图型验证码 1代表首次 2代表二次
				phone: '', //手机号
				serviceCode: '', //服务密码
				loginVerificationCode: '', //图片验证码输入
				loginVerificationCodeImg: '', //图片验证码
				verificationCode: '', //验证码
				verificationCodeState: false, //验证码状态
				verificationCodeText: '获取验证码', //文案
				time: 60,

				operatorCertiType: 0, //0代表默认  1: 直接调登录接⼝2: 需要获取图⽚⽚验证码，然后再调登录 接⼝3: 需要发送短信证码，然后再调登录 接⼝4: 先获取图⽚⽚验证码，再发送短信验证 码，然后再调登录接⼝5: 先发送短信验证码，再获取图⽚⽚验证 码，然后再调登录接⼝



				stepList: [{
					title: '基础信息'
				}, {
					title: '人脸识别'
				}, {
					title: '运营商认证'
				}, {
					title: '银行卡绑定'
				}],
				activeStep: 2
			}
		},
		components: {
			uniSteps,
			uniFormitem
		},
		methods: {


			// 忘记密码
			forgetTap() {
				uni.showModal({
					title: '温馨提示',
					content: '请拨打您的手机号的运营商，选择人工服务，根据提示修改服务密码',
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						}
					}
				});
			},

			// 下一步
			handleTap() {


				if (this.operatorCertiType === 0) {
					if (!this.phone) {
						uni.showToast({
							icon: 'none',
							title: '请输入手机号码',
						});
						return false;
					}
					if (!utils.formatMobile(this.phone)) {
						uni.showToast({
							icon: 'none',
							title: '请输入正确格式的手机号',
						});
						return false;
					}
					if (!this.serviceCode) {
						uni.showToast({
							icon: 'none',
							title: '请输入服务密码',
						});
						return false;
					}
					// 验证运营商服务密码
					this.verificationServiceCode();

				} else {

					if (this.operatorCertiType === 2 || this.operatorCertiType === 4 || this.operatorCertiType === 5) {
						if (!this.loginVerificationCode) {
							uni.showToast({
								icon: 'none',
								title: '请输入图形验证码',
							});

							return false;
						}
					}

					if (this.operatorCertiType === 3 || this.operatorCertiType === 4 || this.operatorCertiType === 5) {
						if (!this.verificationCode) {
							uni.showToast({
								icon: 'none',
								title: '请输入短信验证码',
							});

							return false;
						}
					}

					let params = {
						consumerId,
						picCode: this.loginVerificationCode,
						smsCode: this.verificationCode,
						type: this.state
					}
					if (this.state === 1) {
						this.loginOperators(params)
					} else {
						this.againLoginOperators(params)
					}
				}
				// this.submit();

			},




			// 验证服务密码
			verificationServiceCode() {
				const consumerId = uni.getStorageSync('consumerId')

				api.verificationServiceCode({
					servicePassword: this.serviceCode,
					consumerId
				}).then(res => {

					console.log(res);


					if (res.busiparam.nextInput === 0) {
						uni.navigateTo({
							url: "/pages/applycredit/bindback/bindback"
						})
					} else if (res.busiparam.nextInput === 1) {

						const consumerId = uni.getStorageSync('consumerId')

						let params = {
							consumerId,
							picCode: '',
							smsCode: '',
							type: ''
						}
						this.loginOperators(params) //登陆运营商


					} else if (res.busiparam.nextInput === 2) {

						this.operatorCertiType = 2;
						this.getLoginVerificationCode(1);
					} else if (res.busiparam.nextInput === 3) {

						this.operatorCertiType = 3;
					} else if (res.busiparam.nextInput === 4) {
						this.operatorCertiType = 4;
						this.getLoginVerificationCode(1);
					} else if (res.busiparam.nextInput === 5) {
						this.operatorCertiType = 5;
					}
				})



			},



			// 首次登陆运营商
			loginOperators(params) {
				api.loginOperators(params).then(res => {
					console.log(res);
					this.handle(res);

				})
			},


			// 二次 登陆运营商
			againLoginOperators() {
				api.againLoginOperators(params).then(res => {
					console.log(res);
					this.handle(res);

				})


			},

			// 登陆运营商后操作
			handle(res) {
				console.log(res);
				this.state = 2;

				if (res.busiparam.nextInput === 0) {
					uni.navigateTo({
						url: "/pages/applycredit/bindback/bindback"
					})
				} else if (res.busiparam.nextInput === 1) {
					const consumerId = uni.getStorageSync('consumerId')
					let params = {
						consumerId,
						picCode: '',
						smsCode: '',
						type: ''
					}
					this.loginOperators(params) //登陆运营商

				} else if (res.busiparam.nextInput === 2) {

					this.operatorCertiType = 2;
					this.getLoginVerificationCode(1);
				} else if (res.busiparam.nextInput === 3) {

					this.operatorCertiType = 3;
				} else if (res.busiparam.nextInput === 4) {
					this.operatorCertiType = 4;
					this.getLoginVerificationCode(1);
				} else if (res.busiparam.nextInput === 5) {
					this.operatorCertiType = 5;
				}

			},






			// 首次获取图形验证码
			getLoginVerificationCode(type) {
				const consumerId = uni.getStorageSync('consumerId')


				if (this.state === 1) {
					api.loginVerificationCode({
						consumerId,
						type: type || 2
					}).then(res => {
						console.log(res)
						this.loginVerificationCodeImg = res.busiparam.repayOrderId
					})

				} else {
					api.againLoginVerificationCode({
						consumerId,
						type: type || 2
					}).then(res => {
						console.log(res)
						this.loginVerificationCodeImg = res.busiparam.repayOrderId
					})
				}



			},



			// 获取验证码
			getVerificationCode() {
				if (!this.loginVerificationCode) {
					uni.showToast({
						icon: 'none',
						title: '请输入图形验证码',
					});
					return false;
				}
				const consumerId = uni.getStorageSync('consumerId')

				if (this.state === 1) {
					api.verificationCode({
						consumerId,
						type: 1
					}).then(res => {
						console.log(res);
						let time = this.time;
						console.log(3333);

						this.setInterval = setInterval(() => {
							console.log(4444);
							if (time === 0) {
								// time = 60;
								this.time = 60;
								clearTimeout(this.setInterval);
							} else {
								time--;
								this.time = time;
							}


						}, 1000)
					})

				} else {
					api.againVerificationCode({
						consumerId,
						type: 1
					}).then(res => {
						console.log(res);
						let time = this.time;
						console.log(3333);

						this.setInterval = setInterval(() => {
							console.log(4444);
							if (time === 0) {
								// time = 60;
								this.time = 60;
								clearTimeout(this.setInterval);
							} else {
								time--;
								this.time = time;
							}
						}, 1000)
					})

				}


			},



			// 提交
			submit() {

				const consumerId = uni.getStorageSync('consumerId')

				api.verificationCode({
					consumerId,
					picCode: this.loginVerificationCode,
					smsCode: this.verificationCode
				}).then(res => {
					console.log(res);
					if (res.retCode === '000000') {

						uni.navigateTo({
							url: "/pages/applycredit/bindback/bindback"
						})
					}
				})



			}



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
		font-size: 28upx;
	}

	.basic-info .forget-pwd1 {
		color: #ccc;
		width: 180upx;
		font-size: 28upx;
	}

	/* // */
	.uni-form-item {
		width: 100%;
		display: flex;
		border-bottom: 1upx solid #eee;
		align-items: center;
		padding-top: 30upx;
		padding-bottom: 15upx;
		line-height: 40upx;

		background: #fff;
	}

	.uni-form-item1 {
		border-bottom: none;
	}



	.uni-form-item input {
		font-size: 28upx !important;
	}

	.uni-form-item-label {
		display: inline-block;
		width: 180upx;
		font-size: 28upx;
		color: #808080;
		display: inline-block;
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

	/* // */
	.urgent-person-wrap {
		padding: 20upx 0;
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
		background: #007AFF;
		text-align: center;
	}

	.login-picture-verify .picture text {
		font-size: 28upx;
		color: #fff;
		line-height: 56upx;
	}


	.login-picture-verify .reload {
		width: 30upx;
		height: 30upx;
		padding: 0 20upx;
		padding-left: 30upx;
	}
</style>
