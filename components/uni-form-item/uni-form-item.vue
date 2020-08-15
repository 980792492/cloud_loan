<template>
		<view class="uni-form-item">
			<view class="uni-form-item-label">{{label}}</view>
			<!-- // 不是密码类型 -->
			<view v-if="!isPwd" class="uni-form-item-type">
				<input :placeholder='placeholder'   />
			</view>
			
			<!-- //	是密码类型 -->
			<view v-if="isPwd" class="uni-form-item-type">
				<input :placeholder='placeholder' password='isPwd'  />
			</view>
			<view v-if="isPwd" class="uni-form-item-icon">
				<view class="icon">&#xe676;</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			// placeholder: function(){
			// 	return '请输入' + this.label
			// }
		},
		props:['label', 'child', 'isPwd', 'placeholder']
	}
</script>

<style>
	.uni-form-item {
		width: 100%;
		display: flex;
		border-bottom: 1upx solid #313131;
		align-items: center;
		padding-top: 30upx;
		padding-bottom: 15upx;
		line-height: 40upx;
	}
	.uni-form-item-label {
		font-size: 36upx;
		color: #323232;
		padding-right: 20upx;
		
	}
	.uni-form-item-type {
		flex: 1;
	}
	.uni-form-item-icon {
		padding-right: 10upx;
		/* font-size: 80upx; */
	}
	.uni-form-item-icon  .icon {
		font-size: 40upx;
		font-weight: 600;
		color: #4C4C4C;
	}

</style>
