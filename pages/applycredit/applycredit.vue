<template>
	<view class="container">
		<view class="apply-credit-wrap">
			<view class="text">最高可借</view>
			<view class="amount">¥ 50,000.00</view>
			<view class="take-alive-warp">
				<button class="take-alive"
					type="primary"
					@click="jump()"
				>激活额度</button>
			</view>

			<view class="remark">
				<label class="radio">
					<radio style="transform:scale(0.7)" value="r1" checked="true" />
					已阅读同意 <text class="text">《相关协议》、</text><text class="text">《相关协议相关协议相关协议》</text>
				</label>
			</view>
			<view class="image-content">
				<view class="img-item1">
					<image class="img" src="../../static/assets/08.png"></image>
					<view class="text">授信简单</view>
				</view>
				<view class="img-item2">
					
					<image class="img" src="../../static/assets/08.png"></image>
					<view  class="text">极速审核</view>
				</view>
				<view class="img-item3">
					<image class="img" src="../../static/assets/08.png"></image>
					<view  class="text">随借随还</view>
				</view>
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
			jump(){
				uni.navigateTo({
					url: '/pages/applycredit/basicinfo/basicinfo'
				})
			}
		}
	}
</script>

<style>
	.container {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 30upx;
		background: url(../../static/assets/Group12.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.take-alive {
		width: 550upx;
		height: 88upx;
		border-radius: 50upx;
		/* font-size: 16upx; */
		margin-top: 70upx;
		margin-bottom: 40upx;
	}
	.take-alive-warp {
		.text {
			font-size: 40upx;
			text-align: center;
			margin-top: 60upx;
		}
	}
	
	.remark {
		font-size: 16upx;
	}
	.remark .text {
		color: #007AFF;
		/* font-size: 16upx; */
	}

	.apply-credit-wrap {
		padding: 20px;
		background: #fff;
	}
	
	.apply-credit-wrap  > .text {
		font-size: 46upx;
		text-align: center;
		margin-top: 60upx;
	}
	
	.apply-credit-wrap .amount {
		font-size: 60upx;
		text-align: center;
		margin-top: 30upx;
		font-weight: 500;
	}
	
	.image-content {
		display: flex;
		justify-content: space-around;
		padding-top: 20px;
		padding-bottom: 50px;
	}
	.img-item1, .img-item2, .img-item3 {
		flex: 1;
		text-align: center;
	}
	.image-content image {
		width: 92upx;
		height: 92upx;
	}
	.image-content image {
		width: 92upx;
		height: 92upx;
	}
	.image-content .text {
		font-size: 12upx;
	}
	
	
	
</style>
