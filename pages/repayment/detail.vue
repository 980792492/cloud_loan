<template>
	<view class="container">
		<view class="detail-top">
			<view class="detail-top-title">9月2日应还（元）</view>
			<view class="detail-top-money">20000.52</view>
			<view class="tips">我们会在还款日当天自动从<text style="color: #2E99FF;">中国银行(9282)</text>中自动扣款，请确保当日银行卡中余额充足</view>
		</view>
		<view class="plan-list" v-for="item in 2">
			<view class="plan-list-title">2019年12月12日</view>
			<view class="plan-list-con">
				<view class="plan-list-item">
					<text class="plan-list-item-title">待还本金（元）</text>
					<text class="plan-list-item-money">900.00</text>
				</view>
				<view  class="plan-list-item">
					<text class="plan-list-item-title">待还本金（元）</text>
					<text class="plan-list-item-money">900.00</text>
				</view>
				<view  class="plan-list-item">
					<text class="plan-list-item-title">逾期罚息（元）</text>
					<text class="plan-list-item-money">900.00</text>
				</view>
			</view>
		</view>
		<view class="btn-box">
			<button class="repay-btn" type="primary">去还款</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.container{
		width 100vw
		height calc(100vh - 44px)
		background #F2F2F2
		display flex
		flex-direction column
		align-items center
	}
	.detail-top{
		width 100%
		height 155px
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
	.tips{
		width 100%
		height auto
		line-height 20px
		text-align center
		font-size 12px
		color #aaa
		box-sizing border-box
		padding 0 21px
	}
	.plan-list{
		width 350px
		height 133px
		padding 4px 24px
		box-sizing border-box
		background-color #fff
		margin-top 12px
		color #333
		font-size 14px
		&-title{
			height 46px
			border-bottom 1px solid #eee
			line-height 46px 
		}
		&-con{
			display flex
			flex-direction row
			justify-content space-between
			align-items center
			height 80px
		}
		&-item{
			display flex
			flex-direction column
			&-title{
				color #808080
				font-size 12px
				line-height 26px
				text-align center
			}
			&-money{
				font-size 16px
				color #333333
				line-height 30px
				text-align center
				font-weight bold
			}
		}
	}
	.btn-box{
		position absolute
		bottom 10px
	}
	.repay-btn{
		width 335px 
		height 40px
		line-height 40px
		border-radius 20px 
	}
	
</style>
