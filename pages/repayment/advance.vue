<template>
	<view class="container">
		<uni-nav-bar left-icon="back" background-color="#fff" color="#333" title="提前结清">
			<view slot="right" style="color: #2391FB;font-size: 14px;">还当期</view>
		</uni-nav-bar>
		<view class="detail-top">
			<view class="detail-top-title">还款金额</view>
			<view class="detail-top-money">20000.52</view>
		</view>
		<view class="bank">
			<text style="color: #808080;">银行卡</text>
			<view>
				<img class="bank_icon" src="../../static/assets/中国工商银行.png" alt=""><text style="font-size: 14px;color:#333333">工商银行(0608)</text>
			</view>
		</view>
		<view class="btn-box">
			<button class="repay-btn" type="primary">立即还款</button>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	/deep/ .uni-navbar--border{
		border: none;
	}
	.container{
		width 100vw
		height 100vh
		background #F2F2F2
	}
	.detail-top{
		width 100%
		height 98px
		background-color #fff
		&-title{
			height 40px
			line-height 40px
			text-align center
			font-size 16px
			color #808080
		}
		&-money{
			height 44px
			line-height 44px
			font-family: DINAlternate-Bold;
			font-size: 30px;
			color: #000000;
			text-align center
			margin-bottom 15px
			font-weight bold
		}
	}
	.bank{
		width 100%
		height 44px
		margin-top 10px
		margin-bottom 40px
		background-color #fff
		display flex
		justify-content space-between
		align-items center
		font-size 14px
		padding 0 12px
		box-sizing border-box
	}
	
	.bank_icon{
		display inline-block
		width 14px
		height 14px
		vertical-align middle
	}	
	.repay-btn{
		width 335px 
		height 40px
		line-height 40px
		border-radius 20px 
	}
</style>
