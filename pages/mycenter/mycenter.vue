<template>
	<view class="container">
		<view class="index-top">
			<view class="logo">孙先生 13800138000</view>
			<view class="text-wrap">
				<view class="text">云好贷 剩余额度(元)</view>
				<view class="text-buttom">
					<button class="apply" @click="open">立即提款</button>
				</view>
			</view>
			<view class="amount">50,000.00</view>
			<view class="content">
				<view class="content-text">
					<view class="all">授信额度<text class="amount-text">50,000.00</text></view>
					<view class="used">已用额度<text class="amount-text">10,000.00</text></view>
				</view>
				<view class="image-content">
					<button class="record">借还记录</button>
					<button class="clear">立即还款</button>
					<button class="before">提前结清</button>
				</view>
			</view>
			<view class="operate-wrap">
				<view class="safe">
					<image class="safe-img" src="../../static/assets/mine_icon01.png"></image>
					<text class="safe-text">安全中心</text>
					<text class="safe-text-linlk">修改密码等</text>
				</view>
				<view class="about-us">
					<image class="us-img" src="../../static/assets/mine_icon02.png"></image>
					<text class="us-text">关于我们</text>
				</view>
			</view>
			
		</view>
		<uniBottomNav></uniBottomNav>

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
				this.$refs.popup.open()
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
		margin-top: 180upx;
		background: #FFFFFF;
		border-radius: 20upx;
	}
	.content-text {
		display: flex;
		font-size: 26upx;
		color: #333333;
		padding-bottom: 80upx;
	}
	.content-text .all {
		flex: 1;
		text-align: left;
	}
	.content-text .used {
		flex: 1;
		text-align: right;
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
