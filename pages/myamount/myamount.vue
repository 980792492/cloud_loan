<template>
	<view class="container">
		<view class="verify-wrap">
			<image class="shenhe-pictire" src="../../static/assets/09.png"></image>
		</view>
		<view class="verify-title">恭喜您成功获得额度</view>
		<view class="verify-text">6,000.00 <text class="rmb">元</text></view>
		<view class="give-back">
			<view class="give-back-item">
				<text class="title">还款方式</text>
				<text class="text">等额本息</text>
			</view>
			<view class="give-back-item">
				<text class="title">金融合作机构</text>
				<text class="text">小盈科技</text>
			</view>
		</view>
		<view class="goto-home">
			<button class="goto-home-button">立即借款</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		/* width: 100%; */
		/* height: 100%; */
		background: #FFFFFF;
	}
	
	.verify-wrap {
		display: flex;
		justify-content: center;
		margin-top: 40upx;
	}
	.shenhe-pictire {
		width: 360upx;
		height: 280upx;
	}
	
	.verify-title {
		text-align: center;
		font-size: 32upx;
		line-height: 96upx;
	}
	
	.verify-text {
		text-align: center;
		font-size: 80upx;
	}
	.verify-text .rmb {
		font-size: 50upx;
		margin-left: 10upx;
	}
	
	.give-back {
		margin-top: 80upx;
		padding: 0 30upx;
		padding-right: 0;
	}
	.give-back-item {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		padding: 24upx 0;
		padding-right: 24upx;
	}
	.give-back-item .title {
		color: #808080;
		font-size: 28upx;
	}
	.give-back-item .text {
		color: #333;
		font-size: 28upx;
	}
	
	
	
	
	
	.goto-home {
		padding: 0 30upx;
		margin-top: 120upx;
	}
	.goto-home-button {
		height: 80upx;
		background: #2494FF;
		color: #FFF;
		border-radius: 40upx;
		font-size: 32upx;
	}
	
	
	

</style>
