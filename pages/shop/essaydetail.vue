<template>
	<view class="main-container">
		<view class="header">
			<view class="title-img">
				<image :src="essay.cover"></image>
			</view>
			<view class="publisher">
				<view class="title-text">{{essay.title}}</view>
				<view class="publisher-item">
					<view class="avatar">
						<image :src="essay.shops_logo"></image>
					</view>
					<view class="publisher-info">
						<text class="name">{{essay.shops_name}}</text>
						<text class="publish-date">{{essay.ctime}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="essay-container">
			<rich-text :nodes="essay.content" style="font-size: 26rpx;"></rich-text>
			
		</view>
		<view class="recommend">
			<view class="recommend-header">
				<text class="recommend-text">相关推荐</text>
				<!-- <view class="more">
					<text class="more-text">更多</text>
					<image class="icon-more" src="../../static/icon-rightarrow.png"></image>
				</view> -->
				
			</view>
			<navigator v-for="item in recommendEssay" open-type="navigate" :url="['essaydetail?id='+item.id]">
				<view class="recommend-item" >
					<view class="recommend-img">
						<image mode="aspectFill" :src="item.cover"></image>
					</view>
					<view class="recommend-info">
						<text class="recommend-title">{{item.title}}</text>
						<text class="publish-date">{{item.ctime}}</text>
					</view>
				</view>
			</navigator>
		</view>
		<view class="reply">
			<view class="reply-input">
				<textarea class="input" placeholder="回复有价值的东西,是对作者最大的支持" :value='content' @input="getContent"></textarea>
			</view>
			<view class="reply-btn" @click="publishComment()">
				回复
			</view>
		</view>
		<view class="comment">
			<view class="comment-item" v-for="item in comment">
				<view class="user">
					<view class="avatar">
						<image :src="item.headimg"></image>
					</view>
					<view class="user-info">
						<text class="name">{{item.name}}</text>
						<text class="publish-date">{{item.ctime}}</text>
					</view>
				</view>
				<view class="comment-content">
					<text>{{item.recommend}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default{
		data(){
			return{
				recommendEssay:null,
				essay:null,
				essayid:null,
				content:null,
				openid:null,
				session:null,
				comment:null
			}
		},
		methods:{
			refreshData:function(){
				uni.showLoading({
					title:'加载中...'
				})
				
				let that =	this;
				
				uni.request({
					url:helper.webroot + 'api/essay/detail',
					data:{
						id:that.essayid
					},
					method:"GET",
					success:function(res){
						
						that.essay = res.data.data[0];
						
						that.essay.content = that.formatRichText(that.essay.content)
						console.log(that.formatRichText(that.essay.content));
						
						uni.request({
							url:helper.webroot + "api/essay/recommend",
							data:{
								cat : that.essay.cat,
								id : that.essay.id
							},
							success:function(res){
								that.recommendEssay = res.data.data;
								console.log(that.recommendEssay);
							}
						})
					}
				})
				uni.request({
					url:helper.webroot + "api/essay/comment",
					data:{
						essayid:that.essayid
					},
					success:function(res){
						that.comment = res.data.data;
						console.log('comment');
						console.log(that.comment);
						uni.hideLoading();
					}
				})
				
			},
			publishComment:function(){
				let that = this;
				uni.showLoading({
					title:'加载中...'
				})
				uni.request({
					url:helper.webroot+'/api/my/recommend',
					method:"POST",
					header:{
						session:that.session
					},
					data:{
						comment:that.content,
						openid:that.openid,
						essayid:that.essayid
					},
					success:function(res){
						console.log("成功:");
						console.log(res);
						if(res.data.status == 0){
							that.content = null;
							uni.showToast({
								title:'评论成功!'
							})
							that.refreshData();
						}
						
					}
				})
			},
			getContent:function(event){
				this.content = event.detail.value;
			},
			getComment:function(){
				let that = this;
				uni.request({
					url:helper.webroot + "api/essay/comment",
					data:{
						essayid:that.essayid
					},
					success:function(res){
						that.comment = res.data.data;
						console.log('comment');
						console.log(that.comment);
					}
				})
			},
			//格式化富文本中的图片;
			formatRichText:function (html){
			  let newContent= html.replace(/<img[^>]*>/gi,function(match,capture){
			    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
			    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
			    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
			    return match;
			  });
			  newContent = newContent.replace(/style="[^"]+"/gi,function(match,capture){
			    match = match.replace(/width:[^;]+;/gi, 'width:100%;').replace(/width:[^;]+;/gi, 'width:100%;');
			    return match;
			  });
			  newContent = newContent.replace(/<br[^>]*\/>/gi, '');
			  newContent = newContent.replace(/\<img/gi, '<img style="width:100%;height:auto;display:block;margin-top:25px;margin-bottom:20px;"');
			  return newContent;
			}
		},
		onLoad:function(option){
			this.essayid = option.id;
			this.session = uni.getStorageSync('session');
			this.openid = uni.getStorageSync('id');
			this.refreshData();
		}
	}
