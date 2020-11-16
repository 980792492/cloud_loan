<template>
	<view class="container">
		<uni-nav-bar left-icon="back" style="border-bottom: none" background-color="#007AFF" color="#fff"  right-text="借款记录" title="云好贷" @clickLeft='clickLeft' @clickRight='clickRight'></uni-nav-bar>
		<view class="main">
			<view class="main-title">我的额度</view>
			<view class="main-money">{{quota}}</view>
			<button type="primary" class="loan-btn" @click="loan">立即借款</button>
			<view class="image-content">
				<view class="img-item1">
					<image class="img" src="../../static/assets/08.png"></image>
					<view class="text">授信简单</view>
				</view>
				<view class="img-item2">
					
					<image class="img" src="../../static/assets/08.png"></image>
					<view  class="text">极速审核</view>
				</view>
				<view class="img-item3">
					<image class="img" src="../../static/assets/08.png"></image>
					<view  class="text">随借随还</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import api from '@/api/apply/index.js'
	import utils from '@/utils/utils.js'
	
	
	export default {
		data(){
			return{
				data:{
					
				},
				quota:'', //可贷额度
				// quotaAmount:'', //可贷额度
			}
		},
	    components: {uniNavBar},
		onLoad(){
			this.getQuota(); //获取额度
		},
		methods:{
			
			clickLeft(){
				console.log(33333);
				uni.navigateBack({
					delta:1
				})
			},
			
			
			// 获取额度
			getQuota(){
				
				const consumerId = uni.getStorageSync('consumerId')
				
				api.getQuotaQuery({consumerId}).then(res => {
					console.log(888777666555)
					console.log(res);
					this.data = res.busiparam;
					this.quotaAmount = res.busiparam.availableQuota;
					this.quota = this.quotaAmount === 0 ? 0 : utils.formatMoney(this.quotaAmount)
					console.log(this.quota);
					this.placeholderText = `最高可借${this.quota}`
				})
			},
			
			// 跳转
			clickRight(){
				console.log(33333);
				uni.navigateTo({
					url:'/pages/record/index',
				})
			},
			
			
			loan(){
				if(this.quotaAmount === 0){
					uni.showToast({
						title:'暂无额度',
						icon:'none'
					})
					return false;
				}
			
			let timeStr = new Date().getTime() / 1000;
			console.log(timeStr);
			console.log(this.data.expireTime);
			uni.navigateTo({
				url: '/pages/borrowingProcess/loaning'
				
			})
				return false;
				if(timeStr <= this.data.expireTime){ //正常
				uni.navigateTo({
					url: '/pages/borrowingProcess/loaning'
					
				})
					
				}else{
					uni.showModal({
					    content: '太久未使用，授信过期啦，请重新完成授信流程再次尝试',
						cancelText:'关闭',
						confirmText:'重新授信',
					    success: function (res) {
					        if (res.confirm) {
								uni.navigateTo({
									url:'/pages/applycredit/basicinfo/basicinfo'
								})
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
				
			
	
			
			
			}
		}
	}
</script>

<style lang="stylus">
	/deep/ .uni-navbar--border{
		border: none;
	}
	.container{
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		background: url(../../static/assets/Group12.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.main{
		width: 315px;
		height: 467px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 8px 4px rgba(0,0,0,.2);
		margin: 40px auto 0;
		box-sizing: border-box;
		padding-top: 64px;
	}
	.main-title{
		font-size: 20px;
		text-align: center;
	}
	.main-money{
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		margin-top: 30px;
	}
	.loan-btn{
		width: 275px;
		height: 44px;
		border-radius: 22px;
		margin: 50px auto 70px;
	}
	.image-content {
		display: flex;
		justify-content: space-around;
		padding-top: 20px;
		padding-bottom: 50px;
	}
	.img-item1, .img-item2, .img-item3 {
		flex: 1;
		text-align: center;
	}
	.image-content image {
		width: 92upx;
		height: 92upx;
	}
	.image-content image {
		width: 92upx;
		height: 92upx;
	}
	.image-content .text {
		font-size: 26upx;
	}
</style>
