<template>
	<view class="container">
		<view class="step-wrap">
			<uni-steps :options="stepList" :active="activeStep"></uni-steps>
		</view>
		<view class="tips">
			<uni-notice-bar single="true" text="请使用****实名信息进行相关认证"></uni-notice-bar>
		</view>
		<view class="id-card-wrap">
			
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	
	
	export default {
		data() {
			return {
				stepList : [
					{title: '基础信息'}, {title: '人脸识别'}, {title: '运营商认证'}, {title: '银行卡绑定'}
				],
				activeStep: 0
			}
		},
		components: {uniSteps,
		uniNoticeBar},
		methods: {
			
		}
	}
</script>

<style>

</style>
