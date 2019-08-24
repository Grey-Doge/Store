<template>
	<view class="main-container">
		<view class="search-bar">
			<navigator open-type="navigate" url="searchseller/searchseller" hover-class="none">
				<view class="map-btn">
					<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3683242811,3872484969&fm=26&gp=0.jpg"></image>
					<text>{{currentCity}}</text>
				</view>
			</navigator>
			<navigator open-type="navigate" url="searchitem/searchitem" hover-class="none">
				<view class="searchbar">
					<image class="searchbar-image" src="../../static/icon-search.png"></image>
					<input :placeholder="popular[0].keyword_name"></input>
				</view>
			</navigator>
		</view>

		<view class="recommend-category">

		</view>

		<swiper class="swiper-area" indicator-dots="true"  indicator-active-color="#4baff5"autoplay="true">
			<swiper-item @click="toEssay($event)" style="border-radius:15upx;"  v-for="item in banner" :data-id="item.url" :data-classid="item.classid" :data-uid="item.uid">
					<image mode="aspectFill" :src="item.wechat_banner"></image>
			</swiper-item>
		</swiper>

		<view class="head-icon">
			<navigator open-type="navigate" :url="['../floors/floors?title='+item.floor+'&id='+item.id]" v-for="(item,index) in floors" hover-class="none">
				<block v-if="floors.length >= 5 && index < 4" >
				<view class="head-icon-item" >
					<image :src="['../../static/'+(index+1)+'.png']"></image>
					<text>{{item.floor}}楼</text>
				</view>
				</block>
				<block v-else-if="floors.length >= 5 && index >= 4">
					<view class="head-icon-item" >
						<image src="../../static/n.png"></image>
						<text>更多</text>
					</view>
				</block>
			</navigator>
		</view>

		<view class="recommend-icon">
			<block v-for="(item,index) in recommendIcons">
			<navigator open-type="navigate" :url="['../searchItemDetail/searchItemDetail?keywords='+item.name]" hover-class="none" v-if="index <= 4">
				<view class="recommend-icon-item" >
						<image :src="item.img"></image>
						<text>{{item.name}}</text>
				</view>
			</navigator>
			</block>
			
		</view>
		
		<view class="recommend-icon">
			<block v-for="(item,index) in recommendIcons">
			<navigator open-type="navigate" :url="['../searchItemDetail/searchItemDetail?keywords='+item.name]" hover-class="none" v-if="index > 4">
				<view class="recommend-icon-item" >
						<image :src="item.img"></image>
						<text>{{item.name}}</text>
				</view>
			</navigator>
			</block>
			
		</view>

		<view class="main-body">
			<view class="recommend-store">

				<view class="recommend-store-title">
					<text class="title">推荐商家</text>
					<navigator open-type="switchTab" url="../shop/shoplist">
						<text class="more-text">更多 ></text>
					</navigator>
				</view>

				<view class="recommend-store-container">

					<view class="recommend-store-item" v-for="item in recommendShops" :data-id="item.shops_id" @click="toShop($event)">
							
							<image :src="item.shops_door" mode="aspectFill"></image>
							<view class="recommend-store-storename">{{item.shops_name}}</view>
							<view class="recommend-store-tag">
								<text v-for="item in item.compan_tags">{{item}}</text>
							</view>
							
					</view>

				</view>
			</view>

			<view class="recommend-job">


				<view class="recommend-job-title">
					<text class="title">推荐职位</text>
					<navigator open-type="switchTab" url="recruitment">
						<text class="more-text">更多 ></text>
					</navigator>
				</view>

				<view class="recommend-job-container">
					<block v-for="item in recommendJobs" key="item.id">
						<navigator :url="['recruitmentdetail/recruitmentdetail?id='+item.id]" open-type="navigate">
							<view class="recommend-job-item">
								<view class="job-introduction">
									<text class="recommend-job-jobname">{{item.jobname}}</text>
									<text class="recommend-job-salary">{{item.jobmoney}}/月</text>
								</view>
								<view class="job-require">
									<view class="job-require-text">
										<block v-for="(subitem,index) in item.require_tag">
											<text v-if="index < 3">{{subitem}}</text>
											<label class="separate" v-if="index < 2">|</label>
										</block>
									</view>
									<text class="publish-date">2019/4/25</text>
								</view>
								<view class="job-tag">
									<block v-for="(subitem,index) in item.welfear_tag">
									<text v-if="index < 3">{{subitem}}</text>
									</block>
								</view>
								<view class="company">
									<text class="company-name">{{item.companyname}}</text>
								</view>
							</view>
						</navigator>
					</block>
				</view>
				<view class="technology-support">
					<text>{{support}}</text>

				</view>

			</view>
		</view>
	
	
	
	</view>

