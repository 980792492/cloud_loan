<template>
	<view class="container">
		<view class="top-tab">
			<uni-segmented-control 
				style="height: 28px;" 
				:current="current" 
				:values="items" 
				@clickItem="onClickItem" 
				style-type="button" 
				active-color="#2494FF"
				>
			</uni-segmented-control>
		</view>
		<view>
			<uni-list v-show="current==0">
				<uni-list-item v-for="items in recordData[current]" :title="items.money" :note="items.time">
					<view slot="right">
						<text 
							:class="items.status===0?'ing':items.status===1?'war':'suc'"
						>
							{{items.status===0?"借款中":items.status===1?"已逾期":"已还清"}}
						</text>
						<uni-icons :color="items.status===0?'#2494FF':items.status===1?'red':'#808080'" type="arrowright" size="16"></uni-icons>
					</view>
				</uni-list-item>
			</uni-list>
			<uni-list v-show="current==1">
				<uni-list-item v-for="items in recordData[current]" :title="items.money" :rightText="items.time" />
			</uni-list>
		</view>
		<view  v-if="false" class="noData">
			暂无记录
		</view>
	</view>
</template>

<script>
	import {uniList,uniListItem} from '@dcloudio/uni-ui'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {uniSegmentedControl,uniList,uniListItem,uniIcons},
		data() {
			return {
				items: ['借款记录','还款记录'],
				label:'123',
				current: 0,
				recordData:[
					[
						{money: '1000.00', time: '2019年6月22日',status: 0},
						{money: '2000.00', time: '2019年9月22日',status: 1},
						{money: '3000.00', time: '2019年7月2日',status: 2},
						{money: '4000.00', time: '2019年6月22日',status: 0},
						{money: '5000.00', time: '2019年6月22日',status: 1},
						{money: '6000.00', time: '2019年2月22日',status: 2},
						{money: '7000.00', time: '2013年6月22日',status: 0},
						{money: '7000.00', time: '2019年6月12日',status: 1},
						{money: '8000.00', time: '2019年2月22日',status: 1},
					],
					[
						{money: '1000.00', time: '2019年6月22日',status: 0},
						{money: '2000.00', time: '2019年9月22日',status: 1},
						{money: '3000.00', time: '2019年7月2日',status: 2},
						{money: '4000.00', time: '2019年6月22日',status: 0},
						{money: '5000.00', time: '2019年6月22日',status: 1},
						{money: '6000.00', time: '2019年2月22日',status: 2},
						{money: '7000.00', time: '2013年6月22日',status: 0},
						{money: '7000.00', time: '2019年6月12日',status: 1},
						{money: '8000.00', time: '2019年2月22日',status: 1},
					]
				]
			}
		},
		methods: {
			onClickItem(v){
				this.current = v.currentIndex
			}
		}
	}
</script>

<style lang="stylus">
.container{
	width 100%
	height calc( 100vh - 44px )
	background-color #F2F2F2;
	.top-tab{
		width 100%
		height 52px
		padding 12px 12px 0
		box-sizing border-box
		background-color #fff
	}
	.ing{
		color #2494FF 
	}
	.war{
		color red
	}
	.suc{
		color #808080
	}
	/deep/ .uni-list-item__content-title{
		font-size 24px
	}
	.noData{
		width 100%
		height 300px
		padding-top 244px
		font-size 14px
		color #aaa
		text-align center
		background url('../../static/assets/Pages/缺省图/无记录.png') no-repeat center 134px
		background-size 100px
	}
}
</style>
