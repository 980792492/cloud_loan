<template>
	<view class="container">
		<view class="apply-credit-wrap">
			<view class="title">很抱歉，您暂不符合授信条件</view>
			<view class="tips">请于xx年xx月xx日后再次尝试</view>
			<view class="picture-wrap">
				<image class="picture" src="../../../static/assets/09.png"></image>
			</view>
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
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 30upx;
		background: url(../../../static/assets/Group12.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	
	.apply-credit-wrap {
		padding: 20px;
		background: #fff;
		border-radius: 20upx;
	}
	
	.title {
		text-align: center;
		font-size: 32upx;
		color: #333 ;
		line-height: 96upx;
	}
	.tips {
		text-align: center;
		font-size: 28upx;
		color: #999999 ;
	}
	
	.picture-wrap {
		text-align: center;
		margin: 60upx 0 140upx;
	}
	
	.picture {
		width: 400upx;
		height: 380upx;
	}
	
	
	
	
</style>
