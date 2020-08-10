<template>
	<view class="uni-bottom-nav">
		<uni-grid :column="2" :square="false" :showBorder='false' :highlight='true'>
			<uni-grid-item class="nav-item">
				<text class="text">借钱</text>
			</uni-grid-item>
			<uni-grid-item class="nav-item">
				<text class="text">我的</text>
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
		border: 1px solid;
	}
	.nav-item {
		text-align: center;
		line-height: 50px;
	}
</style>
