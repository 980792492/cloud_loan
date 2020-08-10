<template>
	<view class="container">
		<!-- // 未授权 -->
		<view v-if="!showFlag">
			<view>
				<text>孙先生</text>
			</view>
			<view>
				<text>13800138000</text>
			</view>
			<view>
				<text>您还未获取额度,点击下方按钮立即获取</text>
			</view>
			<view>
				<button>立即申请</button>
			</view>
		</view>
		<!-- // 已授权 -->
		<view v-if="showFlag">
			<view>
				<text>孙先生</text>
			</view>
			<view>
				<text>13800138000</text>
			</view>
			<view>
				<uni-card title="云好贷 剩余额度 (元)">
					<view class="uni-flex uni-amount-wrap">
						<view class="uni-amount">
							<text class="amount-text">5,000.00 元</text>
						</view>
						<button class="take-apply">立即提款</button>
					</view>
					<view class="">
						<view class="">
							授信额度<text class="">5,000.00 元</text>
						</view>
						<view class="">
							已用额度<text class="">500.00 元</text>
						</view>
						<view class="uni-flex">
							<button class="take-apply">借还记录</button>
							<button class="take-apply">立即还款</button>
							<button class="take-apply">提前结清</button>
						</view>
					</view>
				</uni-card>
			</view>
		</view>
		<uni-bottom-nav></uni-bottom-nav>
	</view>
</template>

<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	export default {
		data() {
			return {
				showFlag: true
			}
		},
		components: {
			uniBottomNav,
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
