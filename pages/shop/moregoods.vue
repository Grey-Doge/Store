<template>
	<view class="main-container">
		<view class="tab-header">
			<view class="current">手机面板</view>
			<view>手机面板</view>
			<view>手机面板</view>
			<view>手机面板</view>
			<view>手机面板</view>
		</view>
		<view class="goods-container">
			<view class="goods-item">
				<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2731691808/O1CN019vdQIE1PE6cZtJcNz_!!0-item_pic.jpg_580x580Q90.jpg_.webp"></image>
				<view class="item-title">
					<text class="title">
						IPHONE 7秘钥口 2.81IPHONE 7秘钥口 2.81IPHONE 7秘钥口 2.81
					</text>
				</view>
			</view>
			<view class="goods-item">
				<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2731691808/O1CN019vdQIE1PE6cZtJcNz_!!0-item_pic.jpg_580x580Q90.jpg_.webp"></image>
				<view class="item-title">
					<text class="title"></text>
				</view>
			</view>
			<view class="goods-item">
				<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2731691808/O1CN019vdQIE1PE6cZtJcNz_!!0-item_pic.jpg_580x580Q90.jpg_.webp"></image>
				<view class="item-title">
					<text class="title"></text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	page{
		background-color: #F2F2F2;
	}
	.main-container{
		padding: 0;
		background-color: #F2F2F2;
	}
	.tab-header{
		font-size: 28upx;
		height: 80upx;
		color: #7F7F7F;
		background-color: #FFFFFF;
		padding: 0 24upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.current{
		color: #4BAFF5;
	}
	.goods-container{
		margin-top: 15upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.goods-item{
		margin: 10upx 24upx;
		width: 320upx;
		height: 360upx;
		border-radius: 15upx;
		position: relative;
		display: flex;
	}
	.goods-item image{
		width: 320upx;
		height: 360upx;
		border-radius: 15upx;
		
	}
	.item-title{
		width: 320upx;
		height: 65upx;
		position: absolute;
		align-self: flex-end;
		background-color: rgba(0,0,0,0.55);
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
		display: flex;
		align-items: center;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		
	}
	.title{
		font-size: 26upx;
		color: #FFFFFF;
		padding: 0 8upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
