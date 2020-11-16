<template>
	<view class="container">
		<view class="index-top">
			<view v-if='availableQuota'>
				<view class="logo" v-if='userInfo.realName'>{{userInfo.realName +' '+ userInfo.mobile }}</view>
				<view class="logo" v-else>您的昵称</view>
				<view class="text-wrap">
					<view class="text" >云好贷 剩余额度(元)</view>
					<view class="text-buttom">
						<button class="apply" @click="jumpUrl('/pages/borrowingProcess/index')">立即提款</button>
					</view>
				</view>
				<view class="amount">{{availableQuota}}</view>
			</view>
			<view v-else>
				<view class="logo">{{userInfo.userName }}</view>
				<view class="text-wrap">
					<view class="text" >您还未获取额度，点击立即申请获取</view>
					<view class="text-buttom">
						<button class="apply" @click="applyTap">立即申请</button>
					</view>
				</view>
				<view class="amount">--</view>
			</view>
			
			<view class="content" v-if='availableQuota'>
				<view class="content-text">
					<view class="all">授信额度<text class="amount-text">{{quota}}</text></view>
					<view class="used">已用额度<text class="amount-text">{{useQuota}}</text></view>
				</view>
				<view class="image-content">
					<button class="record" @click="jumpUrl('/pages/record/index')">借还记录</button>
					<button class="clear" @click="jumpUrl('/pages/repayment/index')">立即还款</button>
					<button class="before" @click="jumpUrl('/pages/repayment/advance')">提前结清</button>
				</view>
			</view>
			<view class="operate-wrap">
				<view class="safe" @click="jumpUrl('/pages/safecenter/safecenter')">
					<image class="safe-img" src="../../static/assets/mine_icon01.png"></image>
					<text class="safe-text">安全中心</text>
					<text class="safe-text-linlk">修改密码等</text>
				</view>
				<view class="about-us">
					<image class="us-img" src="../../static/assets/mine_icon02.png"></image>
					<text class="us-text">关于我们</text>
				</view>
				<view class="about-us" @click='loginoutTap'>
					<image class="us-img" src="../../static/assets/mine_icon02.png"></image>
					<text class="us-text">退出登陆</text>
				</view>
			</view>
			
		</view>
		<!-- <uniBottomNav current="my"></uniBottomNav> -->

		<uni-popup ref="popup" type="dialog">
			<view class="content-wrap">
				<view class="title">
					<view>数钱吧C端版</view>
				</view>
				<view class="tips">
					<view>你已有云好贷授信额度，是否立即借款?</view>
				</view>
				<view class="actions">
					<view class="button-wrap">
						<button class="back">返回</button>
					</view>
					<view class="button-wrap">
						<button class="operator">立即借款</button>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'

	import api from '@/api/apply/index.js'
	import indexApi from '@/api/index/index.js'
	
	
	import utils from '@/utils/utils.js'
	import loginApi from '@/api/login/index.js'
	

	export default {
		data() {
			return {
				userInfo:{},
				// this.availableQuota = utils.formatMoney(this.data.availableQuota);
				// this.quota:''m = utils.formatMoney(this.data.quota)
				// this.useQuota = utils.formatMoney(this.data.quota - this.data.availableQuota)
				
				availableQuota:'',
				quota:'',
				useQuota:'',
				data:{},
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components: {
			uniBottomNav,
			uniCard,
			uniPopup,
			uniPopupDialog
		},
		onShow(){
			console.log(3434234324);
			console.log(uni.getStorageSync('userInfo'));
			if(!uni.getStorageSync('userInfo') || !(uni.getStorageSync('userInfo').bankName) ){
				console.log(1234);
				this.getUserInfo();
			}else{
				console.log(1234444);
				
				this.userInfo = uni.getStorageSync('userInfo');
			}
			
			// 是否授信
			this.queryCredit();
				
		},

		methods: {
			
			
			applyTap() {
				console.log(3333);
			
				const consumerId = uni.getStorageSync('consumerId')
				const identityCard = uni.getStorageSync('identityCard')
				if (consumerId) {
					indexApi.isCredit({
						consumerId,
						identityCard: ''
					}).then(res => {
						console.log(res);
						if (res.retCode === '4001') {
							uni.navigateTo({
								url: '/pages/applycredit/basicinfo/basicinfo'
							})
			
						} else {
							let busiparam = res.busiparam;
			
							if (busiparam.isCredit === 1) {
								//已授信
								this.$refs.popup.open()
							} else if (busiparam.canAppy === 1) {
								uni.navigateTo({
									url: '/pages/applycredit/applycredit'
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: '您不能申请，请联系客服'
								})
							}
			
						}
			
			
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			
			//退出登陆
			loginoutTap(){
				
				
				uni.showModal({
					content: '你确定退出账户？',
					success: function(res) {
						if (res.confirm) {
							loginApi.loginout().then(res => {
								console.log(res);
								console.log(res.retCode);
								if(res.retCode === "000000"){
									uni.clearStorageSync();
									uni.navigateTo({
										url: '/pages/login/login'
									})
								}
								
							})
							console.log('用户点击确定');
						}
					}
				});	
			},
			
			
			
			//获取用户信息
		getUserInfo(){
			const consumerId = uni.getStorageSync('consumerId')
			
			loginApi.getUserInfo({consumerId}).then(res =>{
				console.log(res);
				
				if(res.retCode === "000000"){
					this.userInfo = res.data;
					console.log(this.userInfo);
					uni.setStorageSync('userInfo', this.userInfo)
				}
				
			})
		},
		
		
		
		// 是否授信
		queryCredit(){
			
			// return false;
			// this.getQuota();
			
			
			const consumerId = uni.getStorageSync('consumerId')
			
			api.queryCredit({consumerId}).then(res => {
				console.log(res)
				
				if(res.retCode === "000000"){
					this.getQuota();
				
				}
				
					
				
			})
			
			
		},
			
			
			
			// 获取额度
			getQuota(){
				
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getQuotaQuery({consumerId}).then(res => {
					console.log(888777666555)
					console.log(res);
					this.data = res.busiparam;
					// this.quotaAmount = this.data.availableQuota;
					
					this.availableQuota = utils.formatMoney(this.data.availableQuota);
					this.quota = utils.formatMoney(this.data.quota)
					let useQuota = this.data.quota - this.data.availableQuota;
					console.log(useQuota);
					this.useQuota =useQuota ? utils.formatMoney(useQuota) : 0;
					console.log(this.useQuota);
					
				})
			},
			
			
			open() {
				this.$refs.popup.open()
			},
			jumpUrl(url){
				console.log(3333);
				console.log(url);
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>

<style>
	.container {
		height: 100%;
		font-size: 14upx;
		line-height: 24upx;
		background: #F1F1F1;
	}

	.index-top {
		height:  454upx;
		padding: 20upx;
		/* background: #2393FF; */
		background: url(../../static/assets/bgc.png) no-repeat;
		background-size: contain;
	}

	.logo {
		font-size: 40upx;
		line-height: 80upx;
		font-weight: bold;
		color: #fff;
	}

	.text-wrap {
		display: flex;
		height: 70upx;
		align-items: center;
	}

	.text {
		font-size: 26upx;
		color: #fff;
		flex: 1;
	}

	.text-buttom {
		text-align: right;
	}

	.apply {
		width: 180upx;
		height: 68upx;
		font-size: 26upx;
		border-radius: 35upx;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: rgba(35, 147, 255, 1);
	}

	.amount {
		font-size: 80upx;
		color: #fff;
		line-height: 110upx;
	}
	
	.content {
		padding: 0 24upx;
		padding-top: 53upx;
		padding-bottom: 53upx;
		margin-top: 50upx;
		background: #FFFFFF;
		border-radius: 20upx;
	}
	.content-text {
		display: flex;
		/* justify-content: spa; */
		font-size: 26upx;
		color: #333333;
		padding-bottom: 80upx;
	}
	.content-text .all {
		width: 53%;
		/* flex: 1; */
		text-align: left;
	}
	.content-text .used {
		width: 47%;
		/* flex: 1; */
		text-align: left;
	}
	
	.content-text .amount-text {
		padding-left: 16upx;
		font-size: 36upx;
		color: #2493FF;
	}
	
	

	.image-content {
		display: flex;
		justify-content: space-around;
		/* padding-top: 53upx;
		padding-bottom: 53upx;
		margin-top: 180upx;
		background: #FFFFFF;
		border-radius: 20upx; */
	}
	
	.record, .clear, .before {
		width: 170upx;
		height: 60upx;
		font-size: 24upx;
		background: #D8ECFF;
		border-radius: 30upx;
		border: none;
		outline: none;
		color: #4C4C4C;
	}


	.operate-wrap {
		background: #fff;
		padding: 0 24upx;
		margin-top: 24upx;
		border-radius: 20upx;
	}
	.operate-wrap .safe, .operate-wrap .about-us {
		display: flex;
		align-items: center;
		height: 113upx;
	}
	
	.operate-wrap .safe	 {
		border-bottom: 1px solid #F1F1F1;
	}
		
	.safe-img, .us-img {
		width: 52upx;
		height: 52upx;
		padding: 0 10upx;
	}
	.safe-text, .us-text, .safe-text-linlk {
		font-size: 28upx;
		color: #333333;
		flex:1;
	}
	
	.safe-text-linlk {
		color: #2493FF;
		font-size: 24upx;
		text-align: right;
	}

	
	
	/* // popup */
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
	.actions .back {
		width: 220upx;
		height: 80upx;
		color: #fff;
		background: #7F7F7F;
		border-radius:40upx;
		
	}
	.actions .operator {
		width: 220upx;
		height: 80upx;
		color: #fff;
		background: #2393FF;
		border-radius:40upx;
		font-size: 32upx;
	}
	
</style>
