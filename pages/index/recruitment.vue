<template>
	
	<view class="main-container">
		<view id="picker" class="picker-container">
			<view class="picker-item-container">
				<view v-for="(item,index) in list" v-bind:key="index" @click="openMenu($event,index)">
					<view class="picker-item" v-bind:class="{selected:item.currentIndex!=-1}">
						<text>{{item.name}}</text>
						<image src="../../static/icon-arrowdown.png"></image>
					</view>
				</view>



			</view>

			<scroll-view v-show="menuStatus" scroll-y="true" class="selectOption">
				<view class="option-area">
					<scroll-view class="condition">
						<view v-for="(item,index) in list[fir_currentIndex].content" v-bind:key="index" @click="selecte(index)" class="fir" v-bind:class="{selected:index==list[fir_currentIndex].currentIndex}">
							{{item.name}}
						</view>
					</scroll-view>
					<scroll-view v-show="list[fir_currentIndex].currentIndex != -1 && fir_currentIndex == 0 ">
						<block v-for="(item,index) in list[fir_currentIndex].content" v-bind:key="index">
							<block v-if="index == list[fir_currentIndex].currentIndex" >
								<view v-for="(sub_item,index) in item.content" @click="selectSec(index)" data-id='index' class="sec"
								 v-bind:class="{selected:index==sec_currentIndex}" v-bind:key="index">
									{{sub_item.name}}
								</view>
							</block>
						</block>
					</scroll-view>
					<scroll-view v-show="sec_currentIndex != null">
						<block v-for="(item,index) in list[fir_currentIndex].content" v-bind:key="index">
							<block v-if="index == list[fir_currentIndex].currentIndex">
								<block v-for="(sub_item,index) in item.content" v-bind:key="index">
									<block v-if="index == sec_currentIndex">
										<view v-for="(thr_item,index) in sub_item.content" class="thr" v-bind:key="index" @click="selectThr(index)" v-bind:class="{selected:index==thr_currentIndex}">
											{{thr_item.name}}
										</view>
									</block>

									<!-- //遍历第1个向的所有东西,即thr_index == sec_index
										<block  v-for="(thr_item,index) in sub_item.content">
											<view v-if="index == thr_currentIndex">
											{{thr_item.name}}索引=>{{index}}
											thr_currentIndex=>{{thr_currentIndex}}
											</view>
										</block>
									 -->
								</block>
							</block>
							<!-- <block v-for="(item,index) in list[fir_currentIndex].content[list[fir_currentIndex].currentIndex].content">
								<view class="thr">{{item.name}}</view>
							</block> -->
						</block>

					</scroll-view>
				</view>
				<view class="bottom-btn">
					<view class="reset-btn" @click="reset()">
						重置
					</view>
					<view class="sumbit-btn" @click="getResult()">
						确定
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="recruitment-container" style="height: 100%;width: 100%;">
		
		<navigator open-type="navigate" :url="['../shop/essaydetail?id='+item.id]" v-for="item in essayList">
				<view class="recruitment-item">
					<view class="title-info">
						<view class="title-name">
							<text class="name">{{item.title}}</text>
						</view>
						<view class="publishdate">
							<text>{{item.ctime}}</text>
						</view>
					</view>
					<view class="essay-tag">
						<text class="text_1">手机电源</text>
						<text class="text_2">手机配件</text>
						<text class="text_3">手机内件</text>
					</view>
					<view class="essay-content">
						<view class="content">
							<block v-if="item.content != null && item.content != '' && item.content.length > 0">
							{{item.content}}
							</block>
							
						</view>
				
					</view>
					<view class="publisher-info">
						<image class="avatar" :src="item.shops_logo"></image>
						<text>{{item.shops_name}}</text>
					</view>
				</view>
		</navigator>
		<view class="bottom"  >
			{{loadMoreText}}
		</view>
		</view>
		
		<!-- 遮罩层 -->
		<view id="layer" class="mask-layer" v-show="menuStatus" @click="closeMenu()"></view>
	</view>
		

</template>

