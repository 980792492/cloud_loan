<template>
	<view class="container">
		<view class="change-pwd-wrap">
			<uniFormitem
			 label='修改登录密码'
			 placeholder='请输入登录密码'
			 childTyle='input' isPwd />
		</view>
		<view class="button-wrap">
			<button class="take-sure">确认</button>
		</view>
		<uniBottomNav />
	</view>
</template>

<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniBottomNav,
			uniFormitem
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		padding: 48upx;
		font-size: 14px;
		line-height: 24px;
	}
	
	.change-pwd-wrap {
		padding-top: 140upx;
		padding-bottom: 200upx;
	}
	
	.take-sure {
		height: 80upx;
		font-size: 32upx;
		border-radius: 40upx;
		background: #2393FF;
		color: #fff;
	}

</style>
