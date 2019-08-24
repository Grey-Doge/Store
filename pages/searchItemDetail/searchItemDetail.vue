<template>
	<view class="main-container">
		<view class="header">
			<view class="intput-container">
				<image src="../../static/icon-search.png"></image>
				<input :value="searchText" placeholder="请输入你搜索的" style="width: 100%;" maxlength="15" />
			</view>
		</view>
		<view class="switch-tab">
			<view class="switch-tab-item" @click="switchTab($event)" v-bind:data-index="0">
				<text v-bind:style="{'color':currentTab==0?'#FF0000':''}">文章</text>
				<text v-bind:class="currentTab==0?'active':''"></text>
			</view>
			<view class="switch-tab-item" @click="switchTab($event)" v-bind:data-index="1">
				<text v-bind:style="{'color':currentTab==1?'#FF0000':''}">商家</text>
				<text v-bind:class="currentTab==1?'active':''"></text>
			</view>
		</view>

		<view class="essay-content" v-show="currentTab==0">
			
			<block v-if="essayList.length > 0">
			<view class="essay-item" v-for="item in essayList">
				<navigator open-type="navigate" :url="['../shop/essaydetail?id='+item.id]" hover-class="none">
					<image mode="widthFix" :src="item.cover"></image>
					<view class="essay">
						<view class="title">
							<text>{{item.title}}</text>
						</view>
						<view class="publisher">
							<view class="shop">
								<view class="avatar">
									<image :src="item.shops_logo"></image>
								</view>
								<view class="name">{{item.shops_name}}</view>
							</view>
							<view class="publish-date">
								<text>{{item.date}}</text>
							</view>
						</view>
					</view>
				</navigator>
			</view>
			</block>
			<block v-else>
			<view class="empty">暂无内容</view>
			</block>
		</view>


		<view class="shop-content" v-show="currentTab==1">
			<view class="shop-item" v-for="item in shopList">
				<navigator open-type="navigate" :url="['../shop/shopinfo?shops_id='+item.shops_id]" hover-class="none">
					<view class="shop-header">
						<view class="shop-avatar">
							<image mode="aspectFit" :src="item.shops_logo"></image>
						</view>
						<view class="shop-info">
							<text class="shop-name">{{item.shops_name}}</text>
							<view class="shop-tag">
								<text  v-for="item in item.compan_tags">{{item}}</text>
							</view>
						</view>
						<view class="into-shop">进店</view>
					</view>
				</navigator>
				<view class="display-item">
					<block v-for="item in item.previewimg" >
						<navigator :url="['../shop/essaydetail?id='+item.id]" open-type="navigate" hover-class="none">
							<image :src="item.cover" ></image>
						</navigator>
					</block>
				</view>
			</view>
		</view>
		<view class="bottom" @click="loadMore" v-show="essayList.length > 0">
			{{bottomText}}
		</view>

	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default {
		data() {
			return {
				currentTab: 0,
				essayList:null,
				shopList:null,
				swiperHeight: 0,
				bottomText: "加载更多...",
				currentPage:1,
				searchText:null
			}
		},
		methods: {
			/**
			 * @author RustyLake
			 * @version 2019-07-31
			 * @method	切换选项卡
			 * */
			switchTab: function(obj) {
				let that =this;
				console.log(obj.currentTarget.dataset.index);
				that.currentTab = obj.currentTarget.dataset.index;
				if(that.currentTab === 0){
					uni.request({
						url:helper.webroot + "/api/search/seachshops",
						method:"GET",
						data:{
							keyword:that.searchText,
							type:1,
							page:1
						},
						success:function(res){
							console.log(res);
							that.essayList = res.data.data;
						}
					})
				}else{
					uni.request({
						url:helper.webroot + "/api/search/seachshops",
						method:"GET",
						data:{
							keyword:that.searchText,
							type:2,
							page:1
						},
						success:function(res){
							console.log(res);
							that.shopList = res.data.data;
						}
					})
				}
			},
			loadMore: function(res) {
				let that = this;
				console.log('触碰到底部,加载事件');
				console.log(res);
				that.bottomText = "正在加载..."
				uni.request({
					url:helper.webroot + "/api/search/seachshops",
					method:"GET",
					data:{
						keyword:that.searchText,
						type:that.currentPage + 1,
						page:that.currentPage
					},
					success:function(res){
						console.log(res);
						if(res.data.data.length <= 0){
							that.bottomText = "已无更多文章"
						}
						that.currentPage = that.currentPage + 1;
					}
				})
				
			}
		},
		onLoad: function(option) {
			uni.showLoading({
				title:'加载中...'
			})
			this.searchText = option.keywords;
			let that = this;
			//获取文章;
			uni.request({
				url:helper.webroot + "/api/search/seachshops",
				method:"GET",
				data:{
					keyword:that.searchText,
					type:1,
					page:that.currentPage
				},
				success:function(res){
					console.log(res);
					that.essayList = res.data.data;
					that.swiperHeight = that.essayList.length * 500;
					that.currentPage = that.currentPage+1;
					uni.hideLoading();
				}
			})
		}
		
	}
