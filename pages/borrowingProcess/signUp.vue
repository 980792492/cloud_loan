<template>
	<view class="container">
		<view class="signUpList">
			<view class="signUpList-li">
				<view class="signUpList-li-left">所属银行</view>
				<view  class="signUpList-li-right"><img class="bank_icon" src="../../static/assets/中国工商银行.png" alt=""><text>中国工商银行</text></view>
			</view>
			<view class="signUpList-li">
				<view  class="signUpList-li-left">预留手机号</view>
				<view class="signUpList-li-right"><text>188****8888</text></view>
			</view>
			<view class="signUpList-li" style="border: none;">
				<view  class="signUpList-li-left">短信验证码</view>
				<view class="signUpList-li-right getNote">
					<input type="text">
					<text class="getNote-btn">获取短信验证码</text>
				</view>
			</view>
		</view>
		<view class="tips">输入短信验证码即可完成网联签约</view>
		<button type="primary" class="enter-btn">确定</button>
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
		background: #F2F2F2;
		overflow hidden
		.tips{
			width 100%
			height 44px
			line-height 44px
			color #AAAAAA
			font-size 12px
			text-indent 1em
		}
		.signUpList{
			width 100%
			height 152px
			background-color #fff
			box-sizing border-box
			padding-left 12px 
			font-size 14px
			padding-top 16px
			&-li{
				width 100%
				height 44px
				line-height 44px
				color #808080 
				border-bottom 1px solid #EEEEEE;
				display flex
				flex-direction row
				&-left{
					width 90px
				}
				&-right{
					width 270px
					padding-right 20px
					box-sizing border-box
					input{
						width 120px
					}
				}
				.getNote{
					display flex
					flex-direction row
					align-items center
					justify-content space-between
					&-btn{
						color #3B71D4
					}
				}
					
				.bank_icon{
					display inline-block
					width 14px
					height 14px
				}
			}
		}
		.enter-btn{
			width 300px
			height 44px
			border-radius 22px
			margin 30px auto 70px
		}
	
	}
</style>
