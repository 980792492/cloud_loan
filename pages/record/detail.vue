<template>
	<view class="container">
		<view class="top-title">借款金额</view>
		<view class="amountInput">
			20000.00
		</view>
		<view class="line"></view>
		<view>
			<uni-list>
				<uni-list-item title="借款总金额" rightText="￥666666.00"/>
			    <uni-list-item title="借款期限" rightText="3个月"/>
				<uni-list-item title="借款时间" rightText="2019-06-08"/>
				<uni-list-item title="还款方式" rightText="等额本息"/>
				<uni-list-item title="合同协议" >
					<view slot="right">
						<text style="color: #007AFF;">点击查看</text>
					</view>
				</uni-list-item>
				<uni-list-item title="到账银行" >
					<view slot="right">
						<img class="bank_icon" src="../../static/assets/中国工商银行.png" alt=""><text style="font-size: 14px;color:#333333">工商银行(0608)</text>
					</view>
				</uni-list-item>
				<uni-list-item title="还款计划" >
					<view slot="right">
						<uni-icons @click="changeIcon"  :type="icontype" size="16"></uni-icons>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="plan-list" v-show="icontype==='arrowup'">
			<view class="plan-list-tile">剩余还款计划</view>
			<view class="plan-list-li" v-for="items in plan">
				<text>{{items.time}}</text>
				<text style="font-size: 16px;">{{items.money}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {uniList,uniListItem} from '@dcloudio/uni-ui'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {uniList,uniListItem,uniPopup,uniIcons},
		data(){
			return {
				amount:'',
				date: 3,
				icontype:'arrowdown',
				plan:[
					{time:'3月2日', money:'600.00'},
					{time:'4月2日', money:'300.00'},
					{time:'5月2日', money:'200.00'},
					{time:'6月2日', money:'100.00'}
				]
			}
		},
		methods: {
			changeIcon(){
				this.icontype = this.icontype === 'arrowup' ? 'arrowdown' : 'arrowup'
			}
		}
	}
</script>

<style lang="stylus">
	.container{
		width 100vw
		height 100vh
		background-color #F2F2F2;
	}
	/deep/ .uni-list-item__content-title{
		font-size 14px
		color #808080
	}
	/deep/ .uni-list-item__extra-text{
		font-size 14px
		color #333
	}
	.line{
		height 10px
	}
	.top-title{
		font-family PingFangSC-Regular
		font-size 16px
		color #808080
		line-height 40px
		text-align center
		background-color #fff
	}
	.amountInput{
		text-align center
		width 100%
		height 58px
		line-height 58px
		font-size 40px
		position relative
		background-color #fff
		font-family: DINAlternate-Bold;
	}
	
	.bank_icon{
		display inline-block
		width 14px
		height 14px
	}
	.plan-list{
		width 350px
		height auto
		margin 12px auto 0
		padding 16px
		box-sizing border-box
		background-color #fff
		font-size 14px
		color #333333
		&-title{
			width 100%
			height 26px
			line-height 26px
		}
		&-li{
			width 100%
			display flex
			flex-direction row
			justify-content space-between
			line-height 44px
			height 44px
			border-bottom 1px dashed  #eee
		}
	}
</style>
