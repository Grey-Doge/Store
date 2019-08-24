<template>
	<view class="main-container">
		<view class="switch-tab">
			<!-- <view class="btn tome">评论我的</view> -->
			<view class="btn mine">我评论的</view>
		</view>
		<view class="mine-container">
			<!-- <view class="mine-item">
				<view class="mine-header">
					<view class="user-info">
						<view class="avatar">
							<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1457704519,3529830056&fm=27&gp=0.jpg"></image>
						</view>
						<view class="user">
							<text class="name">Jack maaaaaaa</text>
							<text class="reply-time">2018.01.25</text>
						</view>
					</view>
					<view class="icon-msg">
						<image src="../../static/icon-msg.png"></image>
					</view>
				</view>
				<view class="reply">
					<text class="reply-man">回复 AA配件店</text>
					<text class="separate">:</text>
					<text class="reply-content">不可以下次记得便宜点就好!</text>
				</view>
				<view class="comment">
					<text>AA配件店</text>
					<text class="separate">:</text>
					<text>感谢你的支持!!</text>
				</view>
			</view> -->
			
			<view class="mine-item" v-for="item in content">
				<view class="mine-header">
					<view class="user-info">
						<view class="avatar">
							<image :src="item.headimg"></image>
						</view>
						<view class="user">
							<text class="name">{{item.nickname}}</text>
							<text class="reply-time">{{item.ctime}}</text>
						</view>
					</view>
					<view class="icon-msg">
						<image src="../../static/icon-msg.png"></image>
					</view>
				</view>
				<navigator open-type="navigate" :url="['../shop/essaydetail?id='+item.tie_id]">
					<view class="reply">
						<text class="reply-content">{{item.recommend}}</text>
					</view>
					<view class="article">
						<view class="article-img">
							<image  :src="item.title"></image>
						</view>
						<view class="article-title">
							{{item.essayPreviewImg}}
						</view>
					</view>
				</navigator>
			</view>

		</view>
		
		<!-- <view class="tome-container">
			<view class="tome-item">
				<view class="tome-header">
					<view class="user-info">
						<view class="avatar">
							<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1457704519,3529830056&fm=27&gp=0.jpg"></image>
						</view>
						<view class="user">
							<text class="name">Jack maaaaaaa</text>
							<text class="reply-time">2018.01.25</text>
						</view>
					</view>
					<view class="icon-msg">
						<image src="../../static/icon-msg.png"></image>
					</view>
					
				</view>
				<view class="reply">
					<text class="reply-man">回复 AA配件店</text>
					<text class="separate">:</text>
					<text class="reply-content">不可以下次记得便宜点就好!</text>
				</view>
				<view class="comment">
					<text>AA配件店</text>
					<text class="separate">:</text>
					<text class="comment-content">感谢你的支持!!</text>
				</view>
			</view>
			<view class="tome-item">
					<view class="tome-header">
						<view class="user-info">
							<view class="avatar">
								<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1457704519,3529830056&fm=27&gp=0.jpg"></image>
							</view>
							<view class="user">
								<text class="name">Jack maaaaaaa</text>
								<text class="reply-time">2018.01.25</text>
							</view>
						</view>
						<view class="icon-msg">
							<image src="../../static/icon-msg.png"></image>
						</view>
						
					</view>
					<view class="reply">
						<text class="reply-man">回复 AA配件店</text>
						<text class="separate">:</text>
						<text class="reply-content">不可以下次记得便宜点就好!</text>
					</view>
					<view class="comment">
						<text>AA配件店</text>
						<text class="separate">:</text>
						<text class="comment-content">感谢你的支持!!</text>
					</view>
				</view>
		</view>
 -->	</view>
</template>

<script>
	import helper from '../../common/helper.js'
	export default {
		data(){
			return {
				content:null,
				openid:null,
				session:null
			}
		},
		onLoad:function(){
			this.openid = uni.getStorageSync("id");
			this.session = uni.getStorageSync("session");
			this.refreshData();
		},
		methods:{
			refreshData:function(){
				let that = this;
				uni.request({
					url:helper.webroot + "api/my/mycomentdetail",
					method:"POST",
					header:{
						session:that.session
					},
					data:{
						openid:that.openid
					},
					success:function(res){
						console.log(res.data.data);
						that.content = res.data.data;
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
	.switch-tab {
		background-color: #F2F2F2;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
		height: 70upx;
		margin: 15upx 0;
	}
	
	.switch-tab .btn {
		font-size: 34upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70upx;
		width: 200upx;
		position: relative;
	}
	.mine{
		background-color: #4BAFF5;
		color: #FFFFFF;
		left: -20upx;
		z-index: 2;
	}
	.tome{
		color:#4BAFF5 ;
		background-color: #FFFFFF;
		left: 0;
		z-index: 1;
	}
	.mine-container,.tome-container{
		
		
	}
	.mine-item,.tome-item{
		padding: 24upx 24upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 10upx;
	}
	.mine-header,.tome-header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		
	}
	.user-info{
		display: flex;
		
		
	}
	.icon-msg image{
		height: 50upx;
		width: 80upx;
		
	}
	.avatar{
		margin-right: 15upx;
	}
	.avatar image{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		align-self:  baseline;
	}
	.user{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.name{
		font-size: 30upx;
		font-weight: 450;
	}
	.reply-time{
		font-size: 26upx;
		color: #7F7F7F;
	}
	.reply{
		display: flex;
		font-size: 28upx;
		margin: 10upx 0 20upx 0;
	}
	.reply-man{
		color: #4BAFF5;
		width: 180upx;
	}
	.separate{
		margin: 0 10upx;
	}
	.reply-content{
		width: 350upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.comment-content{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 500upx;
	}
	.comment,.article{
		background-color: #F2F2F2;
		display: flex;
		border-radius: 10upx;
	}
	.comment{
		font-size: 28upx;
		padding: 15upx 8upx;
		color: #7F7F7F;
	}
	.article{
		display: flex;
		align-items: center;
	}
	.article-img{
		padding: 15upx;
		width: 320upx;
		height: 170upx;
		margin-right: 15upx;
	}
	.article-img image{
		width: 300upx;
		height: 170upx;
		border-radius: 15upx;
	}
	.article-title{
		font-size: 32upx;
		width: 300upx;
		font-weight: 450;
		overflow: hidden;
		-webkit-line-clamp: 2; 
		-webkit-box-orient: vertical;
		display: -webkit-box;
	}
</style>
