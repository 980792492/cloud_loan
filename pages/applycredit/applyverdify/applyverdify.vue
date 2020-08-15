<template>
	<view class="container">
		<view class="verify-wrap">
			<image class="shenhe-pictire" src="../../../static/assets/审核中icon.png"></image>
		</view>
		<view class="verify-title">授信审核中</view>
		<view class="verify-text">审批结果将会短信推送，请耐心等待…</view>
		<view class="goto-home">
			<button class="goto-home-button">回首页</button>
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
		height: 320upx;
	}
	
	.verify-title {
		text-align: center;
		font-size: 32upx;
		line-height: 96upx;
	}
	
	.verify-text {
		text-align: center;
		font-size: 28upx;
		
	}
	
	.goto-home {
		padding: 0 30upx;
		margin-top: 120upx;
	}
	.goto-home-button {
		height: 80upx;
		background-color: #2494ff50;
		color: #2494FF;
		border-radius: 40upx;
		font-size: 32upx;
	}
	
	
	

</style>
