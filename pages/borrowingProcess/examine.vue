<template>
	<div>
		<view class="main">借款申请审核中，请耐心等待</view>
		<button type="primary" class="loan-btn" @click="goPageTap">返回首页</button>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goPageTap(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="stylus">
	.main{
		width 100vw
		// height 92vh
		background url("../../static/assets/under_review.png") no-repeat center 37px
		padding-top 220px
		text-align center
		font-size 16px
		box-sizing border-box
		overflow hidden
	}
	.loan-btn{
		width: 275px;
		height: 44px;
		border-radius: 22px;
		margin-top 50px
		// margin: 50px auto 70px;
	}
		
</style>
