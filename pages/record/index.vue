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
				<uni-list-item v-for="items in data" :key='items.id' :title="items.amount/100+ ''" :note="items.createTime" :showArrow="false" @onClick='onClick((items.orderId))'>
					<view slot="right">
						<text 
							:class="items.orderStatus===0?'ing':items.orderStatus===1?'war':'suc'"
						>
							{{ statusTexts[items.orderStatus]}}
						</text>
						<uni-icons :color="items.orderStatus===0?'#2494FF':items.orderStatus===1?'red':'#808080'" type="arrowright" size="16"></uni-icons>
					</view>
				</uni-list-item>
			</uni-list>
			<uni-list v-show="current==1"  >
				<uni-list-item v-for="items in recordData[current]" :key='items.id' :title="items.money" :rightText="items.time" :showArrow="false" />
			</uni-list>
		</view>
		<view  v-if="false" class="noData">
			暂无记录
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	
	import api from '@/api/loan/index.js'
	
	
	
	
	export default {
		components: {uniSegmentedControl,uniList,uniListItem,uniIcons},
		data() {
			return {
				data:[],
				statusTexts:['待生成第三方订单','待提交','放款中','放款成功','放款失败','已取消','已结清','已逾期','还款中','','资金匹配中','资金匹配成功','资金匹配失败'],
				items: ['借款记录','还款记录'],
				label:'123',
				current: 0,
				recordData:[
					
				],
				
			}
		},
		onLoad(){
			this.getLoanOrderList();
		},
		methods: {
			
			onClick(id){
				console.log(id);
				console.log(`/pages/record/detail?loanOrderId=${id}`);
				uni.navigateTo({
					url:`/pages/record/detail?loanOrderId=${id}`
				})
			},
			
			// 借款记录
			getLoanOrderList(){
				 const consumerId = uni.getStorageSync('consumerId')
				 
				api.getLoanOrderList({consumerId}).then(res => {
					console.log(res);
					console.log(res.busiparam)
					let data = res.busiparam;
					
			
					this.data = data;
					
					console.log(this.data);
					
				})
				
				
			},
			
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
		font-size 14px
	}
	.war{
		color red
		font-size 14px
	}
	.suc{
		color #808080
		font-size 14px
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
		background url('../../static/assets/Pages/default/default.png') no-repeat center 134px
		background-size 100px
	}
}
</style>
