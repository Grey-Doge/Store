<template>
	<view class="main-container">
		<view class="avatar-area">
			<view class="avatar">
				<image v-if="userInfo == null" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4141915876,1132809892&fm=111&gp=0.jpg"></image>
				<image v-else v-bind:src='userInfo.avatarUrl'></image>
			</view>
			<block v-if="userInfo != null">
				<text class="user-name">
					{{userInfo.nickName}}
				</text>
			</block>
			<block v-else>
				<button open-type="getUserInfo" class="login-btn" @getuserinfo="handleGetUserInfo">
					登录/注册
				</button>
			</block>
			
		</view>
		<view class="main-body">
			<navigator open-type="navigate" url="history">
				<view class="userinfo-item">
					<view class="item-info">
						<image src="../../static/icon_history.png"></image>
						<text>访问记录</text>
					</view>
					<image class="right-arrow" src="../../static/icon-rightarrow.png"></image>
				</view>
			</navigator>
			<navigator open-type="navigate" url="comment">
				<view class="userinfo-item">
					<view class="item-info">
						<image src="../../static/icon_comment.png"></image>
						<text>我的评论</text>
					</view>
					<image class="right-arrow" src="../../static/icon-rightarrow.png"></image>
				</view>
			</navigator>
			<!-- <navigator open-type="navigate" url="../myPublish/myPublish">
				<view class="userinfo-item">
					<view class="item-info">
						<image src="../../static/icon_publish.png"></image>
						<text>我的发布</text>
					</view>
					<image class="right-arrow" src="../../static/icon-rightarrow.png"></image>
				</view>
			</navigator> -->
			
		</view>

	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default{
		data(){
			return{
				userInfo:null
			}
		},
		onLoad:function(){
			let that = this;
			uni.authorize({
				scope:'scope.userInfo',
				success:function(res){
					uni.getStorage({
						key:'userInfo',
						success:function(res){
							console.log(res)
							if(res !=undefined){
								that.userInfo = res.data;
							}
							
						}
					})
				}
			})
			
		},
		methods:{
			bindInfo:function(res){
				let that = this;
				
				console.log(res.detail.rawData);
				//用户同意授权;
				if(res.detail.errMsg == 'getUserInfo:ok'){
					//获取到的用户信息为JSON数据格式,需要将其转换为Object,否则模板引擎无法渲染;
					that.userInfo = JSON.parse(res.detail.rawData);
					//将用户信息存入缓存,下次获取无需调用接口;
					uni.setStorage({
						key:'userInfo',
						data:this.userInfo
					})
				}
			},
			handleGetUserInfo:function(res){
				let that = this;
				
				console.log(res.detail.rawData);
				//用户同意授权;
				if(res.detail.errMsg == 'getUserInfo:ok'){
					//获取到的用户信息为JSON数据格式,需要将其转换为Object,否则模板引擎无法渲染;
					that.userInfo = JSON.parse(res.detail.rawData);
					//将用户信息存入缓存,下次获取无需调用接口;
					uni.setStorage({
						key:'userInfo',
						data:this.userInfo
					})
				}
				
				
				
				uni.login({
					success:function(res){
						uni.request({
							url:helper.webroot+'api/login/openid.html?spm=m-61-73',
							data:{
								code:res.code
							},
							method:"POST",
							success:function(res){
								console.log("res:");
								console.log(res);
								let id = res.data.openid;
								uni.setStorage({
									key:'id',
									data:res.data.openid
								})
								uni.setStorage({
									key:'session',
									data:res.data.sessionID
								})
								
								//注册;
								uni.request({
									url:helper.webroot+"api/login/userinfo",
									method:"POST",
									data:{
										nickname:that.userInfo.nickName,
										sex:that.userInfo.gender,
										country:that.userInfo.country,
										province:that.userInfo.province,
										city:that.userInfo.city,
										headimg:that.userInfo.avatarUrl,
										openid:id
									},
									success:function(res){
										console.log("注册成功");
										console.log(res)
									}
								})
							}
						})
					}
				})
				
			}
		}
	}
</script>

<style>
	page{
		background-color: #F2F2F2;
	}
	.main-container {
		padding: 0;
		background-color: #F2F2F2;
	}
	.avatar-area {
		height: 350upx;
		background-color: #4BAFF5;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.avatar {
		height: 150upx;
		width: 150upx;
		border-radius: 50%;
		background-color: #FFD39B;
	}
	.avatar image {
		height: 150upx;
		width: 150upx;
		border-radius: 50%;
	}
	.user-name {
		color: #FFFFFF;
		margin: 25upx 0;
		font-size: 36upx;
		font-weight: 450;

	}
	.main-body {
		background-color: #F2F2F2;
		margin: 15upx 0;
	}
	.userinfo-item {
		display: flex;
		font-size: 32upx;
		height: 110upx;
		background-color: #FFFFFF;
		align-items: center;
		justify-content: space-between;
		margin: 8upx 0;
		padding: 0 24upx 0 30upx;
	}
	.item-info {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.item-info image {
		height: 50upx;
		width: 50upx;
		margin: 0 28upx 0 0;
	}
	.right-arrow {
		height: 30upx;
		width: 40upx;
	}
	.login-btn{
		background-color: #4BAFF5;
		color: #FFFFFF;
		outline: none;
		border: none;
		display: inline;
	}
	button::after{
		border: none;
	}
</style>
