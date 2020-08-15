<template>
	<view>
		<view class="top-title">借款金额</view>
		<view class="amountInput">
			<input class="uni-input" v-model="amount" placeholder-class='palceholderStyle' maxlength="5" type="number" placeholder="最高可借50,000"  />
			<icon v-show="amount!=''" @click="amount=''" class="clear-input" type="clear" size="26"/>
		</view>
		<view class="line"></view>
		<view>
			<uni-list>
			    <uni-list-item title="借款期限" @click="showDate('popup')" :rightText="date+'个月'" />
			    <uni-list-item title="月利率" rightText="3.0%" :showArrow="false" />
				<uni-list-item title="总利息" rightText="￥122.00" :showArrow="false"  />
				<uni-list-item title="还款计划" rightText="首期8月4号 应还¥ 400.00" @click="showDate('popup1')"/>
				<uni-list-item title="银行卡" :showArrow="false" >
					<view slot="right">
						<img class="bank_icon" src="../../static/assets/中国工商银行.png" alt=""><text style="font-size: 14px;">中国工商银行</text>
					</view>
				</uni-list-item>
				<uni-list-item title="金融机构" rightText="小盈金融科技" :showArrow="false" ></uni-list-item>
			</uni-list>
		</view>
		<view class="remark">
			<label class="radio">
				<radio style="transform:scale(0.7)" value="r1" checked="true" />
				已阅读同意 <text class="text" @click="showDate('popup2')">《相关协议》</text></text>
			</label>
		</view>
		<button class="loan-btn" type="primary" @click="nowLoan">立即借款</button>
		<view>
			<uni-popup ref='popup' type='bottom'>
				<view class="popup-center">
					<view class="popup-center-title">借款期限<icon @click="hideDate('popup')" class="close-btn" type="clear" size="26"/></view>
					<view class="popup-center-list">
						<view class="popup-center-li" v-for="item in dateList" @click="changeDate(item)" >{{item}}个月<icon v-show="date==item" class="close-btn" type="success_no_circle" size="26"/></view>
					</view>
				</view>
			</uni-popup>
		</view>
		<view>
			<uni-popup ref='popup1' type='bottom'>
				<view class="popup-center">
					<view class="popup-center-title">还款计划<icon @click="hideDate('popup1')" class="close-btn" type="clear" size="26"/></view>
					<view class="popup-center-list">
						<view class="popup-center-li popup-center-plan" v-for="item in repaymentPlan" >
							<text class="time">2020.09.12</text>
							<text class="amount">300.00元</text>
						</view>
					</view>
				</view>
			</uni-popup>
			<uni-popup ref='popup2'>
				<view class="popup-agreement">
					<v-tabs
					  height="50px"
					  v-model="activeTab"
					  :scroll="false"
					  activeColor="#333333"
					  color="#808080"
					  lineHeight="0"
					  :tabs="['投保须知/担保说明', '保险条款', '保险协议']"
					>
					</v-tabs>
					<span class="agreement-content">
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
						{{AGREEMENT[activeTab]}}
					</span>
					<button type="primary" class="agreement-btn">我已阅读全部保险协议并确认</button>
				</view>
				<icon @click="hideDate('popup2')" class="agree-close"  type="cancel" color="#fff" size="36"/>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {uniList,uniListItem,uniPopup},
		data(){
			return {
				activeTab: 0,
				amount:'',
				date: 3,
				dateList:[3,6,9,12],
				repaymentPlan:[1,1,1,1],
				AGREEMENT: [
					'本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品本授权是在蚂蚁白领合作机构购买特定产',
					' 2本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品或使用该服务的对价选择进行信用付款涉及的用户个人信息查询、使用及授信、贷后管理相关事宜与信用服务提供方所订立的授权契约。',
					' 3本授权是在蚂蚁白领合作机构购买特定产品或服务、且符合相应条件可以使用信用付款服务的用户（以下简称“用户”）就用户购买商品或所提供的服务，并就购买该商品或使用该服务的对价选择进行信用付款涉及的用户个人信息查询、使用及授信、贷后管理相关事宜与信用服务提供方所订立的授权契约。',
				]
			}
		},
		methods: {
			nowLoan(){
				uni.showModal({
				    content: '借款订单已过期，请重新发起借款申请',
					cancelText:'回首页',
					confirmText:'重新发起',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			changeDate(item){
				this.date = item
				this.$refs.popup.close()
			},
			showDate(ref){
				 this.$refs[ref].open()
			},
			hideDate(ref){
				this.$refs[ref].close()
			}
		}
	}
</script>

<style lang="stylus">
	.line{
		height 10px
		background-color #F2F2F2;
	}
	.top-title{
		font-family PingFangSC-Regular
		font-size 16px
		color #808080
		line-height 60px
		text-align center
	}
	.amountInput{
		display flex
		flex-direction row
		justify-content center
		align-items center
		width 100%
		height 68px
		position relative
	}
	.clear-input{
		position absolute
		right 90px
	}
	.uni-input{
		display block
		text-align center
		width 240px
		font-size 30px
		font-weight bold
		border-bottom 1px solid #eee
		
	}
	.palceholderStyle{
		font-size 20px
		color #ccc
		font-weight normal
	}
	.bank_icon{
		display inline-block
		width 14px
		height 14px
	}
	.loan-btn{
		width 300px
		height 44px
		border-radius 22px
		margin 50px auto 70px
	}
	
	.remark{
		font-size 12px
	}
	.popup-center{
		background-color #fff
		width 100%
		height 447px
		border-radius 8px 8px 0 0
		&-title{
			text-align center
			height 56px
			line-height 56px
			border-bottom 1px solid #EEEEEE
			font-size 16px
			color #333
			font-weight bold
			font-family: PingFangSC-Medium;
			position relative
		}
		.close-btn{
			position absolute
			right 10px
		}
		&-li{
			width 100%
			height 44px
			font-size 14px
			color #333
			line-height 44px
			border-bottom 1px solid #EEEEEE
			text-indent 1em
		}
		&-plan{
			display flex
			flex-direction row
			justify-content space-between
			.time{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #333333;
				line-height: inherit;
			}
			.amount{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #333333;
				text-align: right;
				line-height: inherit;
				padding-right 14px
			}
		}
		
	}
	.popup-agreement{
		width 320px
		height 442px
		background-color #fff
		border-radius 8px
	}
	.agreement-content{
		display block
		width 100%
		height 320px
		box-sizing border-box
		padding 0 20px
		overflow-y scroll
		font-size: 14px;
		color: #666666;
		line-height: 22px;
	}
	.agreement-btn{
		width 300px
		height 44px
		border-radius 22px
		margin 10px auto
	}
	.agree-close{
		color #fff
		margin 20px 45%  0
	}
</style>
