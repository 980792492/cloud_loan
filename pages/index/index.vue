<template>
	<view class="container">
		<text>数钱吧-C端版</text>
		<uni-card title="云好贷">
			<view class="uni-flex uni-amount-wrap">
				<view class="uni-amount">
					最高额度 <text class="amount-text">5,000.00 元</text>
				</view>
				<button class="take-apply">立即申请</button>
			</view>
			<view class="uni-flex uni-describe-wrap">
				<view class="describe-item">申请简单</view>
				<view class="describe-item">循环额度</view>
				<view class="describe-item">极速放款</view>
				<view class="describe-item">随用随取</view>
			</view>
		</uni-card>
		<uni-bottom-nav></uni-bottom-nav>
	</view>
</template>
<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"

	export default {

		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components: {
			uniBottomNav,
			uniCard
		},

		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.uni-flex {
		display: flex;
		flex-direction: flex-direction;
		flex-wrap: wrap;

	}

	.uni-amount-wrap {
		margin-bottom: 20px;
	}

	.uni-amount {}

	.amount-text {
		font-size: 18px;
	}

	.take-apply {
		padding: 0px 25px;
		font-size: 12px;
		border: 1px solid;
	}

	.uni-describe-wrap {
		padding: 5px 10px;
		background: #C0C0C0;
	}

	.describe-item {
		width: 50%;
	}
</style>
