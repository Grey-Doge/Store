<template>
	<view class="main-container">



		<view class="intput-container">
			<image src="../../../static/arrow-left%20.png" style="width: 48upx;height: 48upx;margin: 0;" @click="resetInputText"></image>
			<view class="input-bg">
				<image src="../../../static/icon-search.png"></image>
				<input :value="searchText" :placeholder="popular[0].keyword_name" style="width: 100%;" @input="getInputText" />
			</view>
			<view class="search-btn" @click="search">搜索</view>
		</view>
		<!-- <view class="search-container" v-show="searchText != ''">
			<view class="search-item" @click="toSearchDetail">
				鼠标
			</view>
			<view class="search-item" @click="toSearchDetail">
				鼠标垫
			</view>
			<view class="search-item" @click="toSearchDetail">
				键盘
			</view>
			<view class="search-item" @click="toSearchDetail">
				鼠标键盘套装
			</view>
		</view> -->
		<view>
			<view class="history-container">
				<view class="history-header">
					<view class="history-left">
						<image src="../../../static/资源%203@2x.png"></image>
						<text>历史记录</text>
					</view>
					<view class="history-right" @click="cleanHistory()" v-show="history!=null">
						<image src="../../../static/回收站.png"></image>
					</view>
				</view>
				<view class="history-item">
					<block v-if="history!=null">
						<text v-for="item in history" :key="key" @click="goSearchByHisAndPop($event)" :data-text="item">
							{{item}}
						</text>
					</block>
					<block v-else>
						还没有数据嗷~~
					</block>
				</view>
			</view>
			<view class="popular-search-container">
				<view class="popular-search-header">
					<image src="../../../static/资源%202@2x.png"></image>
					<text>热门搜索</text>
				</view>
				<view class="popular-search-item">
					<navigator v-for="item in popular" hover-class="none" :url="['../../searchItemDetail/searchItemDetail?keywords='+item.keyword_name]"
					 style="display: inline;">
						<text @click="goSearchByHisAndPop($event)" :data-text="item.keyword_name">{{item.keyword_name}}</text>
					</navigator>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import helper from '../../../common/helper.js';
	export default {
		data() {
			return {
				searchText: '',
				history: null,
				popular: null
			}
		},
		onLoad: function() {
			this.getHistory();
			this.refreshPopular();
		},
		methods:{
				goSearchByHisAndPop: function(event) {
					let that=this;
					that.searchText = event.currentTarget.dataset.text;
					uni.navigateTo({
						url: '../../searchItemDetail/searchItemDetail?keywords='+that.searchText
					})
				},
				refreshPopular: function() {
					let that = this;
					uni.request({
						url: helper.webroot + "api/search/popular",
						method: 'GET',
						success: function(res) {
							that.popular = res.data.data;
						}
					})
				},
				/**
				 *	@author RustyLake	
				 *	@version 1.0.0
				 *	@ignore 2019-07-31
				 *	@method 清除历史记录;
				 * */
				cleanHistory: function() {
					let that = this;
					uni.showModal({
						title: '删除历史记录',
						content: '删除后不可恢复',
						success: function(res) {
							if (res.confirm) {
								uni.showLoading({
									title: '删除历史记录'
								})
			
								uni.removeStorage({
									key: "history",
									success: function(res) {
										uni.hideLoading();
										console.log('删除成功');
										console.log(res);
										that.history = null;
									},
									fail: function(res) {
										console.log('删除失败');
										console.log(res);
									}
								})
			
			
							} else {
								uni.showToast({
									title: '用户点击了取消按钮'
								})
							}
			
						}
					})
				},
				/**
				 * @author	RustyLake
				 * @version	1.0.0
				 * @ignore	2019-07-31
				 * @method	搜索文章或商家,并在历史记录中新增一条数据,历史记录保存最多为10条;
				 * */
				search: function() {
					let that = this;
					if (this.searchText === '' || this.searchText.length <= 0 || this.searchText === undefined || this.searchText ===
						null) {
						console.log('空字符串,不计入历史记录');
						uni.navigateTo({
							url: '../../searchItemDetail/searchItemDetail?keywords=' + that.popular[0].keyword_name
						})
						return;
					} else {
			
						let that = this;
						uni.getStorage({
							key: 'history',
							success: function(res) {
								//有搜索记录,是否大于10?;
								if (res.data.length >= 10) {
									//删除数组最后一个元素;
									res.data.splice(res.data.length - 1, 1);
									//向数组首部添加元素;
									res.data.unshift(that.searchText);
									that.history = res.data;
								} else {
									res.data.unshift(that.searchText);
									that.history = res.data;
								}
			
								uni.setStorage({
									key: 'history',
									data: that.history,
									success: function() {
										uni.navigateTo({
											url: '../../searchItemDetail/searchItemDetail?keywords=' + that.searchText
										})
									}
								})
								//更新缓存;
							},
							fail: function(res) {
								//无搜索记录;
								that.history = [];
								that.history.unshift(that.searchText);
								uni.setStorage({
									key: 'history',
									data: that.history,
									success: function() {
										uni.navigateTo({
											url: '../../searchItemDetail/searchItemDetail?keywords=' + that.searchText
										})
									}
								})
							}
						})
					}
				},
				/**
				 * @author	RustyLake
				 * @ignore	2019-08-01
				 * @method	获取搜索历史记录
				 * */
				getHistory: function() {
					let that = this;
					uni.getStorage({
						key: 'history',
						success: function(res) {
							that.history = res.data;
						},
						fail: function(res) {
							console.log('获取失败:');
							console.log(res);
						}
					})
				},
				getInputText: function(obj) {
					this.searchText = obj.target.value;
				},
				resetInputText: function() {
					uni.switchTab({
						url: '../index'
					})
				},
				toSearchDetail: function() {
					uni.navigateTo({
						url: '../../searchItemDetail/searchItemDetail'
					})
				}
			
		}
	}
