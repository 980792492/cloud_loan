<template>
	<view class="uni-bottom-nav">
		<uni-grid :column="2" :square="false" :showBorder='false' :highlight='true'>
			<!-- <uni-grid-item class="nav-item"> -->
			<uni-grid-item  :class="current==='index'?'nav-item actived':'nav-item'">
				<view class="viewBox" @click="jumpUrl('index')">
					<text class="icon">&#xe630;</text>
					<text class=" icon icon-text">首页</text>
				</view>
				
			</uni-grid-item>
			<uni-grid-item  :class="current==='my'?'nav-item actived':'nav-item'" >
				<view  class="viewBox" @click="jumpUrl('my')">
					<text class="icon">&#xe62b;</text>
					<text class="icon icon-text">我的</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		props:{
			current: {
				type: String,
				default: 'index'
			},
		},
		data() {
			return {

			};
		},
		methods:{
			jumpUrl(type){
				const url = type === 'index' ? '/' : '/pages/mycenter/mycenter'
				uni.navigateTo({
					url
				})
			}
		},
		components: {
			uniGrid,
			uniGridItem
		}
	}
</script>

<style>
	.uni-bottom-nav {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		background: #FFFFFF;
	}
	.nav-item {
		text-align: center;
		height: 50px;
		/* line-height: 50px; */
	}
	.viewBox{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon {
		line-height: 25px;
		font-size: 24px;
		margin-top: 6px;
	}
	.icon-text {
		font-size: 12px;
		margin-top: -8px;
	}
	
	.actived {
		color: #2393FF;
	}
	.actived .icon-text {
		color: #2393FF;
	}
	.actived .icon {
		color: #2393FF;
	}
</style>
