<template>
	<view class="main-container">
		<view class="shop-item" v-for="item in shopList">
			<view class="shop-header">
				<view style="display: flex;align-items: center;justify-content: flex-start;">
					<view class="shop-avatar">
						<image mode="aspectFill" :src="item.shops_logo"></image>
					</view>
					<view class="shop-info">
						<text class="shop-name">{{item.shops_name}}</text>
						<view class="shop-tag">
							<text v-for="item in item.compan_tags">{{item}}</text>
						</view>
					</view>
				</view>
				<navigator open-type="navigate" :url="['../shop/shopinfo?shops_id='+item.shops_id]">
					<view class="into-shop" >进店</view>
				</navigator>
				
			</view>
			<view class="display-item">
				<image 	:src="item" v-for="item in item.previewimg"></image>
				<!-- <image  src="https://img.alicdn.com/imgextra/i2/718371099/O1CN011JzNjn7SKQrb6pY_!!718371099.jpg"></image> -->
			</view>
			<!-- <view class="evaluation">
				<text class="user-name">ABC:</text>
				<text class="comment">拼配齐全,配件崭新,商家比较好说话!</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default{
		data(){
			return{
				shopList:null,
				floorId:null
			}
		},
		onLoad:function(option){
			let title = option.title+"楼";
			let that = this;
			that.floorId = option.id;
			uni.setNavigationBarTitle({
				title:title
			})
			this.refreshData();
		},
		onPullDownRefresh:function(){
			uni.stopPullDownRefresh();
		},
		methods:{
			refreshData:function(){
				uni.showLoading({
					title:'加载中...'
				})
				let that = this;
				uni.request({
					url:helper.webroot+'/api/seller/seller',
					data:{
						seller:1,
						floor:that.floorId
					},
					success:function(res){
						that.shopList = res.data.data;
						console.log(that.shopList);
						uni.hideLoading();
					}
				})
			}
		}
	}
</script>

<style>
	.main-container{
		padding: 0;
		background-color: #F2F2F2;
	}
	.header{
		display: flex;
		padding: 0 24upx;
		background-color: #FFFFFF;
		height: 110upx;
		margin: 0 0 15upx 0;
	}
	.search{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 26upx;
		height: 80upx;
		width: 699upx;
		background-color: #F2F2F2;
		border-radius: 15upx;
	}
	.search image{
		margin: 0 15upx 0 30upx;
		height: 38upx;
		width: 38upx;
	}
	.search input{
		width: 100%;
	}
	.shop-item{
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}
	
	.shop-header{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content:  space-between;
		margin: 0 24upx;
		padding: 25upx 0;
	}
	.shop-avatar{
		height: 120upx;
		width: 200upx;
		
	}
	.shop-avatar image{
		height: 120upx;
		width: 200upx;
		border: #F2F2F2 solid 2upx;
		border-radius: 20upx;
		
	}
	.shop-info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: flex-start;
		margin-left: 30rpx;
	}
	.shop-name{
		margin-bottom: 20upx;
		font-size: 34upx;
	}
	.shop-info .shop-tag{
		
		font-size: 28upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
	.shop-info .shop-tag text{
		border-radius: 15upx;
		background-color: #F2F2F2;
		color: #7F7F7F;
		padding: 0 10upx;
		margin-right: 15upx;
	}
	.into-shop{
		padding: 10upx;
		border-radius: 15upx;
		font-size: 28upx;
		color: #FFFFFF;
		background-color: #4BAFF5;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: flex-start;
	}
	.display-item{
		padding: 15upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 24upx;
	}
	.display-item image{
		border-radius: 25upx;
		width: 340upx;
		height: 360upx;
	}
	
	
	.evaluation{
		margin: 20upx 24upx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 30upx;
		height: 100upx;
		width: 699upx;
		background-color: #F2F2F2;
		border-radius: 15upx;
	}
	.evaluation .user-name{
		font-size: 30upx;
		font-weight: 450;
		margin:0 25upx;
	}
	.evaluation .comment{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
</style>