<script>
	import	helper from '../../common/helper.js';
	export default {
		data() {
			return {
				currenttab: null, //当前选项卡索引;0:地区,1:薪资,2:时间,3:其他;
				menuStatus: false, //菜单栏状态;
				fir_currentIndex: 0,
				sec_currentIndex: null,
				thr_currentIndex: null,
				currentPage: 1,
				list: [{
					name: "地区",
					currentIndex: -1,
					content: [{
							name: "区域",
							content: [{
									name: "天河区",
									content: [{
										name: "天河客运站"
									}, {
										name: "五山"
									}, {
										name: "华师"
									}, {
										name: "林和西"
									}]
								},
								{
									name: "越秀区",
									content: [{
										name: "全部"
									}, {
										name: "百灵路"
									}, {
										name: "北京路"
									}, {
										name: "大德路"
									}, {
										name: "大沙头"
									}, {
										name: "德政路"
									}, {
										name: "东川"
									}, {
										name: "大学城"
									}]
								},
								{
									name: "白云区",
									content: [{
										name: "嘉禾望岗"
									}, {
										name: "机场北"
									}, {
										name: "永泰"
									}, {
										name: "泰和"
									}]
								},
								{
									name: "黄浦区",
									content: [{
										name: "全部"
									}, {
										name: "大沙地"
									}, {
										name: "黄浦区政府"
									}, {
										name: "黄浦新村"
									}, {
										name: "开发区东"
									}, {
										name: "开发区西"
									}, {
										name: "庙头"
									}, {
										name: "南岗"
									}, {
										name: "白江"
									}, {
										name: "沙村"
									}]
								},
								{
									name: "从化区",
									content: [{
										name: "不知道什么区"
									}]
								},
								{
									name: "番禺区",
									content: [{
										name: "全部"
									}, {
										name: "大学城"
									}, {
										name: "富豪山庄"
									}, {
										name: "华南"
									}, {
										name: "华南碧桂园"
									}, {
										name: "金山谷"
									}, {
										name: "洛溪"
									}, {
										name: "南村镇"
									}, {
										name: "南浦"
									}, {
										name: "祈福"
									}, {
										name: "番禺广场"
									}, {
										name: "市桥"
									}, {
										name: "大石"
									}]
								}
							]
						},
						{
							name: "地铁",
							content: [{
									name: "潮南區"
								},
								{
									name: "朝阳区"
								},
								{
									name: "金平区"
								},
								{
									name: "澄海区"
								},
								{
									name: "龙湖区"
								},
								{
									name: "I have a feeling~"
								}
							]
						}
					]
				}, {
					name: "时间",
					currentIndex: -1,
					content: [{
						name: "最新发布"
					}, {
						name: "人气最高"
					}]
				}, {
					name: "其他",
					currentIndex: -1,
					content: []
				}],
				essayList:null,
				previewText:"",
				loadMoreText:"加载更多"
			}
		},
		methods: {
			openMenu: function(event, index) {
				this.currenttab = index;
				console.log('tab:' + this.currenttab);
				this.menuStatus = true;
				this.fir_currentIndex = index;
				if (this.currenttab != 0) {
					this.sec_currentIndex = null;
				}
			},
			closeMenu: function() {
				this.menuStatus = false;
				this.fir_currentIndex = 0;
			},
			selecte: function(index) {
				this.list[this.fir_currentIndex].currentIndex = index;
				this.sec_currentIndex = null;
				//设置选项卡索引;
				// this.currenttab = 0;
			},
			getResult: function() {
				switch (this.currenttab) {
					case 0:
						console.log('name:' + this.list[this.fir_currentIndex].content[this.list[this.fir_currentIndex].currentIndex].content[
							this.sec_currentIndex].content[this.thr_currentIndex].name);
						break;
					default:
					case 1:
						console.log('钱');
						break;
					case 2:
						console.log("时间");
						break;
						console.log('NMSL');
						break;
				}

			},
			reset: function() {
				this.list[this.fir_currentIndex].currentIndex = -1;
				this.sec_currentIndex = null;
			},
			selectSec: function(index) {
				this.sec_currentIndex = index;
				this.thr_currentIndex = null;
				console.log('seccurrentindex:' + this.sec_currentIndex);
				console.log('thrcurrentindex:' + this.thr_currentIndex);
			},
			selectThr: function(index) {
				this.thr_currentIndex = index;
			},
			loadMore:function(){
				let that = this;
				uni.request({
					url:helper.webroot+'api/square/index',
					method:'GET',
					data:{
						page:that.currentPage
					},
					success:function(res){
						
						console.log(res.data.status);
						if(res.data.status === 0){
							that.currentPage = that.currentPage + 1;
							
							for(let i in res.data.data){
								
								res.data.data[i].content = that.getHtmlText(res.data.data[i].content);
								that.essayList.push(res.data.data[i]);
							}
							console.log('essay:');
							console.log(that.essayList);
						}else{
							that.loadMoreText = "已无更多文章";
						}
						
					}
				})
			},
			refreshData:function(){
				let that = this;
				uni.request({
					url:helper.webroot+'api/square/index',
					method:'GET',
					success:function(res){
						console.log(res.data);
						that.essayList = res.data.data;
						for(let i in that.essayList){
							//提取html结构中的文字;
							that.essayList[i].content = that.getHtmlText(that.essayList[i].content);
							
						}
					}
				})
			},
			getHtmlText:function(obj){
				var text = obj.replace(/<[^<>]+>/g,"");
				return text;
			}

		},
		onLoad:function(){
			this.refreshData();
		},
		onPullDownRefresh:function(){
			uni.showLoading({
				title:"加载中..."
			})
			this.refreshData();
			uni.hideLoading();
			uni.stopPullDownRefresh();
		},
		onReachBottom:function(){
			this.loadMore();
		}

	}
