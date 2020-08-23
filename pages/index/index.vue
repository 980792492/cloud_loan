<template>
	<view class="container">
		<view class="index-top">
			<view class="logo">云好贷</view>
			<view class="text-wrap">
				<view class="text">最高额度</view>
				<view class="text-buttom">
					<button class="apply" @click="open">立即申请</button>
				</view>
			</view>
			<view class="amount">50,000.00</view>
			<view class="image-content">
				<view class="img-item1">
					<image class="img" src="../../static/assets/08.png"></image>
					<view class="text">授信简单</view>
				</view>
				<view class="img-item2">

					<image class="img" src="../../static/assets/08.png"></image>
					<view class="text">极速审核</view>
				</view>
				<view class="img-item3">
					<image class="img" src="../../static/assets/08.png"></image>
					<view class="text">随借随还</view>
				</view>
				<view class="img-item4">
					<image class="img" src="../../static/assets/08.png"></image>
					<view class="text">随借随还</view>
				</view>
			</view>
		</view>
		<uniBottomNav current="index" ></uniBottomNav>

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
						<button class="operator" @click="loan">立即借款</button>
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
	import api from '@/api/index/index.js'


	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components: {
			uniBottomNav,
			uniCard,
			uniPopup,
			uniPopupDialog
		},

		methods: {
			open() {
				api.isCredit({consumerId:'',identityCard:''}).then(res=>{
					if(res.data.canAppy===1){
						//已授信
						this.$refs.popup.open()
					}else if(res.data.isCredit === 1){
						uni.navigateTo({
							url: '/pages/applycredit/applycredit'
						})
					}else{
						uni.showToast({
							icon: 'none',
							title: '您不能申请，请联系客服'
						})
					}
				})
			},
			loan(){
				uni.navigateTo({
					url: '/pages/borrowingProcess/index'
				})
			}
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
		height: 630upx;
		padding: 20upx;
		/* background: #2393FF; */
		background: url(../../static/assets/mine_banner01.png) no-repeat;
		background-size: contain;
	}

	.logo {
		font-size: 40upx;
		line-height: 108upx;
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

	.image-content {
		display: flex;
		justify-content: space-around;
		padding-top: 53upx;
		padding-bottom: 53upx;
		margin-top: 180upx;
		background: #FFFFFF;
		border-radius: 20upx;

	}

	.img-item1,
	.img-item2,
	.img-item3,
	.img-item4 {
		flex: 1;
		text-align: center;
	}

	.image-content image {
		width: 78upx;
		height: 86upx;
	}

	.image-content .text {
		font-size: 12upx;
		margin-top: 20upx;
		color: #555555;
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
