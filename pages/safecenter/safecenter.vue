<template>
	<view class="container">
		<uni-list>
			<uni-list-item @onClick='onClick'  title="修改密码" @click="showDate('popup')" rightText="修改密码"/>
		
		</uni-list>
		
		
	</view>
</template>

<script>
	import uniBottomNav from "@/components/uni-bottom-nav/uni-bottom-nav.vue"
	import uniFormitem from "@/components/uni-form-item/uni-form-item.vue"
	
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniBottomNav,
			uniFormitem,
			uniList,
			uniListItem
		},
		methods: {
			onClick(){
				uni.navigateTo({
					url:'/pages/safecenter/changepwd/changepwd'
				})
			},
			
		}
	}
</script>

<style>
	page{
		background: #F2F2F2;
	}
	

</style>
