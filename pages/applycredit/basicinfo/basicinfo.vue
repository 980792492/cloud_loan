<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps active-color='#2494FF' :options="stepList" :active="activeStep"></uni-steps>
		</view>
		<view class="tips">
			<uni-notice-bar background-color='#FEF6E0' color='#FA6600' single="true" text="请使用****实名信息进行相关认证"></uni-notice-bar>
		</view>
		<view class="id-card-wrap">
			<view class="id-card-person" @click="upload('person')">

				<image class="card-person" :src="personImg ? personImg : '../../../static/assets/12.png'"></image>
			</view>
			<view class="id-card-country" @click="upload('country')">
				<image class="card-country" :src="countryImg ? countryImg : '../../../static/assets/11.png'"></image>
			</view>
		</view>

		<view class="basic-info">
			<view class="uni-form-item">
				<view class="uni-form-item-label">姓名</view>
				<view class="uni-form-item-type">
					<input placeholder='请输入姓名' v-model="form.name" />
				</view>
				<view class="uni-form-item-icon">
					<!-- <image class="icon-right" src="../../../static/assets/02right.png"></image> -->
				</view>
			</view>

			<view class="uni-form-item">
				<view class="uni-form-item-label">身份证</view>
				<view class="uni-form-item-type">
					<input placeholder='请输入身份证号码' v-model="form.idCard" />
				</view>
				<view class="uni-form-item-icon">
					<!-- <image class="icon-right" src="../../../static/assets/02right.png"></image> -->
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">手机号</view>
				<view class="uni-form-item-type">
					<input type='number' placeholder='请输入手机号码' v-model="form.mobile" />
				</view>
				<view class="uni-form-item-icon">
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item-label">月收入</view>
				<view class="uni-form-item-type">
					<input placeholder='请输入月收入' disabled="false" v-model="form.income" @click='incomeTap' />
				</view>
				<view class="uni-form-item-icon">
					<image class="icon-right" src="../../../static/assets/02right.png"></image>
				</view>
			</view>
			<view class="uni-form-item" @click='openAddrAreatap'>
				<view class="uni-form-item-label">居住地址</view>
				<view class="uni-form-item-type">
					<input placeholder='请选择地址' v-model="form.selectedAreaData" disabled="false" />
				</view>
				<view class="uni-form-item-icon">
					<image class="icon-right" src="../../../static/assets/02right.png"></image>
				</view>
			</view>
			<view class="uni-form-item uni-form-item1">
				<view class="uni-form-item-label">具体地址</view>
				<view class="uni-form-item-type">
					<textarea auto-height placeholder='详细地址,例xx路xx小区xx号xx层xx室' v-model="form.address" />
					</view>
				<view class="uni-form-item-icon">
				</view>
			</view>
		</view>

		<view class="urgent-person-wrap">
			<view class="urgent-person">紧急联系人信息</view>
			<view class="basic-info">

				<view class="uni-form-item">
					<view class="uni-form-item-label">联系人姓名</view>
					<view class="uni-form-item-type">
						<input type="text" placeholder='请输入联系人姓名' v-model="form.emergencyContactName" />
					</view>
					<view class="uni-form-item-icon">
						<!-- <image class="icon-right" src="../../../static/assets/02right.png"></image> -->
					</view>
				</view>



				<view class="uni-form-item">
					<view class="uni-form-item-label">手机号码</view>
					<view class="uni-form-item-type">
						<input type="number" placeholder='请输入联系人手机号码' v-model='form.emergencyContactMobile' />
					</view>
					<view class="uni-form-item-icon">
					</view>
				</view>
				<view class="uni-form-item uni-form-item1" @click='openRelationshipTap'>
					<view class="uni-form-item-label">联系人关系</view>
					<view class="uni-form-item-type">
						<input placeholder='请选择联系人关系'  v-model="form.relationshipValue" disabled="false"/>
					</view>
					<view class="uni-form-item-icon">
						<image class="icon-right" src="../../../static/assets/02right.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="goto-next-wrap">
			<button class="goto-next" @click='goPageTap'>下一步</button>
		</view>

