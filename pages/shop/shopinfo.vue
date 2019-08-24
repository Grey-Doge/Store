<template>
	<view class="main-container">
		<view class="shop-item">
			<view class="shop-header">
				<view class="shop-avatar">
					<image mode="aspectFit" :src="shopInfo.shops_door"></image>
				</view>
				<view class="shop-info">
					<text class="shop-name">{{shopInfo.shops_name}}</text>
					<view class="shop-tag">
						<text v-for="item in shopInfo.compan_tag">{{item}}</text>
					</view>
				</view>

			</view>
			<view class="work-time">
				<text class="label">上班时间</text>
				<text class="time-text">上午9:00到下午18:00 (除周日)</text>
			</view>
			<view class="address">
				<text class="label">店铺地址</text>
				<text class="address-text" @click="openMap()">{{shopInfo.detailarea}}</text>
			</view>
			<view class="contact-number">
				<text class="label">联系电话</text>
				<text class="number-text" @click="phoneCall()">{{shopInfo.shops_phone}}</text>
			</view>
			<view class="switch-tab">
				<block v-for="(item,index) in tabList">
					<view v-if="index == tabList.length" class="btn recruitment" v-bind:class="{selected:index==current}" @click="switchTab(index)">
						{{item.name}}
					</view>
					<view v-else class="btn essay" v-bind:class="{selected:index==current}" @click="switchTab(index)">
						{{item.name}}
					</view>
				</block>
			</view>

			<view class="job-container" v-show="current==1">

				<view class="recruitment-item" v-for="item in recruitmentList">
					<navigator open-type="navigate" :url="['../index/recruitmentdetail/recruitmentdetail?id='+item.id]">
						<view class="job-info">
							<view class="job-name">
								<text class="name">{{item.jobname}}</text>
								<text class="tag">急招</text>
							</view>
							<view class="salary">
								<text>{{item.jobmoney}}/月</text>
							</view>
						</view>
						<view class="company-tag">
							<text>手机电源</text>
							<text class="separate"></text>
							<text>数据线</text>
							<text class="separate"></text>
							<text>显示屏</text>
						</view>
						<view class="company-welfare">
							<text>包吃住</text>
							<text>服务好</text>
							<text>年终奖</text>
						</view>
					</navigator>
				</view>

			</view>
			<view class="essay-container" v-show="current==0">

				<view class="essay-item" v-for="item in essayList">
					<navigator open-type="navigate" :url="['essaydetail?id='+item.id]">
						<image :src="item.cover"></image>
						<view class="title">
							<text class="title-text">{{item.title}}</text>
						</view>
					</navigator>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	//引入腾讯位置服务核心SDK;
	import QQMapWX from '../../common/qqmap-wx-jssdk.js';
	import helper from '../../common/helper.js';
	let qqMap;
	export default {
		data() {
			return {
				address: '广州必游信息科技有限公司',
				current: 0,
				tabList: [{
						name: '店铺资讯'
					},
					{
						name: '工作招聘'
					}
				],
				lat: null,
				lng: null,
				essayList: null,
				recruitmentList: null,
				shopid: null,
				shopInfo: null
			}

		},
		onLoad: function(obj) {
			//要使用逆地址解析,需要实例化QQMapWX对象,以便使用其提供的API;
			qqMap = new QQMapWX({
				key: 'GAFBZ-F6KLP-755D5-V5C4P-75SH2-5SFMG'
			})
			this.shopid = obj.shops_id;
			this.refreshData();
		},
		methods: {
			switchTab: function(index) {
				this.current = index;
			},
			openMap: function() {
				
				let that = this;
				
				qqMap.geocoder({
					address: that.shopInfo.detailarea,
					success: function(res) {
						console.log('经纬度:');
						console.log(res.result.location);
						//获取到经纬度信息,使用uni.openLocation API进行地图定位和导航;
						that.lat = res.result.location.lat;
						that.lng = res.result.location.lng;
						console.log('lat:' + that.lat + ",lng:" + that.lng);
						uni.openLocation({
							latitude: that.lat,
							longitude: that.lng,
							name: that.shopInfo.shops_name,
							address: that.shopInfo.detailarea
						})
					},
					fail: function() {
						console.log('无法定位到该地址，请确认地址信息！');
						console.log('无法定位到该地址，请确认地址信息！');
						uni.showToast({
							title:'无法定位到该地址，请确认地址信息！',
							icon:'none'
						})
					}
				})
			},
			
			phoneCall:function () {
				helper.phoneCall(that.shopInfo.shops_phone.toString());
			},
			refreshData: function() {
				uni.showLoading({
					title:'加载中...',
					mask:true
				})
				let that = this;
				uni.request({
					url: helper.webroot + 'api/shops/shopdetail',
					data: {
						shopid: that.shopid
					},
					method: "GET",
					success: function(res) {
						console.log("res:");
						console.log(res);
						that.shopInfo = res.data.data[0];

					},
					fail: function(res) {
						console.log('错误');
						console.log(res);
					}
				})
				uni.request({
					url: helper.webroot + 'api/shops/advisory',
					data: {
						shopid: that.shopid
					},
					method: "GET",
					success: function(res) {
						that.essayList = res.data.data;
					}
				})
				uni.request({
					url: helper.webroot + "api/shops/recruitment",
					data: {
						shopid: that.shopid
					},
					method: "GET",
					success: function(res) {
						that.recruitmentList = res.data.data;
						console.log("recru:");
						console.log(that.recruitmentList);
						uni.hideLoading();
					}
				})
				
			}
		}

	}
