<template>
	<view class="main-container">
		<view class="header">
			<view class="job-info">
				<text class="job-name">{{detail.jobname}}</text>
				<text class="salary">{{detail.jobmoney}}/月</text>
			</view>
			<view class="require-tag">
				<view class="require-tag-item" v-for="item in detail.require_tag">
					
					<text>{{item}}</text>
				</view>
			</view>
			<view class="job-tag">
				<text class="job-tag-item" v-for="item in detail.welfear_tag">{{item}}</text>
				<!-- <text class="job-tag-item">包吃住</text>
				<text class="job-tag-item">福利好</text>
				<text class="job-tag-item">年终奖</text> -->
			</view>
		</view>
		<view class="job-description">
			<view class="label">职位描述:</view>
			<view class="description">
				<rich-text :nodes="detail.content"></rich-text>
				
			</view>
		</view>
		<view class="company">
			<image :src="detail.shops_logo" mode="aspectFit"></image>
			<view class="company-info">
				<view class="name">{{detail.companyname}}</view>
				<view class="company-tag">
					
					<text v-for="item in detail.compan_tag">{{item}}</text>
					<!-- <text>民营</text>
					<text>10-30人</text>
					<text>电子配件</text> -->
				</view>
			</view>
		</view>
		<view class="company-item">
			<text class="label">联系方式:</text>
			<text class="phone" @click="phoneCall()">{{detail.tel}}</text>
		</view>
		<view class="company-item">
			<text class="label">公司地址:</text>
			<text class="address" @click="openMap()">{{detail.adress}}</text>
		</view>
		<view class="company-item">
			<text class="label" style="align-self: flex-start;">公司介绍:</text>
			<view class="description">
				{{detail.about}}
			</view>
		</view>
	</view>
</template>

<script>
	import QQMapWX from '../../../common/qqmap-wx-jssdk.js';
	import helper from '../../../common/helper.js';
	let qqMap;
	export default {
		data() {
			return {
				id:null,
				detail:null
			}
		},
		onLoad:function(option){
			this.id = option.id;
			this.refreshData();
			//要使用逆地址解析,需要实例化QQMapWX对象,以便使用其提供的API;
			qqMap = new QQMapWX({
				key: 'GAFBZ-F6KLP-755D5-V5C4P-75SH2-5SFMG'
			})
		},
		methods: {
			phoneCall:function(){
				helper.phoneCall(this.detail.tel);
			},
			openMap: function() {
				
				let that = this;
				
				qqMap.geocoder({
					address: that.detail.adress,
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
							name: that.detail.companyname,
							address: that.detail.adress
						})
					},
					fail: function() {
						console.log('无法定位到该地址，请确认地址信息！');
						uni.showToast({
							title:'无法定位到该地址，请确认地址信息！',
							icon:'none'
						})
					}
				})
			},
			refreshData:function(){
				let that = this;
				uni.showLoading({
					title:'加载中...'
				})
				uni.request({
					url:helper.webroot + "api/recruitment/detail",
					data:{
						id:that.id
					},
					success:function(res){
						console.log("res");
						console.log(res);
						that.detail = res.data.data;
						uni.hideLoading();
					}
				})
			}
		}
	}
</script>

<style>
	.main-container{
		background-color: #F2F2F2;
		padding: 0;
	}
	.header{
		margin-bottom: 5upx;
		padding: 30upx 24upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.job-info{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.job-name{
		font-weight: bold;
	}
	.salary{
		font-size: 32upx;
		color: #FF0000;
	}
	.require-tag{
		display: flex;
		flex-direction: row;
		
	}
	.require-tag-item{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 15upx 35upx  15upx 0;
		font-size:32upx;
		color: #7F7F7F;
	}
	.require-tag-item image{
		margin-right:8upx;
		height: 40upx;
		width: 40upx;
	}
	.job-tag{
		display: flex;
	}
	.job-tag-item{
		padding: 0 10upx;
		color:#FFA500 ;
		background: rgb(255,228,199);
		font-size: 28upx;
		margin-right:15upx;
	}
	.job-description{
		background-color: #FFFFFF;
		padding: 35upx 24upx;
		display: flex;
		flex-direction: row;
		margin-bottom: 5upx;
	}
	.description{
		color:#636363;
		width: 520upx;
		font-size:32upx;
	}
	.label{
		font-size: 34upx;
		font-weight: 450;
		margin-right: 40upx;
	}
	.company-item{
		padding:20upx 24upx;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		margin-bottom: 5upx;
	}
	.address,.phone{
		font-size:32upx;
		color: #4BAFF5;
	}
	.company-description{
		font-size: 32upx;
		
	}
	.company{
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		padding: 30upx 24upx;
		margin-bottom: 5upx;
		font-size:28upx;
	}
	.company image{
		width: 180upx;
		height: 125upx;
		border-radius: 15upx;
		margin-right: 20upx;
	}
	.company-info{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.name{
		font-size: 38upx;
		font-weight: 450;
	}
	.company-tag{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.company-tag text{
		background-color: #F2F2F2;
		color: #7F7F7F;
		padding: 5upx 20upx;
		margin-right:15upx ;
		border-radius: 15upx;
	}
</style>
