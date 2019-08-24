<template>
	<view class="main-container">
	
	<view class="shop-area">
		<view class="shop-item">
			<view class="shop-header">
				<view class="shop-avatar">
					<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
				</view>
				<view class="shop-info">
					<text class="shop-name">贝佳利多手机配件店</text>
					<view class="shop-tag">
						<text>显示屏</text>
						<text>显示屏</text>
						<text>显示屏</text>
					</view>
				</view>
			</view>
		</view>
		<view class="shop-item">
				<view class="shop-header">
					<view class="shop-avatar">
						<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
					</view>
					<view class="shop-info">
						<text class="shop-name">贝佳利多手机配件店</text>
						<view class="shop-tag">
							<text>显示屏</text>
							<text>显示屏</text>
							<text>显示屏</text>
						</view>
					</view>
				</view>
		</view>
		<view class="shop-item">
				<view class="shop-header">
					<view class="shop-avatar">
						<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
					</view>
					<view class="shop-info">
						<text class="shop-name">贝佳利多手机配件店</text>
						<view class="shop-tag">
							<text>显示屏</text>
							<text>显示屏</text>
							<text>显示屏</text>
						</view>
					</view>
				</view>
			</view>
		
	</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js'
	export default{
		data(){
			return{
				id:null,
				session:null
				
			}
		},
		methods:{
			getCollection:function(){
				let that = this;
				
				
				
				let session = uni.getStorageSync('session');
				let openid = uni.getStorageSync('id');
				console.log("sessionId:");
				console.log(session);
				console.log("openid:");
				console.log(openid);
				uni.request({
					url:helper.webroot + "api/my/collection",
					method:"POST",
					header:{
						session:session
					},
					data:{
						openid:openid
					},
					success:function(res){
						console.log("res");
						console.log(that.session);
						
						
					}
				})
				
			}
		},
		onLoad:function(){
			let that = this;
			uni.getStorage({
				key:'id',
				success:function(res){
					that.id = res.data;
				}
			})
			uni.getStorage({
				key:'session',
				success:function(res){
					that.session = res.data;
				}
			})
			
			that.getCollection();
		}
	}
</script>

<style>
	.main-container{
		padding: 0;
		background-color: #F2F2F2;
	}
	.collection-item{
		background-color: #FFFFFF;
	}
	.shop-item {
		background-color: #FFFFFF;
		margin-top: 5upx;
	}

	.shop-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 24upx;
		padding: 25upx 0;
	}

	.shop-avatar {
		height: 120upx;
		width: 200upx;
		margin-right: 40upx;
	}

	.shop-avatar image {
		height: 120upx;
		width: 200upx;
		border: #F2F2F2 solid 2upx;
		border-radius: 20upx;

	}

	.shop-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: flex-start;
	}

	.shop-name {
		margin-bottom: 20upx;
		font-size: 34upx;
	}

	.shop-info .shop-tag {

		font-size: 28upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.shop-info .shop-tag text {
		border-radius: 15upx;
		background-color: #F2F2F2;
		color: #7F7F7F;
		padding: 0 10upx;
		margin-right: 15upx;
	}
</style>