</script>

<style>
	page {
		background-color: #F2F2F2;
	}

	.main-container {
		padding: 0;
		background-color: #F2F2F2;
	}

	.shop-item {

		margin: 5upx 0 0 0;
	}

	.shop-header {

		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 25upx 24upx;
	}

	.shop-avatar {
		height: 120upx;
		width: 200upx;
		margin-right: 70upx;
	}

	.shop-avatar image {
		height: 120upx;
		width: 200upx;
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

	.work-time,
	.address,
	.contact-number {
		display: flex;
		align-items: center;
		height: 75upx;
		font-size: 30upx;
		background-color: #FFFFFF;
		margin-top: 5upx;
		padding: 0 0 0 24upx;
	}

	.label {
		margin-right: 45upx;
		width: 150rpx;
	}

	.address-text,
	.number-text {
		color: #4BAFF5;
	}

	.switch-tab {
		background-color: #F2F2F2;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
		height: 60upx;
		margin: 15upx 0;
	}

	.switch-tab .btn {
		font-size: 34upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60upx;
		width: 200upx;
		position: relative;
	}

	.essay {
		background-color: #FFFFFF;
		color: #4BAFF5;
		z-index: 2;
	}

	.recruitment {
		background-color: #FFFFFF;
		color: #4BAFF5;
		z-index: 1;
		left: -20upx;
	}

	.selected {
		background-color: #4BAFF5;
		color: #FFFFFF;
	}

	.essay-container {}

	.essay-item {
		padding: 0 24upx;
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 8upx 0;
	}

	.essay-item image {
		width: 100%;
		height: 400upx;
		border-radius: 15upx;
		z-index: 99;
	}

	.title {
		width: 100%;
		height: 100upx;
		background-color: #FFFFFF;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		position: relative;
		bottom: 15upx;
		display: flex;
		align-items: center;
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
	}

	.title-text {
		font-size: 32upx;
		padding: 10upx 15upx 0 15upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.separate {
		color: #7F7F7F;
		border-left: 3upx solid #7F7F7F;
		margin: 0 18upx;

	}

	.recruitment-item {
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		margin: 8upx 0;
	}

	.job-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 15upx 24upx 10upx 24upx;
	}

	.job-name {}

	.name {
		font-weight: 450;
	}

	.salary {
		color: #FF0000;
	}

	.tag {
		margin: 0 15upx;
		border: #FF0000 1upx solid;

	}

	.company-tag {
		font-size: 26upx;
		color: #7F7F7F;
		margin: 0 24upx;
	}

	.company-welfare {
		margin: 0 24upx 20upx 24upx;
	}

	.company-welfare text {
		font-size: 24upx;
		margin-right: 20upx;
		background-color: #FFE7BA;
		color: #FFA500;
		padding: 5upx 8upx;
	}
</style>
