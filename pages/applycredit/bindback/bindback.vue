<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps active-color='#2494FF' :options="stepList" :active="activeStep"></uni-steps>
		</view>


		<view>
			<view class="urgent-person-wrap">
				<view class="basic-info">

					<view class="uni-form-item">
						<view class="uni-form-item-label">持卡人</view>
						<view class="uni-form-item-type">
							<input type="text" placeholder='请输入持卡人姓名' v-model="name" />
						</view>
						<view class="uni-form-item-icon">
							<!-- <image class="icon-right" src="../../../static/assets/02right.png"></image> -->
						</view>
					</view>

					<view class="uni-form-item">
						<view class="uni-form-item-label">银行卡号</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入银行卡号' type='number' v-model="bankCard" />
						</view>
						<view class="login-picture-verify">
							<image class="reload" src="../../../static/assets/bank.png"></image>
						</view>
					</view>

					<view class="uni-form-item" @click="openBankTap">
						<view class="uni-form-item-label">所属银行</view>
						<view class="uni-form-item-type">
							<input placeholder='请选择所属银行' v-model="bankName" disabled="false" />
						</view>
						<view class="uni-form-item-icon">
							<image class="icon-right" src="../../../static/assets/02right.png"></image>
						</view>
					</view>

					<view class="uni-form-item">
						<view class="uni-form-item-label">预留手机号</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入银行预留手机号' v-model="phone" type="number" />
						</view>
						<view class="uni-form-item-icon">
							<!-- <image class="icon-right" src="../../../static/assets/02right.png"></image> -->
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

			<view class="remark">
				<label class="radio">
					<radio style="transform:scale(0.7)" value="r1" checked="true" />
					已阅读同意 <text class="text">《相关协议相关协议相关协议》</text>
				</label>
			</view>

			<view class="goto-next-wrap">
				<button class="goto-next" @click='bindBankCardTap'>下一步</button>
			</view>
		</view>


		<!-- 银行卡选择 -->
		<uni-popup ref="bankpop" type="bottom">
			<view class='bank-pop'>
				<view class="header">
					<view></view>
					<view class="title">
						<text>支持银行</text>
					</view>
					<view class='close-icon' @click="closeBankPopTap">
						<image src='../../../static/assets/register005.png'></image>
					</view>
				</view>
				<view class="content">
					<view class="item" v-for='(bankItem,bankIndex) in bankData' :key='bankIndex' @click='selectBankTap(bankItem.paramsValue,bankItem.paramsKey)'>
						<view class="icon">
							<image :src='bankItem.paramsDesc'></image>
						</view>
						<text>{{bankItem.paramsValue}}</text>
					</view>

				</view>

			</view>
		</uni-popup>




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
				name: '',				//持卡人名
				bankCard: '',			//银行卡号
				bankName: '',			//银行名称
				phone: '',             //手机号
				verificationCode: '',  //验证码code
				bankCode:'', //银行编码
				bankData: [
					
				],
				// {
				// 	text: '平安银行',
				// 	url: "http://image.yunjiweidian.com/1564645085786pinganBank.png"
				// },
				// {
				// 	text: '浦发银行',
				// 	url: "http://image.yunjiweidian.com/1569461693383pufa.png"
				// },
				// {
				// 	text: '中国农业银行',
				// 	url: "http://image.yunjiweidian.com/1564644893393nongyeBank.png"
				// },
				// {
				// 	text: '中国银行',
				// 	url: "http://image.yunjiweidian.com/1564644928835zhongguoBank.png"
				// },
				// {
				// 	text: '上海银行',
				// 	url: "http://image.yunjiweidian.com/1564645272539shanghaiBank.png"
				// },
				// {
				// 	text: '中国建设银行',
				// 	url: "http://image.yunjiweidian.com/1564644803182jiansheBank.png"
				// },
				// {
				// 	text: '中国光大银行',
				// 	url: "http://image.yunjiweidian.com/1564645184504guangdaBank.png"
				// },
				// {
				// 	text: '兴业银行',
				// 	url: "http://image.yunjiweidian.com/1564645121312xingyeBank.png"
				// },
				// {
				// 	text: '中信银行',
				// 	url: "http://image.yunjiweidian.com/1564645321805zhongxing.png"
				// },
				// {
				// 	text: '招商银行',
				// 	url: "http://image.yunjiweidian.com/1564644991609zhaoshangBank.png"
				// },
				// {
				// 	text: '交通银行',
				// 	url: "http://image.yunjiweidian.com/1564645026787jiaotongBank.png"
				// },
				// {
				// 	text: '广东发展银行',
				// 	url: "http://image.yunjiweidian.com/1569463580463guangfa.png"
				// },
				// {
				// 	text: 'gsyh',
				// 	url: "http://image.yunjiweidian.com/1564644854392gongshanBank.png"
				// },
				// {
				// 	text: '中国邮政储蓄银行',
				// 	url: "http://image.yunjiweidian.com/1564644963957youzhengBank.png"
				// }

				time: 60,
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
		onLoad(){
			this.getBandData();
		},
		methods: {
			
			
			// 获取银行数据
			getBandData(){
				
			
					const consumerId = uni.getStorageSync('consumerId')
					api.incomeData({
						paramsType: 'banktype'
					}).then(res => {
						this.bankData = res.data;;
						// this.incomeData = res.data;
						console.log(res);
						console.log(777777);
					})
				
			},

			// 选择银行卡
			openBankTap() {
				this.$refs.bankpop.open();
			},
			// 关闭银行卡弹框
			closeBankPopTap() {
				this.$refs.bankpop.close();

			},
			
			// 选择银行卡名称
			selectBankTap(text,code){
				this.bankName = text;
				this.bankCode = code;
				this.$refs.bankpop.close();
			},
			
			// 获取验证码
			getVerificationCode(){
				if(!this.name){
					uni.showToast({
						icon:'none',
					    title: '请输入持卡人姓名',
					});
					return false;
				}
				if(!this.bankCard){
					uni.showToast({
						icon:'none',
					    title: '请输入银行卡号',
					});
					return false;
				}
				if(!this.bankName){
					uni.showToast({
						icon:'none',
					    title: '请选择所属银行',
					});
					return false;
				}
				
				if(!this.phone){
					uni.showToast({
						icon:'none',
					    title: '请输入手机号',
					});
					return false;
				}
				if(!utils.formatMobile(this.phone)){
					uni.showToast({
						icon:'none',
					    title: '请输入正确格式的手机号码',
					});
					return false;
					
				}
				
				
				const consumerId = uni.getStorageSync('consumerId')
				let params = {
					consumerId,
					bankCode:this.bankCode,
					cardNo:this.bankCard,
					bankName:this.bankName,
					cardMobile:this.phone
				}
				
				api.bankVerificationCode(params).then(res => {
					console.log(res);
					let time = this.time;
					console.log(3333);
					
					this.setInterval = setInterval(() => {
						console.log(4444);
						if(time === 0){
							// time = 60;
							this.time = 60;
							clearTimeout(this.setInterval);
						}else{
							time--;
							this.time = time;
						}
						
						
					},1000)
				})
				
			},
			
			
			
			// 绑定银行卡
			bindBankCardTap(){
				const consumerId = uni.getStorageSync('consumerId')
				
				api.bindBankCard({consumerId,smsCode: this.verificationCode}).then(res => {
					console.log(res);
					
					if(res.retCode === '000000'){
								
								this.submit();
								
					}
					
					
				})
				
				
				
			},
			
			// 提交申请
			submit(){
				
				const consumerId = uni.getStorageSync('consumerId')
				
				api.submitApply({consumerId}).then(res => {
					if(res.retCode === '000000'){
								uni.showToast({
									title: '提交成功'
								})
								setTimeout(()=>{
									this.getCreditExtensionState(); //获取授信状态
								},2500)
					}
					
				})
				
				
			},
			
			getCreditExtensionState(){
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getCreditExtensionState({consumerId}).then(res => {
					console.log(res);
					let state = res.busiparam.state;
					let url;
					if(state === 'approving'){ //审批中
						url = "/pages/applycredit/applyverdify/applyverdify";
						
					}else if(state === 'pass'){ //审核通过
					url = "/pages/myamount/myamount"
						
					}else if(state === 'refuse'){ //审核被拒绝
						
					}
					
					
					url = "/pages/myamount/myamount";
					
					uni.navigateTo({
						url: url
					})
						
				})
				
			
			},

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
		width: 160upx;
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
	}

	.uni-form-item1 {
		border-bottom: none;
	}

	.uni-form-item-label {
		display: inline-block;
		width: 180upx;
		font-size: 28upx;
		color: #808080;
		padding-right: 20upx;

	}


	.uni-form-item-type {
		flex: 1;
	}

	.uni-form-item input {
		font-size: 28upx !important;
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
		padding-bottom: 10upx;
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


	/* 银行数据弹框 */
	.bank-pop {
		height: 812upx;
		background: #fff;
	}

	.bank-pop .header {
		padding: 24upx;
		width: 100%;
		height: 112upx;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
	}

	.bank-pop .header .title text {
		font-size: 32upx;
		color: #333;

	}

	.bank-pop .header .close-icon {
		width: 48upx;
		height: 48upx;
	}

	.bank-pop .header .close-icon image {
		width: 48upx;
		height: 48upx;
	}

	.bank-pop .content {
		height: 700upx;

		overflow-y: scroll;
		width: 100%;
		overflow: hidden;
		background: #fff;

	}

	.bank-pop .content .item {
		width: 100%;
		height: 88upx;
		display: flex;
		align-items: center;
		border-top: 1upx solid #eee;

	}

	.bank-pop .content .item .icon {
		width: 28upx;
		height: 28upx;
		margin-left: 24upx;
		margin-right: 16upx;

	}

	.bank-pop .content .item .icon image {
		width: 28upx;
		height: 28upx;
	}

	.bank-pop .content .item text {
		padding-left: 12upx;
		font-size: 28upx;
		color: #333;
		line-height: 88upx;
	}
</style>
