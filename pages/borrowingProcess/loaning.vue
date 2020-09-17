<template>
	<view>
		<view class="top-title">借款金额</view>
		<view class="amountInput">
			<input class="uni-input" v-model="amount" placeholder-class='palceholderStyle' minLength='4' :maxlength="quotaAmountLen" type="number" @input="amountChangeTap" :placeholder="placeholderText"  />
			<icon v-show="amount!=''"  @click="amount=''" class="clear-input" type="clear" size="26"/>
		</view>
		<view class="line"></view>
		<view class="content"></view>
		
		
		<view class="basic-info" v-if='state'>
			<view class="uni-form-item"  @click="showDate('popup')">
				<view class="uni-form-item-label">月收入</view>
				<view class='right-info'>
					<view class="label">{{instalment+'个月'}}</view>
					<view class="uni-form-item-icon">
						<image class="icon-right" src="../../static/assets/02right.png"></image>
					</view>
				</view>
			</view>
			
			<view class="uni-form-item" >
				<view class="uni-form-item-label">月利率</view>
				<view class='right-info'>
					<view class="label">{{data.rate + '%'}}</view>
					<!-- <view class="uni-form-item-icon"> -->
						<!-- <image class="icon-right" src="../../static/assets/02right.png"></image> -->
					<!-- </view> -->
				</view>
			</view>
			
			<view class="uni-form-item" >
				<view class="uni-form-item-label">总利息</view>
				<view class='right-info'>
					<view class="label">{{'¥' + data.interest}}</view>
			
				</view>
			</view>
			
			<view class="uni-form-item"  @click="showDate('popup1')">
				<view class="uni-form-item-label">还款计划</view>
				<view class='right-info'>
					<view class="label">{{'首期' + data.repayPlanList[0].planRepayDate + ' 应还¥' + data.repayPlanList[0].planRepayAmount}}</view>
					<view class="uni-form-item-icon">
						<image class="icon-right" src="../../static/assets/02right.png"></image>
					</view>
				</view>
			</view>
			
			<view class="uni-form-item"  >
				<view class="uni-form-item-label">银行卡</view>
				<view class='right-info'>
					<view class="uni-form-item-icon1">
						<image class="icon-right" :src="userInfo.bankPicUrl"></image>
					</view>
					<view class="label">{{userInfo.bankName + '(' + cardNo +')'}}</view>
					<!-- <view class="label">{{userInfo.mobile}}</view> -->
					
				</view>
			</view>
			
			<view class="uni-form-item" >
				<view class="uni-form-item-label">金融机构</view>
				<view class='right-info'>
					<view class="label">小盈金融科技</view>
			
				</view>
			</view>
			
			
			<view class="uni-form-item"  >
				<view class="uni-form-item-label">预留手机号</view>
				<view class='right-info'>
					<!-- <view class="uni-form-item-icon"> -->
						<!-- <image class="icon-right" src="../../static/assets/02right.png"></image> -->
					<!-- </view> -->
					<view class="label">{{formatMobile}}</view>
					
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
		
	<!-- 	<view v-if='state'>
			
			
			
			<uni-list>
				
			    <uni-list-item title="借款期限" @onClick="showDate('popup')" :rightText="instalment+'个月'" />
			    <uni-list-item title="月利率" :rightText="data.rate + '%'" :showArrow="false" />
				<uni-list-item title="总利息" :rightText="'¥' + data.interest" :showArrow="false"  />
				<uni-list-item title="还款计划" :rightText="'首期' + data.repayPlanList[0].planRepayDate + ' 应还¥' + data.repayPlanList[0].planRepayAmount" @onClick="showDate('popup1')"/>
				<uni-list-item title="银行卡" :showArrow="false" >
					<view slot="right"> -->
						<!-- <img class="bank_icon" src="../../static/assets/gsyh.png" alt=""> -->
				<!-- 		<text style="font-size: 14px;">{{debitCardData.bankName}}</text>
					</view>
				</uni-list-item>
				<uni-list-item title="金融机构" rightText="小盈金融科技" :showArrow="false" ></uni-list-item>
				
				<view class="basic-info">
					<view class="uni-form-item">
						<view class="uni-form-item-label">预留手机号</view>
						<view class="uni-form-item-type">
							<input placeholder='请输入银行预留手机号' v-model="phone" type="number" />
						</view>
						<view class="uni-form-item-icon">
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
				
			
			</uni-list>
		</view> -->
		<view class="remark" v-if='state'>
				<view class="icon"  @click='agreementTap'>
					<!-- 选中 -->
					<image v-if='agreementState'  src="../../static/assets/register004.png"></image>
					<!-- 未选中 -->
					<image v-else  src="../../static/assets/register003.png"></image>
				</view>
			
				<text class="text">已阅读同意 <text class="text" @click="showDate('popup2')">《相关协议》</text></text>
			</label>
		</view>
		<!-- <view v-if='state' :class="agreementState? 'loan-btn' : 'loan-btn unchecked-btn'"  @click="nowLoan">
			<text>立即借款</text>
		</view> -->
		<button v-if='state' :class="canTakeRegister? 'loan-btn' : 'loan-btn unchecked-btn'"  @click="nowLoan">立即借款</button>
		<view>
			<uni-popup ref='popup' type='bottom'>
				<view class="popup-center">
					<view class="popup-center-title">借款期限<icon @click="hideDate('popup')" class="close-btn" type="clear" size="26"/></view>
					<view class="popup-center-list">
						<view class="popup-center-li" v-for="(instalmentItem,instalmentIndex) in instalmentData" :key='instalmentItem.id' @click="changeDate(instalmentItem)" >{{instalmentItem.paramsDesc}}
						
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
		<view>
			<uni-popup ref='popup1' type='bottom'>
				<view class="popup-center">
					<view class="popup-center-title">还款计划<icon @click="hideDate('popup1')" class="close-btn" type="clear" size="26"/></view>
					<view class="popup-center-list">
						<view class="popup-center-li popup-center-plan" v-for="(repayPlanItem,repayPlanIndex) in data.repayPlanList" :key='repayPlanItem.period' >
							<text class="time">{{repayPlanItem.planRepayDate}}</text>
							<text class="amount">{{repayPlanItem.planRepayAmount}}元</text>
						</view>
					</view>
				</view>
			</uni-popup>
			<uni-popup ref='popup2'>
				<view class="popup-agreement">
					<v-tabs
					  height="50px"
					  v-model="activeTab"
					  :scroll="false"
					  activeColor="#333333"
					  color="#808080"
					  lineHeight="0"
					  :tabs="['投保须知/担保说明', '保险条款', '保险协议']"
					>
					</v-tabs>
					<span class="agreement-content">
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
					</span>
					<button type="primary" class="agreement-btn">我已阅读全部保险协议并确认</button>
				</view>
				<icon @click="hideDate('popup2')" class="agree-close"  type="cancel" color="#fff" size="36"/>
			</uni-popup>
		</view>
	
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import api from '@/api/apply/index.js'
	import utils from '@/utils/utils.js'
	
	import login from '@/api/login/index.js'
	
	
	
	export default {
		components: {uniList,uniListItem,uniPopup},
		data(){
			return {
				verificationCode:'',
				quotaAmountLen:0,
				quotaAmount1:'',
				phone:'',
				time:60,
				formatMobile:'', //手机号
				mobile:'', //手机号
				agreementState:false,
				debitCardData:{}, //银行信息
				data:{
					rate:'',
					interest:'',
					repayPlanList:[{
						planRepayDate:'',
						planRepayAmount:''
					}]
				
					
				},
				cardNo:'',
				userInfo:{},
				instalmentData:[],//分期数据
				instalment:0, //分期
				state:false,
				quotaAmount:0, //可借总额
				placeholderText:'',  
				quota:"",
				activeTab: 0,
				amount:'',
				date: 3,
				dateList:[3,6,9,12],
				repaymentPlan:[1,1,1,1],
				AGREEMENT: [
					'本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品本授权是在蚂蚁白领合作机构购买特定产',
					' 2本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品或使用该服务的对价选择进行信用付款涉及的用户个人信息查询、使用及授信、贷后管理相关事宜与信用服务提供方所订立的授权契约。',
					' 3本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品或使用该服务的对价选择进行信用付款涉及的用户个人信息查询、使用及授信、贷后管理相关事宜与信用服务提供方所订立的授权契约。',
				]
			}
		},
		
		computed: {
			canTakeRegister: function() {
				if (this.agreementState && this.verificationCode) {
					return true
				}
				return false
			}
		},
		onLoad(){
			
			this.userInfo = uni.getStorageSync('userInfo');
			let cardNo = this.userInfo.cardNo;
			this.cardNo = cardNo.substring(cardNo.length - 4, cardNo.length);
			
			console.log(this.userInfo);
			console.log(this.userInfo.bankName)
			console.log(4444);
			this.mobile = uni.getStorageSync('loginUserName');
			this.formatMobile = this.mobile.substring(0,3) + '****' + this.mobile.substring(7)
			console.log(this.formatMobile);
			
			this.getParamsByType(); //获取分期数
			this.getQuota(); //获取额度
			this.getDebitCard(); //获取银行信息
			
		},
		methods: {
			
			// 获取验证码
			getVerificationCode(){
				
				
				
				if(!this.mobile){
					uni.showToast({
						icon:'none',
					    title: '请输入手机号',
					});
					return false;
				}
		
				
				let params = {
					loginUserName:this.mobile,
					flag:5
				}
				
				
				login.register(params).then(res => {
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
			
			
			
			
			// 状态
			agreementTap(state){
				console.log(33333);
				console.log(state);
				this.agreementState = !this.agreementState;
				console.log(this.agreementState)
				
			},
			
			// 获取银行信息
			getDebitCard(){
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getDebitCard({consumerId}).then(res =>{
					console.log(res);
					if(res.retCode === "000000"){
						this.debitCardData = res.busiparam;
					}
					console.log('++++++++++');
				})
				
			},
			
			
			// 获取还款分期数
			getParamsByType() {
				const consumerId = uni.getStorageSync('consumerId')
				api.incomeData({
					paramsType: 'YHDPERIOD'
				}).then(res => {
					this.instalmentData = res.data;
					this.instalment = this.instalmentData[0].paramsValue;
					console.log(this.instalmentData);
					console.log(this.instalment);
					console.log(777777);
				})
			},
			
			// 获取额度
			getQuota(){
				
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getQuotaQuery({consumerId}).then(res => {
					console.log(888777666555)
					console.log(res);
					this.quotaAmount = res.busiparam.availableQuota;
					this.quota = utils.formatMoney(this.quotaAmount)
					this.quotaAmount1 = this.quotaAmount / 100;
					this.quotaAmountLen = parseInt(this.quotaAmount1).length;
					
					console.log(this.quota);
					this.placeholderText = `最高可借${this.quota}`
				})
			},
			
			
			//输入金额事件
			amountChangeTap(){
				// if(this.amount  < )
				if(this.amount >= 1000){
					if(this.amount > this.quotaAmount1){
						
						uni.showToast({
							title:`最高可借${this.quotaAmount}元`,
							icon:'none'
						})
						this.state = false;
					}else{
						console.log(this.amount);
						console.log(this.amount % 100);
						if((this.amount % 100) !== 0){
							console.log(3333);
							uni.showToast({
								title:`借款金额需为100整数倍`,
								icon:'none'
							})
							
							this.state = false;
							
						}else{
							this.getComputeRepayPlan();
							
						}
						console.log(4444466666888888)
						
						
					}
				}else{
					uni.showToast({
						title:`借款不得低于1000元`,
						icon:'none'
					})
					this.state = false;
					
				}
			
				
				console.log(333333);
				
				
				
			},
			
			// 测试还款计划
			getComputeRepayPlan(){
				
				let params = {
					amount: this.amount,
					periods: this.instalment,
					orderId:''
				}
				
				api.computeRepayPlan(params).then(res => {
					console.log(res);
					if(res.retCode === "000000"){
						this.data = res.busiparam;
						console.log(this.data);
						console.log(999988877776666)
						this.state = true;
						
					}
					
				})
				
				
			},
			
			
			nowLoan(){
				
				
				if(!this.agreementState){
					uni.showToast({
						title:'请阅读同意《相关协议》',
						icon: 'none'
					})
					return false;
				}
				
				const consumerId = uni.getStorageSync('consumerId')
				
				
				let params = {
					consumerId,
					amount:this.amount,
					periods: this.instalment,
					clientIp:'192.168.1.1',
					clientDeviceId:'1111',
					clientOsType:'android',
					captchaCode: this.verificationCode
					
				}
				api.createOrder(params).then(res => {
					if(res.retCode === "000000"){
						this.checkNeedUnionSign(res.busiparam.orderId); //确认是否需要网联签约
						
					}
					console.log(res);
				})
				// /createOrder
				
				
				
			
				// uni.showModal({
				//     content: '借款订单已过期，请重新发起借款申请',
				// 	cancelText:'回首页',
				// 	confirmText:'重新发起',
				//     success: function (res) {
				//         if (res.confirm) {
				//             console.log('用户点击确定');
				//         } else if (res.cancel) {
				//             console.log('用户点击取消');
				//         }
				//     }
				// });
			},
			
			//确认是否需要网联签约
			checkNeedUnionSign(loanOrderId){
				const consumerId = uni.getStorageSync('consumerId')
				
				let params = {
					consumerId,
					loanOrderId:loanOrderId,
					
					
				}
				api.checkNeedUnionSign(params).then(res => {
					
					if(res.retCode === "000000"){
						let url;
						if(res.busiparam.needSign === 1){
							url = `/pages/borrowingProcess/signUp?orderId=${loanOrderId}`
						}else{
							url = `/pages/borrowingProcess/confirmLoan?orderId=${loanOrderId}`
						}
						
						console.log(res);
						
						uni.navigateTo({
							url:url
						})
						
					}
				
					
				})
				
			},
			
			// 借款期限事件
			changeDate(item){
				console.log(11111);
				console.log(item);
				
				this.instalment = item.paramsValue
				this.getComputeRepayPlan();
				
				this.$refs.popup.close()
			},
			showDate(ref){
				console.log(1111122222);
				console.log(ref);
				
				
				 this.$refs[ref].open()
			},
			hideDate(ref){
				this.$refs[ref].close()
			}
		}
	}
</script>

<style lang="stylus">
	page{
		background #F2F2F2;
	}
	.line{
		height 10px
		background-color #F2F2F2;
	}
	.top-title{
		background #fff;
		font-family PingFangSC-Regular
		font-size 16px
		color #808080
		line-height 60px
		text-align center
	}
	.amountInput{
		background #fff;
		display flex
		flex-direction row
		justify-content center
		align-items center
		width 100%
		height 68px
		position relative
	}
	.clear-input{
		position absolute
		right 90px
	}
	.uni-input{
		display block
		text-align center
		width 240px
		font-size 30px
		font-weight bold
		border-bottom 1px solid #eee
		
	}
	.palceholderStyle{
		font-size 20px
		color #ccc
		font-weight normal
	}
	.bank_icon{
		display inline-block
		width 14px
		height 14px
	}
	.loan-btn{
		width 300px
		height 44px
		border-radius 22px
		margin 50px auto 70px
		background #2494FF
		color #fff
		
	}
	
		.loan-btn text{
				color #fff
		}
	.unchecked-btn{
		background rgba(36,148,255,0.4)
		// background-color 
	}
	
	.basic-info {
		padding: 0 0 0 24upx;
		box-sizing border-box;
		background: #fff;
		margin-top: 20upx;
	}
	/* // */
	.uni-form-item {
		width: 100%;
		box-sizing border-box;
		display: flex;
		border-bottom: 1upx solid #eee;
		align-items: center;
		justify-content: space-between;
		padding-top: 30upx;
		padding-bottom: 15upx;
		padding-right 24upx;
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
	
	
	.right-info{
		display flex
		align-items center
		
		
	}
	.right-info .label{
		display: inline-block;
		// width: 180upx;
		font-size: 28upx;
		color: #333333;
		padding-right: 2upx;
		
	}
	
	.uni-form-item-icon1 {
		width 28upx
		height 28upx
		margin-right 18upx
		
	}
	.uni-form-item-icon1 .icon-right{
		width 28upx
		height 28upx
		vertical-align top
	}
	
	.uni-form-item-icon {
		// padding-right: 10upx;
		/* font-size: 80upx; */
	}
	
	.uni-form-item-icon .icon-right {
		font-size: 22upx;
		width: 28upx;
		height: 40upx;
		// padding-left: 6upx;
		// padding-right: 6upx;
	
	}
	
	.basic-info .forget-pwd {
		color: #3B71D4;
		font-size: 28upx;
	}
	
	.basic-info .forget-pwd1 {
		color: #ccc;
		width: 190upx;
		font-size: 28upx;
	}
	
	
	.remark{
		margin-top 20upx;
		display flex
		align-items center
		font-size 12px
	}
	.remark .icon{
		margin-left 24upx;
		width 24upx;
		height 24upx;
		margin-right 12upx;
	}
	.remark .icon image{
		width 100%;
		height 100%;
	}
	.popup-center{
		background-color #fff
		width 100%
		height 447px
		border-radius 8px 8px 0 0
		&-title{
			text-align center
			height 56px
			line-height 56px
			border-bottom 1px solid #EEEEEE
			font-size 16px
			color #333
			font-weight bold
			font-family: PingFangSC-Medium;
			position relative
		}
		.close-btn{
			position absolute
			right 10px
		}
		&-li{
			width 100%
			height 44px
			font-size 14px
			color #333
			line-height 44px
			border-bottom 1px solid #EEEEEE
			text-indent 1em
		}
		&-plan{
			display flex
			flex-direction row
			justify-content space-between
			.time{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #333333;
				line-height: inherit;
			}
			.amount{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #333333;
				text-align: right;
				line-height: inherit;
				padding-right 14px
			}
		}
		
	}
	.popup-agreement{
		width 320px
		height 442px
		background-color #fff
		border-radius 8px
	}
	.agreement-content{
		display block
		width 100%
		height 320px
		box-sizing border-box
		padding 0 20px
		overflow-y scroll
		font-size: 14px;
		color: #666666;
		line-height: 22px;
	}
	.agreement-btn{
		width 300px
		height 44px
		border-radius 22px
		margin 10px auto
	}
	.agree-close{
		color #fff
		margin 20px 45%  0
	}
</style>
