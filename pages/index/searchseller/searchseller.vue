<template>
	<view class="main-container">
		<view class="header">
			
			<view class="location" @click="chooseCity();">
				<image src="../../../static/定位.png"></image>
				<text class="location-name">{{address.city}}</text>
				<image src="../../../static/icon-arrowdown.png" style="width: 50upx;height: 50upx;margin: 0;"></image>
			</view>
			
			<view class="intput-container">
				<image src="../../../static/icon-search.png"></image>
				<input placeholder="请输入你想去的卖场" />
			</view>
		</view>
		<view class="address">
			<view class="address-left">
				<text class="address-text">{{address.name}}</text>
				<text class="location-text">{{address.street}}</text>
				<text></text>
			</view>
			<view class="address-right" @click='chooseLocation()'>
				<image src="../../../static/locate.png"></image>
				<text class="re-locate">重新定位</text>
			</view>
		</view>
		<view class="history">
			<view class="history-header">
				<image src="../../../static/资源%203@2x.png"></image>
				<text>历史记录</text>
			</view>
			<view class="history-item">
				<text>华强北信息科技园</text>
				<text>华强北信息科技园</text>
				<text>华强北园</text>
				<text>北京中关村</text>
				<text>北京中关村理想国际大厦</text>
				<text>中国普天大厦</text>
				<text>e世界财富中心</text>
			</view>
		</view>
		<view class="nearby-seller">
			<view class="nearby-seller-header">
				<image src="../../../static/151店、商家、商城.png"></image>
				<text>附近卖场</text>
			</view>
			<view class="nearby-seller-item-container">
				<block v-for="item in nearbySellers" :key="item.id">
					<view class="nearby-seller-item">
						<view class="address-info">
							<text class="name">{{item.name}}</text>
							<view class="distance">{{item.distance/1000}}公里</view>
						</view>
						<view class="location-name">东莞市西栏区华侨南路西北桥488号</view>
					</view>				
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import helper from '../../../common/helper.js';
	import amap from '../../../common/amap-wx.js';
	import QQMapWX from '../../../common/qqmap-wx-jssdk.js';
	let qqMap;
	export default {
		data() {
			return {
				amapPlugin:null,
				amapKey:helper.amapKey,
				qqMapKey:helper.qqMapKey,
				nearbySellers:[],
				address:{
					city:'',
					name:'',
					street:''
				},
				sellerList:null
			}
		},
		onLoad:function(){
			
			let that = this;
			
			uni.request({
				url:helper.webroot +"api/seller/getallsellers",
				success:function(res){
					that.sellerList = res.data.data;
					console.log(res);
					//将精度纬度由字符串类型转换成浮点类型,方便之后调用API进行距离计算;
					helper.Convert(that.sellerList );
					/**
					 * 1.获取所有卖场的信息;
					 * 2.判断用户与卖场的距离,列举出距离小于1000公里的卖场;
					 * 
					 * */
					that.getNearBySellers();
					
				}
			})
			
			
			that.amapPlugin = new amap.AMapWX({
				key:that.amapKey
			});
			qqMap = new QQMapWX({
				key:that.qqMapKey
			})
			
			
			uni.showLoading({
				title:'获取位置信息中'
			});
			that.amapPlugin.getRegeo({
				success:function(res){
					uni.hideLoading();
					console.log('当前城市:'+helper.city)
					that.address.name = helper.city;
					that.address.street = res[0].name;
					that.address.city = res[0].regeocodeData.addressComponent.city.slice(0,res[0].regeocodeData.addressComponent.city.length-1);
				},
				fail:function(){
					uni.hideLoading();
					console.log('用户拒绝位置信息授权,调用接口失败');
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
		},
		onShow:function(){
			let that = this;
			this.amapPlugin.getRegeo({
				success:function(res){
					uni.hideLoading();
					console.log(res);
					console.log(that.address)
					that.address.name = res[0].regeocodeData.addressComponent.township;
					that.address.street = res[0].name;
					that.address.city = res[0].regeocodeData.addressComponent.city.slice(0,res[0].regeocodeData.addressComponent.city.length-1);
					
				},
			})
			
		},
		methods: {
			chooseLocation:function(){
				
				uni.showLoading({
					title:'获取位置信息中...'
				})
				let that = this;
				uni.showLoading({
					title:'获取位置信息中'
				});
				this.amapPlugin.getRegeo({
					success:function(res){
						uni.hideLoading();
						uni.showToast({
							title:'加载成功'
						})
						console.log(res);
						console.log(that.address)
						that.address.name = res[0].regeocodeData.addressComponent.township;
						that.address.street = res[0].name;
						that.address.city = res[0].regeocodeData.addressComponent.city.slice(0,res[0].regeocodeData.addressComponent.city.length-1);
						uni.hideLoading();
					},
					fail:function(){
						uni.hideLoading();
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
				
			},
			/**
			 * @author RustyLake
			 * @ignore created in 2019-07-30
			 * @version 1.0.0
			 * 
			 * 1.选择城市,首页根据用户选择的城市不同显示该用户最近的卖场信息;
			 * */
			chooseCity:function(){
				uni.navigateTo({
					url:'../../common/selectCity/selectCity'
				})
			},
			/**
			 * @author RustyLake
			 * @ignore created in 2019-07-30
			 * @version 1.0.0
			 * @method 获取用户附近卖场;
			 * 1.获取所有卖场的信息;
			 * 2.判断用户与卖场的距离,列举出距离小于1000公里的卖场;
			 * */
			 getNearBySellers:function(){
				 let that = this;
				 qqMap.calculateDistance({
				 	to:that.sellerList,
				 	success:function(data){
				 		let result =  data.result.elements.slice();
				 		
				 		console.log("result");
						console.log(result);
				 		for(let i = 0;i<result.length;i++){
				 			//若距离小于1000公里;
				 			if((result[i].distance/1000)<=1000){
				 				for(let j = 0;j<that.sellerList.length;j++){
				 					if(that.sellerList[j].latitude === result[i].to.lat && that.sellerList[j].longitude === result[i].to.lng){
				 						that.sellerList[j].distance = result[i].distance;
				 						that.nearbySellers.push(that.sellerList[j]);
				 						break;
				 					}
				 				}
				 			}
				 		}
				 		console.log('附近卖场:');
				 		console.log(that.nearbySellers);
				 	},
				 	fail:function(error){
				 		console.log(error);
				 	}
				 })
				 
			 }
		},
		
	}
</script>

<style>
	.main-container{
		padding: 0;
		background-color: #F2F2F2;
	}
	.header{
		background-color: #FFFFFF;
		padding: 25upx 24upx;
		margin-top: 5upx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		font-size: 30upx;
	}
	.header image{
		width: 45upx;
		height: 45upx;
		margin: 0 10upx;
	}
	.location{
		width: 45%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.intput-container{
		border-radius: 15upx;
		display: flex;
		padding:  20upx;
		align-items: center;
		flex-direction: row;
		height: 40upx;
		background-color: #F2F2F2;
	}
	.intput-container image{
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}
	.address{
		margin-top: 5upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 30upx 24upx;
		background-color: #FFFFFF;
	}
	.address-left{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	.address-text{
		font-size: 34upx;
		font-weight: bold;
		margin-right: 25upx;
		align-self: center;
	}
	.location-text{
		font-size: 30upx;
		color: #7F7F7F;
		align-self: flex-end;
	}
	.address-right{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.address-right image{
		width: 35upx;
		height: 35upx;
	}
	.re-locate{
		font-size: 30upx;
		color: #4BAFF5;
	}
	.history{
		margin-top: 5upx;
		background-color: #FFFFFF;
		padding: 24upx;
	}
	.history-header{
		display: flex;
		align-items: center;
		margin-bottom: 30upx;
		flex-direction: row;
		font-size: 32upx;
	}
	.history-header image{
		width: 32upx;
		height: 32upx;
		margin-right: 25upx;
	}
	.history-item{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.history-item text{
		color: #7F7F7F;
		background-color: #F2F2F2;
		border-radius: 15upx;
		font-size: 28upx;
		padding: 5upx 10upx;
		margin: 10upx;
	}
	.nearby-seller{
		background-color: #FFFFFF;
		
		margin-top: 5upx;
	}
	.nearby-seller-header{
		display: flex;
		align-items: center;
		flex-direction: row;
		font-size: 32upx;
		padding: 24upx;
		border-bottom: 5upx solid #F2F2F2;
	}
	.nearby-seller-header image{
		width: 35upx;
		height:35upx;
		margin-right: 25upx;
	}
	.nearby-seller-item{
		display: flex;
		flex-direction: column;
		padding: 10upx 24upx 20upx 24upx;
		border-bottom: #F2F2F2 5upx solid;
	}
	.address-info{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.name{
		font-size: 36upx;
		
	}
	.distance{
		font-size: 28upx;
		color: #FF0000;
	}
	.location-name{
		font-size:28upx;
		color: #7F7F7F;
	}
</style>