</script>

<style>
	.main-container {
		padding: 0;
		background-color: #F2F2F2;
		display: flex;
		flex-direction: column;

	}

	.recruitment-container {
		position: relative;
		top: 100upx;
	}

	.essay-content {

		margin: 10upx 0;
		padding: 15upx 24upx;

	}

	.content {
		border-radius: 15upx;
		padding: 10upx 24upx;
		background-color: #F2F2F2;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.picker-container {

		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		z-index: 5;
		position: fixed;
		width: 100%;
	}

	.picker-item-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100upx;
	}
	.picker-item-container view{
		width:50%;
	}

	.picker-item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 24upx;
	}

	.picker-item text {
		font-size: 32upx;

	}

	.picker-item image {
		width: 40upx;
		height: 45upx;
	}

	.recruitment-item {
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		margin: 15upx 0;
	}

	.title-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 15upx 24upx 10upx 24upx;
	}

	.title-name {}

	.name {
		font-weight: 450;
		font-size: 38upx;
	}

	.publishdate {
		font-size: 32upx;
	}

	.essay-tag {
		font-size: 26upx;
		color: #7F7F7F;
		margin: 0 24upx;
	}

	.essay-tag text {
		margin-right: 15upx;
		border-radius: 10upx;
		color: #FFFFFF;
		padding: 0 5upx;
	}

	.text_1 {
		background-color: rgb(250, 146, 95);
	}

	.text_2 {
		background-color: rgb(95, 193, 250);
	}

	.text_3 {
		background-color: rgb(250, 95, 153);
	}


	.publisher-info {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 28upx;
		margin: 5upx 24upx 15upx 24upx;
	}

	.mask-layer {
		opacity: 0.5;
		background-color: #000000;
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 2;
	}

	.condition {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.fir,
	.sec,
	.thr {
		border-bottom: 5upx solid #F2F2F2;
		padding: 20upx 24upx;
		font-size: 30upx;
		display: flex;
	}

	.sec {
		background-color: #FCFCFC;
		align-items: center;
		justify-content: center;
	}

	.thr {
		background-color: #F7F7F7;
		align-items: center;
		justify-content: center;

	}



	.selectOption {

		width: 100%;
		background-color: #F2F2F2;
		display: flex;
		flex-direction: column;
		max-height: 500upx;

	}

	.option-item {

		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 5upx 0;
		height: 80upx;
		background-color: #FFFFFF;
	}

	.option-area {
		display: flex;
		background-color: #FFFFFF;
		flex-direction: row;

	}

	.bottom-btn {
		padding: 15upx 24upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.reset-btn {
		margin: 0 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		border: #636363 1upx solid;
		border-radius: 30upx;
		width: 30%;
		font-size: 28upx;
		padding: 10upx 0;
	}

	.sumbit-btn {
		margin: 0 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFA500;
		border: #FFD700 1upx solid;
		border-radius: 30upx;
		width: 40%;
		font-size: 28upx;
		padding: 10upx 0;
		color: #FFFFFF;
	}

	.avatar {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		margin-right: 15upx;
	}

	.selected {
		color: #FFD700;
	}
	
	.moveitem{
		height: 100upx;
		width: 100upx;
		background-color: #4BAFF5;
		z-index: 10;
		border-radius:50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 24upx;
		bottom: 50upx;
	}
	.moveitem image{
		width: 64upx;
		height: 64upx;
	}
	.bottom {
		background-color: rgb(242, 242, 242);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100rpx;
		color: #757575;
		font-size: 30rpx;
		z-index: 1000;
	}
</style>