<!-- 收入选择 -->
		<uni-popup ref="popup" type="bottom">
			<view class='income-pop'>
				<view class="header">
					<view></view>
					<view class="title">
						<text>月收入</text>
					</view>
					<view class='close-icon'>
						<image src='../../../static/assets/register005.png'></image>
					</view>
				</view>
				<view class="content">
					<view class="item" v-for='(incomeItem,incomeIndex) in incomeData' :key='incomeItem.id' @click='selectIncomeTap(incomeItem.paramsDesc,incomeItem.paramsValue)'>
						<text>{{incomeItem.paramsDesc}}</text>
					</view>

				</view>

			</view>
		</uni-popup>

	
	<!-- 省市区选择 -->
    <lb-picker ref="picker3"
      v-model="value3"
      mode="multiSelector"
      :list="cityData"
      :level="3"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>
	
	<!-- 联系人关系选择 -->
			<uni-popup ref="relationship" type="bottom">
				<view class='income-pop'>
					<view class="header">
						<view></view>
						<view class="title">
							<text>联系人关系</text>
						</view>
						<view class='close-icon'>
							<image src='../../../static/assets/register005.png'></image>
						</view>
					</view>
					<view class="content">
						<view class="item" v-for='(relationshipItem,relationshipIndex) in relationshipData' :key='relationshipIndex' @click='selectRelationshipTap(relationshipIndex)'>
							<text>{{relationshipItem.text}}</text>
						</view>
	
					</view>
	
				</view>
			</uni-popup>
	
		

	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	import api from '@/api/apply/index.js'
	
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	
	import lbPicker from '@/components/lb-picker/index.vue'
	
	import areaData from '@/utils/area-data-min'
	
	import utils from '@/utils/utils'
	
	import {BASE_URL} from '@/api/api.js'


	export default {
		data() {
			return {
				form:{
					personImg:'', //身份证正面
					countryImg:'' ,//身份证反面
					name:'', //姓名
					idCard: '', //身份证号
					paramsValue:'', //收入id
					addrArea:[], //省市区
					mobile:'', //手机号
					income:'', //月收入
					selectedAreaData: '', //省市区
					address:'', //门牌号
					relationshipValue:'',//选中关系
					contactType:'', //选中关系id
					
					emergencyContactName:'',  //紧急联系人姓名
					emergencyContactMobile:'', //紧急联系人手机号
					
					
					
				},
			
				relationshipData:[  //关系列表
					{
						id:1,
						text:'父母'
					},
					{
						id:2,
						text:'配偶'
					},
					{
						id:3,
						text:'子女'
					}
				],
				
				
				address:'', //具体地址
				cityData:areaData, //城市数据
				currentIndexArr:[], //临时选中城市数据下标
				selectedAreaData:'', //选中省市区
				value3:[],
				index: 0,
				incomeData: [], //收入数据
				income: '', //选中收入
				personImg: '', //身份证正面
				countryImg: '', //身份证反面
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
		onLoad() {
			this.getParamsByType();
		},
		components: {
			uniSteps,
			uniNoticeBar,
			uniFormitem,
			uniPopup,
			lbPicker
		},
		methods: {
			
			// 跳转下一页
			goPageTap() {
				
				
				
				
				// if(!utils.checkIdCardNo(this.form.idCard)){
					
				// 	uni.showToast({
				// 		icon:'none',
				// 	    title: '请输入正确格式的身份证号',
				// 	});
				// 	return false;
				// }
				
				
			// 	uni.navigateTo({
			// 		url: "/pages/applycredit/facerecog/facerecog"
			// 	})
				
			// return false;
				
				
				
				// personImg:'', //身份证正面
				// countryImg:'' ,//身份证反面
				// name:'', //姓名
				// idCard: '', //身份证号
				// mobile:'', //手机号
				// income:'', //月收入
				// selectedAreaData: '', //省市区
				// address:'', //门牌号
				// relationshipValue:'',//选中关系
				// emergencyContactName:'',  //紧急联系人姓名
				// emergencyContactMobile:'', //紧急联系人手机号
				
				if(!this.form.personImg){
					uni.showToast({
						icon:'none',
					    title: '请上传身份证人像面照',
					});
					return false;
				}
				
				if(!this.form.countryImg){
					uni.showToast({
						icon:'none',
					    title: '请上传身份证国徽面照',
					});
					return false;
				}
				
				if(!this.form.name){
					uni.showToast({
						icon:'none',
					    title: '请输入姓名',
					});
					return false;
				}
				if(!this.form.idCard){
					uni.showToast({
						icon:'none',
					    title: '请输入身份证号',
					});
					return false;
				}
				
			
				
				if(!this.form.mobile){
					uni.showToast({
						icon:'none',
					    title: '请输入手机号码',
					});
					return false;
				}
				
				if(!utils.formatMobile(this.form.mobile)){
					uni.showToast({
						icon:'none',
					    title: '请输入正确格式的手机号码',
					});
					return false;
					
				}
				
				if(!this.form.paramsValue){
					uni.showToast({
						icon:'none',
					    title: '请选择月收入',
					});
					return false;
				}
				
				if(!this.form.addrArea[0]){
					uni.showToast({
						icon:'none',
					    title: '请选择省市区',
					});
					return false;
				}
				
				if(!this.form.address){
					uni.showToast({
						icon:'none',
					    title: '请输入详细地址',
					});
					return false;
				}
				
				if(!this.form.emergencyContactName){
					uni.showToast({
						icon:'none',
					    title: '请输入联系人姓名',
					});
					return false;
				}
				
				if(!this.form.emergencyContactMobile){
					uni.showToast({
						icon:'none',
					    title: '请输入联系人手机号码',
					});
					return false;
				}
				
				if(!utils.formatMobile(this.form.emergencyContactMobile)){
					uni.showToast({
						icon:'none',
					    title: '请输入正确格式的联系人手机号码',
					});
					return false;
					
				}
				
				
				
				if(!this.form.contactType){
					uni.showToast({
						icon:'none',
					    title: '请选择联系人关系',
					});
					return false;
				}
				
				const consumerId = uni.getStorageSync('consumerId')
			
				let params = {
					consumerId,
					userName:this.form.name,
					identity:this.form.idCard,
					mobile:this.form.mobile, 
					idFrontImageUrl: this.form.personImg, //身份证正面照片
					idBackImageUrl: this.form.countryImg, //身份证反面照片
					incomeMonth:this.form.paramsValue, //月收入
					province: this.form.addrArea[0], //省
					city: this.form.addrArea[1], //市
					area: this.form.addrArea[2], //区
					detailAddress: this.form.address, //详细地址
					contactName: this.form.emergencyContactName, //紧急联系人
					contactPhone:this.form.emergencyContactMobile, //紧急联系人手机号
					contactType:this.form.contactType, //紧急联系人关系
					clientIp: '192.168.2.3', //手机ip
					clientDeviceId:'23432423432', //客户端设备号:idfa、imei等
					clientOsType:'android',//客户端操作系统:android、ios、h5、pc等
					customerManagerPhone:''	
				}
				
				console.log(this.form);
				console.log(params);
				// return false;
				
				api.createBasicInformation(params).then(res => {
					
					console.log(params);
					if(res.retCode === '000000'){
						uni.navigateTo({
							url: "/pages/applycredit/facerecog/facerecog"
						})
					}
					
					
				})
				
				console.log(3335555);
			
			},
			
			// 打开联系人弹框
			openRelationshipTap(){
				this.$refs.relationship.open();
			},
			
			// 联系人关系选择
			selectRelationshipTap(index){
				let relationshipData = this.relationshipData[index];
				this.form.relationshipValue = relationshipData.text;
				this.form.contactType = relationshipData.id
				this.$refs.relationship.close();
				
			},
			// 关闭联系人弹框
			closeRelationshipTap(){
				this.$refs.relationship.close();
				
			},
			
			// 省市区弹框点开事件
			openAddrAreatap(){
				this.$refs.picker3.show();
			},

			handleChange (item) {
				this.currentIndexArr = item.index;
				
				console.log('change::', this.currentIndexArr);
			},
			handleConfirm (item) {
				let indexArr = item.index;
				let proData = this.cityData[indexArr[0]];
				let cityData = proData.children[indexArr[1]];
				let areaData = cityData.children[indexArr[2]];
				this.form.addrArea = [proData.label,cityData.label,areaData.label];
				this.form.selectedAreaData = `${proData.label} ${cityData.label} ${areaData.label}`
				
			},
			handleCancel (item) {
				console.log('cancel::', item)
			},


			// 打开收入弹框
			incomeTap() {
				this.$refs.popup.open();

			},
			// 关闭银行卡弹框
			closeIncomeTap() {
				this.$refs.popup.close();
						
			},
			
			// 选择收入事件
			selectIncomeTap(text,val){
				this.form.income = text;
				this.form.paramsValue = val
				this.$refs.popup.close();
			},
			
			
			



			// 获取收入	 
			getParamsByType() {
				const consumerId = uni.getStorageSync('consumerId')
				api.incomeData({
					paramsType: 'YHDINCOMEMONTH'
				}).then(res => {
					this.incomeData = res.data;
					console.log(this.incomeData);
					console.log(777777);
				})
			},

			// 上传图像
			upload(type) {
				const _self = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						const tempFilePath = res.tempFilePaths[0];
						console.log(tempFilePath)
						console.log(33335);
								console.log(3337771)

						const uploadTask = uni.uploadFile({
							// url: '/yhdapp/fileupload/upload',
							url: BASE_URL +  '/yhdapp/fileupload/upload',
							filePath: tempFilePath,
							header: {
								token: uni.getStorageSync('token'),
								appVersion: '1',
								clientType: 'android',
								appId: 'yhd_v1',
							},
							name: 'file',
							success: function(uploadFileRes) {
								console.log(333777)

								console.log(uploadFileRes);
								const {
									fileName
								} = JSON.parse(uploadFileRes.data)
								
								
								// personImg:'', //身份证正面
								// countryImg:'' ,//身份证反面
								if (type === 'person') {
									console.log(33666)
									_self.form.personImg = fileName
								} else {
									console.log(337776)
									
									_self.form.countryImg = fileName
								
								}
								
								const consumerId = uni.getStorageSync('consumerId')
								
								console.log(777777777);
								api.faceDetectImage({
									filename: fileName,
									consumerId
								}).then(res => {
									console.log(98989898989);

									// personImg:'', //身份证正面
									// countryImg:'' ,//身份证反面
									if (type === 'person') {
										_self.personImg = tempFilePath
									} else {
										_self.countryImg = tempFilePath

									}
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
		padding: 32upx 0 16upx 0;
		margin-bottom: 20upx;
		/* margin-top: 20upx; */
	}

	.id-card-wrap .card-person {
		width: 230upx;
		height: 144upx;
		margin-bottom: 16upx;
	}

	.id-card-wrap .card-country {
		width: 230upx;
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
		border-bottom: 1upx solid #eee;
		align-items: center;
		padding-top: 30upx;
		padding-bottom: 15upx;
		line-height: 40upx;

	}

	.uni-form-item1 {
		border-bottom: none;
	}

	.uni-form-item input {
		font-size: 28upx !important;
	}
	
	.uni-form-item textarea{
		
		width: 400upx;
		/* height: 120upx; */
		overflow: hidden;
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

	.uni-form-item-type input {
		font-size: 28upx;
	}

	.uni-form-item-type span {
		font-size: 28upx;
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
		overflow: hidden;
		/* padding: 20upx 0; */
	}

	.urgent-person-wrap .urgent-person {
		display: inline-block;
		height: 72upx;
		line-height: 72upx;
		font-size: 24upx;
		color: #808080;

		padding-left: 20upx;
		/* padding-bottom: 10upx; */
	}

	/* // */
	.goto-next-wrap {
		/* background: #F2F2F2; */
		margin-top: 80upx;
		padding: 0 40upx;
		margin-bottom: 60upx;
		
	}

	.goto-next-wrap .goto-next {
		width: 100%;
		height: 80upx;
		color: #fff;
		background: #2494FF;
		border-radius: 40upx;
		font-size: 32upx;
	}

	.income-pop {
		background: #fff;
	}

	.income-pop .header {
		padding: 24upx;
		width: 100%;
		height: 112upx;
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
	}

	.income-pop .header .title text {
		font-size: 32upx;
		color: #333;

	}

	.income-pop .header  .close-icon {
		width: 48upx;
		height: 48upx;
	}

	.income-pop .header  .close-icon image {
		width: 48upx;
		height: 48upx;
	}
	
	.income-pop .content{
		width: 100%;
		overflow: hidden;
		background: #fff;
		
	}
	.income-pop .content .item{
	width: 100%;
	height: 88upx;
	border-top: 1upx solid #eee;

}	
	.income-pop .content .item text{
		padding-left: 12upx;
	font-size: 28upx;
	color: #333;
	line-height: 88upx;
}
	

</style>
