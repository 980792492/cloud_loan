<template>
	<view class="uni-bottom-nav">
		<uni-grid :column="2" :square="false" :showBorder='false' :highlight='true'>
			<!-- <uni-grid-item class="nav-item"> -->
			<uni-grid-item class="nav-item actived">
				<text class="icon">&#xe630;</text>
				<text class=" icon icon-text">首页</text>
			</uni-grid-item>
			<uni-grid-item class="nav-item">
				<text class="icon">&#xe62b;</text>
				<text class="icon icon-text">我的</text>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		data() {
			return {

			};
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
