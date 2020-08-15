<template>
	<view class="container">
		<uni-nav-bar left-icon="back" style="border-bottom: none" background-color="#007AFF" color="#fff"  right-text="借款记录" title="云好贷"></uni-nav-bar>
		<view class="main">
			<view class="main-title">还款处理中...</view>
			<view class="main-money">￥50,000</view>
			<view class="main-tips">还款处理中，请耐心等待</view>
			<view v-if="false" class="main-tips">请留意还款结果短信通知</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
	    components: {uniNavBar},
		methods:{
			loan(){
				uni.showModal({
				    content: '太久未使用，授信过期啦，请重新完成授信流程再次尝试',
					cancelText:'关闭',
					confirmText:'重新授信',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="stylus">
	/deep/ .uni-navbar--border{
		border: none;
	}
	.container{
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		background: url(../../static/assets/Group12.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.main{
		width: 315px;
		height: 420px;
		border-radius: 10px;
		box-shadow: 0 4px 8px 4px rgba(0,0,0,.2);
		margin: 20px auto 0;
		box-sizing: border-box;
		padding-top: 64px;
		background #fff url('../../static/assets/编组 5@3x.png') no-repeat center 220px
		background-size 180px 140px
	}
	.main-title{
		font-size: 20px;
		text-align: center;
		font-weight bold
		font-family Helvetica
	}
	.main-money{
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		margin-top: 14px;
		color #6E6E6E 
	}
	.main-tips{
		font-size 14px 
		color #aaa
		margin-top 20px
		text-align center
	}
		
	
</style>