</script>

<style>
	page {
		background-color: rgb(242, 242, 242);
	}

	.switch-tab-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50%;
	}

	.shop-item,
	.essay-item {
		border-bottom: rgb(242,242,242) solid 8upx;
		padding: 15upx 24upx;
	}

	.bottom {
		background-color: rgb(242, 242, 242);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 20rpx 0;
		color: #757575;
		font-size: 30rpx;
		z-index: 1000;
	}

	.shop-content,
	.essay-content {

		position: relative;
		margin-top: 180upx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		margin-top: 15upx;
	}

	.switch-tab {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20upx 24upx;
		font-size: 28upx;
		position: fixed;
		top: 100upx;
		z-index: 110;
		width: 95%;
		background-color: #FFFFFF;
	}

	.active {
		
		margin-top: 10upx;
		width: 80upx;
		height: 1upx;
		border-bottom: #FF0000 solid 2upx;
	}

	.switch-tab text {
		display: inline-block;

	}

	.header {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		font-size: 30upx;
		position: fixed;
		top: 0;
		z-index: 10;
		width: 94%;
		height: 100upx;
		padding: 0 24upx;
	}

	.intput-container {
		border-radius: 15upx;
		display: flex;
		padding: 20upx;
		align-items: center;
		flex-direction: row;
		height: 40upx;
		background-color: #F2F2F2;
	}

	.intput-container image {
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}


	.main-container {

		background-color: #FFFFFF;
		padding: 0;

	}

	.essay-item {
		margin-bottom: 15upx;
		display: flex;
		flex-direction: column;
		position: relative;

	}

	.essay-item image {
		width: 100%;
		max-height: 350upx;
		z-index: 2;
		border-radius: 15upx;
	}

	.essay {

		background-color: #FFFFFF;
		height: 130upx;
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
		position: relative;
		bottom: 20upx;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 20upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.title {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 32upx;
	}

	.publisher {
		margin-top: 8upx;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	.shop {
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.avatar image {
		height: 35upx;
		width: 45upx;
		border-radius: 8upx;
		margin-right: 15upx;
	}

	.publish-date {
		color: #7F7F7F;
	}





	.shop-item {
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}

	.shop-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 25upx 0;
	}

	.shop-avatar {
		height: 120upx;
		width: 200upx;

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

	.into-shop {
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

	.display-item {
		padding: 15upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.display-item image {
		border-radius: 25upx;
		width: 340upx;
		height: 360upx;
	}


	.evaluation {

		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 30upx;
		height: 100upx;
		width: 699upx;
		background-color: #F2F2F2;
		border-radius: 15upx;
	}

	.evaluation .user-name {
		font-size: 30upx;
		font-weight: 450;
		margin: 0 25upx;
	}

	.evaluation .comment {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}
	.empty{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 35rpx;
		font-size: 25rpx;
	}
</style>