</script>
	
<style>
	page{
		background-color: #F2F2F2;
	}
	.main-container{
		padding: 0;
		background-color: #F2F2F2;
		
	}
	.header{
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		padding: 24upx 24upx 10upx 24upx;
	}
	.title-img{}
	.title-img image{
		height: 400upx;
		width: 100%;
		border-radius: 10upx;
	}
	.publisher{
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		margin: 0 10upx;
	}
	.title-text{
		font-size: 34upx;
		line-height: 45upx;
		margin: 10upx 0;
	}
	.publisher-item{
		display: flex;
		flex-direction: row;
		margin: 20upx 0 0 0;
	}
	.avatar{
		margin-right: 25upx ;
	}
	.avatar image{
		width: 100upx;
		height: 80upx;
		border-radius: 15upx;
	}
	.publisher-info{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.name{
		align-self: flex-start;
		font-size: 32upx;
		
	}
	.publish-date{
		
		font-size: 26upx;
		color: #7F7F7F;
	}
	.essay-container{
		color: #2F2F2F;
		font-size: 26rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;
	}
	
	.recommend{
		margin: 15upx 0;
		background-color: #FFFFFF;
	}
	.recommend-header{
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		padding: 0 24upx;
	}
	.icon-more{
		width: 35upx;
		height: 35upx;
	}
	.recommend-text{
		font-size: 34upx;
		font-weight: 450;
	}
	.more-text{
		font-size: 28upx;
	}
	.more{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.recommend-item{
		box-shadow: 0 0 10px #F2F2F2;
		margin: 0 24upx 20upx 24upx;
		background-color: #FFFFFF;
		border: #F2F2F2 solid 5upx;
		border-radius: 15upx;
		padding: 25upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.recommend-img{
		width: 280upx;
		height: 180upx;
		margin-right: 40upx;
	}
	.recommend-img image{
		width: 280upx;
		height: 180upx;
		border-radius: 15upx;
		
	}
	.recommend-info{
		display: flex;
		flex-direction:column;
		justify-content: space-between;
		
	}
	.recommend-title{
		font-size: 32upx;
		overflow: hidden;
		-webkit-line-clamp: 2; 
		-webkit-box-orient: vertical;
		display: -webkit-box;
		
	}
	.publish-date{
		font-size: 28upx;
	}
	.reply{
		background-color: #FFFFFF;
		margin-top:5upx;
		margin-bottom: 0upx;
		padding:0 24upx;
		display: flex;
		flex-direction: column;
	}
	.reply-input{
		margin: 20upx 0;
		background-color: #F2F2F2;
		height: 80upx;
		border-radius: 15upx;
		padding: 30upx;
	}
	.input{
		height: 80upx;
		width: 650upx;
		font-size: 26rpx;
	}
	.reply-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size:30upx;
		background-color: #4BAFF5;
		color: #FFFFFF;
		width: 120upx;
		padding: 5upx 15upx;
		border-radius: 10upx;
		align-self: flex-end;
		margin-bottom: 20upx;
	}
	.comment{
		
	}
	.comment-item{
		padding: 20upx 24upx;
		background-color: #FFFFFF;
		margin-top: 5upx;
		display: flex;
		flex-direction: column;
	}
	.user{
		display: flex;
		flex-direction: row;
		margin-bottom:15upx ;
	}
	.user-info{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.avatar{
		width: 80upx;
		height: 80upx;
		border-radius:50%;
	}
	.avatar image{
		width: 80upx;
		height: 80upx;
		border-radius:50%;
	}
	.comment-content{
		font-size: 28upx;
		width: 600upx;
		align-self: flex-end;
	}
	
	rich-text   .rich-img {
		width: 100% ;
		height: auto ;
	}
</style>