</script>

<style>
	.main-container {
		padding: 0;
	}

	.search-container {
		padding: 0 24upx;
		font-size: 30upx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.search-item {
		padding: 25upx 65upx;
		border-bottom: 1upx solid #F2F2F2;
		width: 100%;
	}

	.intput-container {
		padding: 0 24upx;
		margin: 15upx 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.input-bg {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #F2F2F2;
		width: 75%;
		border-radius: 15upx;
		padding: 10upx;
		font-size: 28upx;
	}

	.search-btn {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10upx 20upx;
		border-radius: 15upx;
		background-color: #4BAFF5;
		color: #FFFFFF;
		font-size: 28upx;
	}

	.intput-container image {
		width: 40upx;
		height: 40upx;
		margin: 0 20upx 0 15upx;
	}

	.history-container {
		margin: 15upx 0;
		padding: 0 24upx;
		display: flex;
		flex-direction: column;
	}

	.history-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 10upx 0;
	}

	.history-left {
		display: flex;
		align-items: center;

	}

	.history-left image {
		width: 35upx;
		height: 35upx;
		margin-right: 15upx;
	}

	.history-right {
		display: flex;
		align-items: center;
	}

	.history-right image {
		width: 45upx;
		height: 45upx;
		align-items: center;
	}

	.history-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		font-size: 28upx;
		color: #7F7F7F;
	}

	.history-item text {
		font-size: 28upx;
		border-radius: 15upx;
		background-color: #F2F2F2;
		color: #7F7F7F;
		margin: 10upx 15upx;
		padding: 5upx 10upx;
	}

	.popular-search-container {
		display: flex;
		flex-direction: column;
		padding: 0 24upx;

	}

	.popular-search-header {
		margin: 20upx 0;
	}

	.popular-search-header image {
		width: 35upx;
		height: 35upx;
		margin-right: 15upx;
	}

	.popular-search-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}

	.popular-search-item text {
		font-size: 28upx;
		border-radius: 15upx;
		background-color: #F2F2F2;
		color: #7F7F7F;
		margin: 10upx 15upx;
		padding: 5upx 10upx;
	}
</style>
