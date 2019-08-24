<template>
	<view class="main-container">
		<view class="icon-header">
			<view class="progress">
				<view class="left-line">
					
				</view>
				<view class="circle circle_1">
					1
				</view>
				<view class="middle-line_1" style="background-color: #FF0000;">
					
				</view>
				<view class="circle_2 circle" style="background-color: #FF0000;">
					2
				</view>
				<view class="middle-line_2" style="background-color: #FF0000;">
					
				</view>
				<view class="circle circle_3" style="background-color: #FF0000;">
					3
				</view>
				<view class="right-line">
					
				</view>
			</view>
			<view class="progress-tips">
				<text>
					店铺信息填写
				</text>
				<text>
					实名信息填写
				</text>
				<text>
					店铺申请审核
				</text>
			</view>
		</view>
		<view class="review-container">
			<image src="../../../static/icon-review-pass.png"></image>
			<text>你的申请正在审核中!</text>
		</view>
		<view class="opera-btn">
			<view class="btn cancel">撤销申请</view>
			<view class="btn back">返回首页</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		height: 100%;
		width: 100%;
	}
	.main-container{
		padding: 0 24upx 0 24upx;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: space-between;
	}
	.review-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.review-container image{
		width: 300upx;
		height: 300upx;
		margin-bottom: 50upx;
	}
	
	.opera-btn{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.btn{
		width: 320upx;
		height: 100upx;
		font-size: 36upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cancel{
		color: #000000;
		background-color: #F2F2F2;
	}
	.back{
		color: #FFFFFF;
		background-color: #4BAFF5;
	}
</style>