</template>

<style>
	.main-container {
		padding: 0 0;
	}

	.search-bar {
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		padding: 0 24upx;
	}

	.map-btn {
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		width: 156upx;
		height: 72upx;
		border-radius: 15upx;
		background-color: rgb(242, 242, 242);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}

	.map-btn image {
		width: 40upx;
		height: 40upx;

	}

	.map-btn text {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 10upx;

	}

	.searchbar {
		display: flex;
		align-items: center;
		font-size: 27upx;
		width: 540upx;
		height: 72upx;
		color: #7F7F7F;
		/* color: rgb(127, 127, 127); */
		border-radius: 15upx;
		background-color: rgb(242, 242, 242);
		margin-left: 15upx;
	}

	.searchbar image {
		height: 30upx;
		width: 30upx;
		margin: 0 10upx 0 20upx;
	}

	.recommend-category {
		margin: 10upx 0 20upx 0;
		padding: 0 24upx;
	}

	.swiper-area {
		height: 250upx;
		
		border-radius: 15upx;
		margin-bottom: 20upx;
		padding: 0 24rpx;
	}

	.swiper-area image {
		height: 250upx;
		width: 100%;
	}

	.head-icon {
		padding: 0 24upx;
		display: flex;
		justify-content: space-around;
		margin-bottom: 30upx;
	}

	.head-icon-item {
		font-size: 26upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 0 24upx;
	}

	.head-icon-item image {
		margin-bottom: 15upx;
		width: 96upx;
		height: 96upx;
		background-color: #4BAFF5;
		border-radius: 10upx;
	}

	.recommend-icon {
		padding: 0 24upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30upx;
	}

	.recommend-icon-item {
		font-size: 28rpx;
		color: #333333;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.recommend-icon-item image {
		margin-bottom: 15upx;
		width: 96upx;
		height: 96upx;

	}

	.main-body {
		background-color: rgb(242, 242, 242);
	}

	.recommend-store {
		margin: 15upx 0;
		background-color: #FFFFFF;
		border-bottom: 2upx solid #F2F2F2;
	}

	.recommend-store-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80upx;
		font-size: 34upx;
		border-bottom: 4upx solid #F2F2F2;
	}

	.title {
		margin: 0 24upx;
	}

	.more-text {
		font-family: "PingFang-SC-Regular";
		font-size: 24upx;
		color: rgb(47, 47, 47);
		margin-right: 24upx;
	}

	.recommend-store-container {
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 8upx 24upx;

	}

	.recommend-store-item {
		display: flex;
		flex-direction: column;
		height: 330upx;
		width: 332upx;
		background-color: rgb(242, 242, 242);
		border-radius: 15upx;
		margin: 10upx 0;
	}

	.recommend-store-item image {
		width: 332upx;
		height: 222upx;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.recommend-store-storename {
		font-size: 28rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 250rpx;
		margin: 10rpx;
		color: #222222;
	}

	.recommend-store-tag {
		font-size: 22upx;


	}

	.recommend-store-tag text {
		padding: 4rpx;
		margin: 0 10upx;
		border: #FFD39B;
		background-color: rgb(255,228,199);
		color: rgb(242, 125, 0);
	}

	.recommend-job {
		margin: 15upx 0 0 0;
		background-color: #FFFFFF;
	}

	.recommend-job-item {
		border-bottom: 2upx solid #F2F2F2;
	}

	.recommend-job-title {

		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 450;
		height: 80upx;
		font-size: 33upx;
		border-bottom: 4upx solid #F2F2F2;
	}

	.recommend-job-container {
		border-bottom: 4upx rgb(242, 242, 242) solid;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;

	}

	.job-introduction {

		display: flex;
		justify-content: space-between;
		color: rgb(47, 47, 47);
		font-size: 30upx;
		margin: 15rpx 24rpx 0 24rpx;
		font-weight: bold;
	}

	.recommend-job-jobname {
		font-size: 30rpx;
		font-weight: bold;
	}

	.recommend-job-salary {
		font-size: 28upx;
		color: rgb(242, 0, 34);
	}

	.job-require {
		margin: 10rpx 24rpx;
		display: flex;
		justify-content: space-between;
		color: #7F7F7F;
		font-size: 26rpx;

	}

	.publish-date {
		color: rgb(95, 95, 95);
		font-size: 22rpx;
	}

	.separate {
		margin: 0 15upx;
	}

	.job-tag {
		display: flex;
		color: rgb(47, 47, 47);
		font-size: 30upx;
		margin: 5upx 24upx;

	}

	.job-tag text {
		padding: 4rpx;
		/* width: 100upx; */
		display: flex;
		font-size: 22rpx;
		align-items: center;
		justify-content: center;
		margin-right: 20upx;
		border: #FFD39B;
		/* background-color:rgb(242,125,0); */
		background-color: rgb(255,228,199);
		color: rgb(242, 125, 0);
	}

	.company {
		display: flex;
		color: rgb(47, 47, 47);
		font-size: 30upx;
		margin: 10upx 24upx 18upx 24upx;
	}

	.company-name {
		font-size: 28upx;
		color: rgb(47, 47, 47);
		font-weight: bold;
	}

	.technology-support {
		height: 80upx;
		background-color: rgb(242, 242, 242);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.technology-support text {
		font-size: 28upx;
		color: #7F7F7F;
	}
	.mask{
		background-color: #000000;
		opacity: 0.5;
		position: fixed;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 50;
	}
	
</style>

<script>
	import helper from '../../common/helper.js';
	import amap from '../../common/amap-wx.js';
	import QQMapWX from '../../common/qqmap-wx-jssdk.js';
	export default {
		data() {
			return {
				title: 'Hello',
				currentCity: '广州',
				currentAddress:{},
				showMask:false,
				sellerList:null,
				recommendShops:null,
				recommendJobs:null,
				banner:null,
				floors:null,
				recommendIcons:null,
				currentSeller:null,
				essayList:null,
				popular:helper.popular,
				support:null,
				tabBar:null
			}
		},
		onLoad:function(options) {
			
			let that = this;
			that.refreshData();
			//加载热搜;
			that.popular = helper.popular;
			
			uni.authorize({
				scope:'scope.userInfo',
				success:function(res){
					console.log(res);
					uni.showToast({
						title:'拥有用户信息权限'
					})
					
				},
				fail:function(error){
					// uni.showModal({
					// 			title:'登录提示',
					// 			content:'您暂未登录,请登录/注册',
					// 			success:function(res) {
					// 				if(res.confirm){
					// 					uni.switchTab({
					// 						url:'../user/myinfo'
					// 					})
					// 				}
					// 			}
					// 		})
				}
			})
			
			//页面加载时,判断是否拥有用户信息权限;
			// uni.getStorage({
			// 	key:'userInfo',
			// 	success:function(res){
			// 		uni.showToast({
			// 			title:'拥有用户信息权限'
			// 		})
			// 		console.log('拥有用户信息权限:');
			// 		console.log(res);
			// 	},
			// 	fail:function(error){
			// 		console.log('未拥有用户信息权限:');
			// 		console.log(error);
			// 		uni.showToast({
			// 			title:'未拥有用户信息权限'
			// 		})
			// 		uni.showModal({
			// 			title:'登录提示',
			// 			content:'您暂未登录,请登录/注册',
			// 			success:function(res) {
			// 				if(res.confirm){
			// 					uni.switchTab({
			// 						url:'../user/myinfo'
			// 					})
			// 				}
			// 			}
			// 		})
			// 	}
			// })
		},
		onShow() {
			this.currentCity = helper.city;
			//页面展示时,检测当前是否含有城市传值,根据不同城市显示不同的卖场和卖家,若不含,则根据当前定位城市加载页面;
			console.log('isCityChange:'+helper.isCityChange);
			if (helper.isCityChange) {
				//调用接口重新加载数据;
				
				uni.showLoading({
					title: '加载中...'
				})
				uni.hideTabBar()
				setTimeout(function() {
					uni.hideLoading();
					uni.showTabBar();
					helper.isCityChange = false;
					console.log("this.showMask"+this.showMask );
					console.log('城市变更:' + helper.city);
				}, 2000);
				
			}
		},
		onPullDownRefresh:function(){
			//重新加载页面数据;
			console.log('刷新!');
			this.refreshData();
			uni.stopPullDownRefresh();
		},
		methods: {
			refreshData:function(){
				uni.showLoading({
					title:"加载中..."
				})
				let that = this;
				console.log('helper:');
				console.log(helper.popular);
				
				//实例化腾讯服务对象;
				let qqMap = new QQMapWX({
					key:helper.qqMapKey
				})
				//获取用户地址;
				uni.getLocation({
					success:function(res){
						that.currentAddress = res;
					}
				})
				//获取卖场地址;
				uni.request({
					url:helper.webroot + 'api/seller/getallsellers',
					method:'GET',
					success:function(result){
						that.sellerList = result.data.data;
						//将精度纬度由字符串类型转换成浮点类型,方便之后调用API进行距离计算;
						helper.Convert(that.sellerList );
						
						//计算两地距离;
						qqMap.calculateDistance({
							to:that.sellerList,
							success:function(data){
								console.log('计算成功!');
								console.log(data.result.elements.sort(helper.sortByProp("distance")));
								for (let i= 0;i<that.sellerList.length;i++) {
									if(that.sellerList[i].latitude === data.result.elements[0].to.lat&&that.sellerList[i].longitude === data.result.elements[0].to.lng){
										console.log("当前默认选中卖场为:"+that.sellerList[i].name);
										that.currentSeller = that.sellerList[i];
										
										//获取卖场首页信息;
										uni.request({
											url:helper.webroot+"api/seller/index",
											method:'GET',
											data:{
												seller:1
											},
											success:function(res){
												console.log("首页数据刷新成功");
												console.log(res.data);
												that.recommendShops =res.data.data.recommendshop;
												that.recommendJobs = res.data.data.recommendjob;
												that.banner = res.data.data.banner;
												that.essayList = res.data.data.essaylist;
												that.floors = res.data.data.floors;
												uni.hideLoading();
											
											}
										})
										uni.request({
											url:helper.webroot + "api/seller/cate",
											method:"GET",
											success:function(res){
												that.recommendIcons = res.data.data;
											}
										})
										uni.request({
											url:helper.webroot + "api/seller/suppurt",
											method:"GET",
											success:function(res){
												that.support = res.data.value;
											}
										})
										uni.request({
											url:helper.webroot + "api/seller/footnavigation",
											method:"GET",
											success:function(res){
												console.log("导航栏");
												console.log(res.data.data);
												that.tabBar = res.data.data;
												uni.setTabBarItem({
													index:0,
													text:that.tabBar.nav_index,
													iconPath:that.tabBar.index_img,
													selectedIconPath:that.tabBar.index_img_change,
													success:function(res){
														console.log("设置成功了!");
														console.log(res);
													}
												})
												uni.setTabBarItem({
													index:1,
													text:that.tabBar.nav_shop,
													iconPath:that.tabBar.shop_img,
													selectedIconPath:that.tabBar.shop_img_change,
													success:function(res){
														console.log("设置成功了!");
														console.log(res);
													}
												})
												uni.setTabBarItem({
													index:2,
													text:that.tabBar.nav_playground,
													iconPath:that.tabBar.playground_img,
													selectedIconPath:that.tabBar.playground_img_change,
													success:function(res){
														console.log("设置成功了!");
														console.log(res);
													}
												})
												uni.setTabBarItem({
													index:3,
													text:that.tabBar.nav_my,
													iconPath:that.tabBar.my_img,
													selectedIconPath:that.tabBar.my_img_change,
													success:function(res){
														console.log("设置成功了!");
														console.log(res);
													}
												})
											}
										})
										break;
									}
								}
							},
							fail:function(error){
								console.log("错误信息");
								console.log(error);
								uni.showModal({
									content:'获取商家功能需要授权位置信息',
									title:'提示',
									confirmText:'去授权',
									cancelText:'取消',
									success:function(res){
										if(res.confirm){
											uni.openSetting({
												success:function(){
													console.log('打开设置界面...')
												}
											})
										}
									}
								})
							}
						})
						
						
					}
				})
			},
			getFloors:function(){
				uni.request({
					method:'GET',
					data:{
						page:"1",
						
					}
				})
			},
			toShop: function(event) {
				let id = event.currentTarget.dataset.id;
				uni.navigateTo({
					url: '../shop/shopinfo?shops_id='+id
				})
			},
			toEssay: function(event) {
				let id = event.currentTarget.dataset.id;
				let classid = event.currentTarget.dataset.classid;
				let uid = event
				if(classid === 1){
					uni.navigateTo({
						url: '../shop/essaydetail?id='+id
					})
				}else if(classid === 2){
					uni.navigateTo({
						url: 'recruitmentdetail/recruitmentdetail?id='+id
					})
				}else{
					uni.navigateTo({
						url: '../shop/shopinfo?shops_id='+id
					})
				}
				
				
			},
			moreShop: function() {
				uni.navigateTo({
					url: '../shop/shoplist'
				})
			}
			
		}
	}
</script>
