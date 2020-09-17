<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps active-color='#2494FF' :options="stepList" :active="activeStep"></uni-steps>
		</view>
		
		<view class="tips">为了保障您的资金安全，需识别本人脸部</view>
		
		<view class="face-recog-wrap">
			<view class="face-wrap">
				<image  class="face-recog" src="../../../static/assets/10.png"></image>
			</view>
			<view class="face-recog-text">
				验证时，请将镜头对准你的脸，按提示操作
			</view>
			
		</view>
		
		
		<view class="id-card-wrap tips-warp">
			<view class="tips-warp-content">
				<view>
					<image  class="card-person" src="../../../static/assets/07.png"></image>
				</view>
				<view class="tips-text">
					不要在昏暗或者逆光下扫描
				</view>
			</view>
			<view class="tips-warp-content">
				<view>
					<image class="card-country" src="../../../static/assets/07.png"></image>
				</view>
				<view class="tips-text">不要低头、斜靠、卧躺</view>
			</view>
		</view>
		
		
		<view class="goto-next-wrap">
			<view class="position-wrap">
				<button class="goto-next" @click='chooseImgTap'>马上开始</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import api from '@/api/apply/index.js'
	import {BASE_URL} from '@/api/api.js'
	
	

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
				activeStep: 1
			}
		},
		components: {
			uniSteps,
			uniFormitem
		},
		methods: {
			// 拍照
			chooseImgTap(){
				
				
				// return false;
				const _self = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //拍照
					success: function(res) {
						const tempFilePath = res.tempFilePaths[0];
						const uploadTask = uni.uploadFile({
							url: BASE_URL +  '/yhdapp/fileupload/upload',
							
							// url: '/yhdapp/fileupload/upload',
														filePath: tempFilePath,
							header: {
								token: uni.getStorageSync('token'),
								appVersion: '1',
								clientType: 'android',
								appId: 'yhd_v1',
							},
							name: 'file',
							success: function(uploadFileRes) {
				
								console.log(uploadFileRes);
								const {
									fileName
								} = JSON.parse(uploadFileRes.data)
								const consumerId = uni.getStorageSync('consumerId')
								api.faceDetectImage({
									filename: fileName,
									consumerId
								}).then(res => {
									
									if(res.retCode === '000000'){
										
										uni.showToast({
											title:'上传成功',
											icon:'none'
										})
										
										setTimeout(()=>{
											uni.navigateTo({
												url: "/pages/applycredit/operateorcertificatiopn/operateorcertificatiopn"
											})
										},2000)
										
										
									}
									
				
									// personImg:'', //身份证正面
									// countryImg:'' ,//身份证反面
				// 					if (type === 'person') {
				// 						_self.personImg = tempFilePath
				// 					} else {
				// 						_self.countryImg = tempFilePath
				
				// 					}
									console.log(777777);
									console.log(res)
								})
							}
						});
					},
					error: function(e) {
						console.log(e);
					}
				});
							
			},

		}
	}
</script>

<style>
	.container {
		position: relative;
		width: 100%;
		height: 100%;
		background: #FFF ;
	}
	.step-wrap {
		padding: 15upx;
		font-size: 12upx;
		background: #fff;
	}
	.tips{
		font-size: 28upx;
		line-height: 128upx;
		color: #333;
		width: 100%;
		text-align: center;
	}
	
	.id-card-wrap {
		background: #fff;
		text-align: center;
		padding-top: 20upx;
		margin-bottom: 20upx;
	}
	
	.face-recog-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.face-recog {
		width: 372upx;
		height: 372upx;
	}
	
	
	
	.face-recog-text {
		width: 456px;
		font-size: 12px;
		color: #AAAAAA;
		text-align: center;
		line-height: 12px;
		margin-top: 20upx;
		margin-bottom: 30upx;
	}
	
	.tips-warp {
		display: flex;
		justify-content: space-around;
	}
	.tips-warp-content {
		/* display: flex; */
		/* flex-direction: column; */
	}
	
	.tips-text {
		width: 200upx;
		font-size: 12px;
		color: #AAAAAA;
		text-align: center;
		line-height: 16px;
		padding: 10upx 20upx;
		text-align: center;
	}
	
	.id-card-wrap .card-person {
		width: 160upx;
		height: 160upx;
	}
	.id-card-wrap .card-country {
		width: 160upx;
		height: 160upx;
	}
	
	.face-wrap {
		
	}
	
	.basic-info {
		padding: 0 15upx;
		background: #fff;
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
	
	/* // */
	.urgent-person-wrap {
		padding: 20upx 0;
	}
	.urgent-person-wrap .urgent-person {
		font-size: 12upx;
		color: #808080;
		padding-left: 20upx;
		padding-bottom: 10upx;
	}
	
	/* // */
	.goto-next-wrap {
		position: absolute;
		left: 0;
		bottom: 40upx;
		width: 100%;
	}
	.goto-next-wrap .position-wrap {
		padding: 0 40upx;
	}
	.position-wrap .goto-next {
		width: 100%;
		height: 80upx;
		color: #fff;
		background: #2494FF ;
		border-radius: 40upx;
		font-size: 32upx;
	}

</style>
