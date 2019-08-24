<template>
	<view class="main-container">
		<view class="header">
			<view class="search">
				<image src="../../static/icon-search.png"></image>
				<input placeholder="GX550游戏手机电源" />
			</view>
		</view>
		<view class="shop-item" v-for="item in shopList">
			<navigator open-type="navigate" :url="['shopinfo?shops_id='+item.shops_id]" hover-class="none">
			<view class="shop-header">
				<view style="display: flex;align-items: center;justify-content: flex-start;">
					<view class="shop-avatar">
						<image mode="aspectFit" :src="item.shops_logo"></image>
					</view>
					<view class="shop-info">
						<text class="shop-name">{{item.shops_name}}</text>
						<view class="shop-tag">
							<text v-for="item in item.compan_tag">{{item}}</text>
						</view>
					</view>
				</view>
					<view class="into-shop" >进店</view>
			</view>
			</navigator>
			<view class="display-item">
				<block v-for="item in item.previewimg">
					<navigator :url="['essaydetail?id='+item.id]" hover-class="none">
					<image 	:src="item.cover"></image>
					</navigator>
				</block>
			</view>
		</view>
		

	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default{
		data(){
			return{
				shopList:null,
				sellerId:null
			}
		},
		onLoad:function(option){
			this.refreshData();
		},
		onPullDownRefresh:function(){
			this.refreshData();
		},
		methods:{
			refreshData:function(){
				uni.showLoading({
					title:"加载中..."
				})
				let that = this;
				uni.request({
					url:helper.webroot+'/api/shops/index',
					data:{
						seller:1
					},
					success:function(res){
						that.shopList = res.data.data;
						console.log(that.shopList);
						uni.hideLoading();
						uni.stopPullDownRefresh();
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
