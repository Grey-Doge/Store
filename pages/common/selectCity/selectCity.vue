<template>
	<view class="main-container">
		<view class="header">
			<view class="header-text">
				当前定位城市:
			</view>
			<view class="current-city">
				{{currentCity}}
			</view>
		</view>
		
		<view class="city-container">
			<block v-for="item in cityList">
				<view class="city-item">
					<view class="city-letter">{{item.pinyin}}</view>
					<view v-for="subitem in item.content" class="city" v-bind:class="{selected:subitem == selectedProvince}" :data-province="subitem" @click="switchProvince($event)">
						{{subitem}}
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import helper from '../../../common/helper.js';
	import QQMapWX from '../../../common/qqmap-wx-jssdk.js';
	import amap from '../../../common/amap-wx.js';
	export default {
		data() {
			return {
				currentCity: '定位中...',
				cityList:[],
				selectedProvince:''
			}
		},
		methods: {
			// 数组去重;
			arrUnique: function(arr) {
				var hash = [];
				for (var i = 0; i < arr.length; i++) {
					if (arr.indexOf(arr[i]) == i) {
						hash.push({pinyin:arr[i],content:[]});
					}
				}
				return hash;
			},
			//冒泡排序;
			bubbleSort:function(arr){
				for (let i = 0; i < arr.length-1; i++) {
					for (let j = 0; j < arr.length-i-1; j++) {
						if(arr[j].pinyin.charCodeAt()>arr[j+1].pinyin.charCodeAt()){
							let temp = arr[j];
							arr[j] = arr[j+1];
							arr[j+1] = temp;
						}
					}
				}
				return arr;
			},
			//切换省份;
			switchProvince:function(event){
				console.log(event);
				helper.city = event.currentTarget.dataset.province;
				uni.switchTab({
					url:'../../index/index'
				})
				helper.isCityChange = true;
			}
		},
		onLoad: function() {
			this.selectedProvince = helper.city;
			let that = this;
			//实例化高德地图服务对象;
			let amapPlugin = new amap.AMapWX({
				key:'870a49b7b09c53a9c2b046056c39579e'
			})
			//调用API服务获取当前省份;
			amapPlugin.getRegeo({
				success:function(res){
					// console.log(res);
					that.currentCity = res[0].regeocodeData.addressComponent.province.slice(0,res[0].regeocodeData.addressComponent.city.length-1)
				}
			})
			//调用缓存获取省份列表;
			uni.getStorage({
				key:'cityList',
				success:function(res){
					console.log('调用缓存成功');
					that.cityList = res.data;
				},
				fail:function(res){
					console.log('调用缓存失败,'+res.errMsg);
					console.log('调用API接口...');
					let map = new QQMapWX({
						key: 'GAFBZ-F6KLP-755D5-V5C4P-75SH2-5SFMG'
					});
					//调用获取城市接口;
					map.getCityList({
						success: function(res) {
							console.log(res);
							let arr = [];
							for (let item in res.result[0]) {
								//获取所有城市的首字母;
								arr.push(res.result[0][item].pinyin[0].substr(0, 1));
							}
							
							//按字母顺序排序;
							arr = that.arrUnique(arr).sort();
							//按照字母分类城市;
							for (let i = 0; i < res.result[0].length; i++) {
								for (let j = 0; j < arr.length; j++) {
									if(arr[j].pinyin.indexOf(res.result[0][i].pinyin[0].substr(0, 1)) != -1){
										arr[j].content.push(res.result[0][i].name);
									}
								}
							}
							//冒泡排序;
							that.bubbleSort(arr);
							that.cityList = arr;
							//将排好序的城市列表存入缓存,方便下次直接取用,不需要从接口获取;
							uni.setStorage({
								key:'cityList',
								data:that.cityList,
								success:function(){
									console.log("存入城市列表成功");
								}
							})
						}
					});
				}
			})
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

	.header-text,
	.current-city {
		margin-bottom: 15upx;
	}

	.header {
		padding: 25upx 24upx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 26upx;
	}

	.current-city {
		background-color: #FFFFFF;

		padding: 5upx 40upx;
	}

	.city-container {
		display: flex;

		flex-direction: column;
		
	}

	.city-letter {
		padding: 10upx 24upx;
		font-size: 30upx;
	}

	.city {
		background-color: #FFFFFF;
		padding: 28upx 24upx;
		border-bottom: 1upx solid #F2F2F2;
		border-top: 1upx solid #F2F2F2;
		font-size: 32upx;
	}
	.selected {
		color: #FFD700;
	}
</style>
