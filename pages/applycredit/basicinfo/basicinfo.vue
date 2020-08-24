<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps active-color='#2494FF' :options="stepList" :active="activeStep"></uni-steps>
		</view>
		<!-- <view class="tips">
			<uni-notice-bar
			 background-color='#FEF6E0'
			 color='#FA6600'
			 single="true" text="请使用****实名信息进行相关认证"></uni-notice-bar>
		</view> -->
		<view class="id-card-wrap">
			<view class="id-card-person" @click="upload">
				<image  class="card-person" src="../../../static/assets/12.png"></image>
			</view>
			<view class="id-card-country"  @click="upload">
				<image class="card-country" src="../../../static/assets/12.png"></image>
			</view>
		</view>
		
		<view class="basic-info">
			<view class="uni-form-item">
				<view class="uni-form-item-label">月收入</view>
				<view v-if="!isPwd" class="uni-form-item-type">
					<input placeholder='请输入月输入' />
				</view>
				<view class="uni-form-item-icon">
					<image class="icon-right" src="../../../static/assets/02right.png"></image>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">居住地址</view>
				<view v-if="!isPwd" class="uni-form-item-type">
					<input placeholder='请选择地址' />
				</view>
				<view class="uni-form-item-icon">
					<image class="icon-right" src="../../../static/assets/02right.png"></image>
				</view>
			</view>
		</view>
		
		<view class="urgent-person-wrap">
			<view class="urgent-person">紧急联系人信息</view>
			<view class="basic-info">
				<uniFormitem label='手机号码' placeholder='请输入手机号码' childTyle='input' />
				<uniFormitem label='手机号码' placeholder='请输入手机号码' childTyle='input' />
				<view class="uni-form-item">
					<view class="uni-form-item-label">联系人关系</view>
					<view v-if="!isPwd" class="uni-form-item-type">
						<input placeholder='请选择联系人关系' />
					</view>
					<view class="uni-form-item-icon">
						<image class="icon-right" src="../../../static/assets/02right.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="goto-next-wrap">
			<button class="goto-next">下一步</button>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	// import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import api from '@/api/apply/index.js'
	
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
				activeStep: 0
			}
		},
		components: {
			uniSteps,
			// uniNoticeBar,
			uniFormitem
		},
		methods: {
			upload(){
				const _self = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						const tempFilePaths = res.tempFilePaths;
						 const uploadTask = uni.uploadFile({
						  url : '/yhdapp/fileupload/upload',
						  filePath: tempFilePaths[0],
						  header:{
							  token: uni.getStorageSync('token'),
							  appVersion: '1',
							  clientType:'android',
							  appId: 'yhd_v1',
						  },
						  name: 'file',
						  success: function (uploadFileRes) {
						   const {fileName} = JSON.parse(uploadFileRes.data)
						   const consumerId = uni.getStorageSync('consumerId')
						   api.faceDetectImage({filename:fileName,consumerId}).then(res=>{
							   console.log(res)
						   })
						  }
						 });
					},
					error : function(e){
					 console.log(e);
					}
			   });
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		background: #F2F2F2 ;
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
		margin-top: 80upx;
		padding: 0 40upx;
	}
	.goto-next-wrap .goto-next {
		width: 100%;
		height: 80upx;
		color: #fff;
		background: #2494FF ;
		border-radius: 40upx;
		font-size: 32upx;
	}

</style>
