<template>
	<view class="main-container">
		<view class="title">
			<text class="label">标题</text>
			<input class="input-title" placeholder="请输入文章标题"/>
		</view>
		<view class="tag">
			<text class="label">标签</text>
			<view class="tag-container"  @click="tagMenu()">
				<text>请选择文章标签</text>
				<image src="../../static/icon-arrowdown.png"  v-bind:class="tagMenuOpen==true?'arrowdown':'arrowup'"></image>
			</view>
			<view class="tag-item-container" v-show="tagMenuOpen" v-bind:class="tagMenuOpen==true?'fadein':'fadeout'">
				<text class="text_1">手机电源</text>
				<text class="text_2">手机配件</text>
				<text class="text_3">手机内件</text>
				<text class="text_1">手机电源</text>
				<text class="text_2">手机配件</text>
				<text class="text_3">手机内件</text>
				<text class="text_1">手机电源</text>
				<text class="text_2">手机配件</text>
				<text class="text_3">手机内件</text>
				<text class="text_1">手机电源</text>
				<text class="text_2">手机配件</text>
				<text class="text_3">手机内件</text>
			</view>
		</view>
		<view class="content">
			<text class="label">内容</text>
			<textarea class="content-input" placeholder="请输入文字内容"></textarea>
		</view>
		<view class="img">
			<view class="img-container" v-for="(item,index) in imgList" v-bind:key="index">
				<view class="img-item">
					<image mode="aspectFill"  v-bind:src="item" v-bind:data-src = "item"  @click="previewPic(index)"></image>
					<!-- 删除图片底部遮罩层 -->
					<view class="delete-pic-mask" ></view>
					<view class="delete-icon" @click="deletePic(index)">
						<image mode="widthFix" src="../../static/icon_delete.png"></image>
					</view>
				</view>
			</view>
			
			
		</view>
		<block v-if="imgList.length<9">
			<image src="../../static/icon_selectPic.png" class="icon-selectePic" @click="selectPic"></image>
		</block>
		
		<view class="submitBtn">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagMenuOpen:false,
				imgList:[]
			}
		},
		methods: {
			tagMenu:function(){
				if(this.tagMenuOpen){
					this.tagMenuOpen = false;
				}else{
					this.tagMenuOpen = true;
				}
			},
			selectPic:function(){
				let that = this;
				let count = 9 - that.imgList.length;
				uni.chooseImage({
					count:count,
					sizeType:['original','compressed'],
					sourceType:['album','camera'],
					success:function(res){
						console.log(res);
						for (let item in res.tempFilePaths) {
							that.imgList.push(res.tempFilePaths[item]);
						}
					}
				})
			},
			//图片预览;
			previewPic:function(index){
				//index为当前选择照片的索引;
				let that = this;
				uni.previewImage({
					current:index,
					urls:that.imgList,
					success:function(res){
						console.log('图片预览成功');
						console.log(res);
					}
				})
			},
			deletePic:function(index){
				
				console.log('index:'+index);
				let that = this;
				//index为当前选择删除的照片索引;
				//弹出提示框;
				uni.showModal({
					title:'操作提示',
					content:'取消上传该图片?',
					success:function(res){
						//用户确认删除;
						if(res.confirm){
							//删除imgList当前索引为index的项;
							that.imgList.splice(index,1);
							
						}
					}
				})
			}
			
		}
	}
</script>

<style>

	.main-container{
		padding: 0;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 24upx;
	}
	.title,.tag,.content{
		display: flex;
		flex-direction: column;
		
		width: 100%;
	}
	.label{
		font-size: 40upx;
		font-weight: bold;
		margin-top: 30upx;
	}
	.input-title{
		font-size: 36upx;
		padding: 15upx 38upx;
		background-color: #F2F2F2;
		border-radius: 15upx;
		margin-top: 20upx;
		width: 90%;
	}
	
	.tag-container{
		background-color: #F2F2F2;
		border-radius: 15upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 20upx 10upx 38upx;
		color: #7F7F7F;
		margin-top: 20upx;
		
	}
	.tag-container image{
		width: 64upx;
		height: 64upx;
	}
	
	.content-input{
		background-color: #F2F2F2;
		padding: 15upx 38upx;
		width: 90%;
		border-radius: 15upx;
		margin-top: 20upx;
	}
	.img{
		margin-top: 30upx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		
	}
	.img-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.img-container image{
		height: 200upx;
		width: 200upx;
		margin: 15upx;
	}
	.icon-selectePic{
		width: 128upx;
		height: 128upx;
		margin: 10upx 15upx;
	}
	.tag-item-container{
		background-color: #F2F2F2;
		margin-top: 20upx;
		border-radius: 15upx;
		font-size: 32upx;
		padding: 35upx 10upx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		top: 0;
		z-index: 10;
	}
	.tag-item-container text{
		padding: 5upx;
		border-radius: 10upx;
		color: #FFFFFF;
		margin: 10upx;
	}
	.text_1{
		background-color: rgb(250,146,95);
	}
	.text_2{
		background-color: rgb(95,193,250);
	}
	.text_3{
		background-color: rgb(250,95,153);
	}
	.submitBtn{
		margin-top: 35upx;
		background-color: rgb(232,149,61);
		color: #FFFFFF;
		align-self: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 15upx;
		width: 65%;
		padding: 20upx 0;
	}
	
	.arrowdown{
		animation: arrowdown 0.5s ease forwards;
	}
	.arrowup{
		animation: arrowup 0.5s ease forwards;
	}
	.fadein{
		animation: fadein 1s linear forwards;
	}
	.fadeout{
		animation: fadeout 1s linear forwards;
	}
	
	.img-item{
		position: relative;
	}
	.delete-pic-mask{
		position: absolute;
		bottom:25upx;
		left: 15upx;
		background-color: #FFFFFF;
		height: 60upx;
		width: 200upx;
		opacity: 0.75;
	}
	
	.delete-icon{
		position: absolute;
		bottom: 25upx;
		left: 15upx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200upx;
		height: 60upx;
	}
	.delete-icon image{
		width: 36upx;
		height: 36upx;
		margin: 0;
	}
	
	@keyframes arrowdown{
		from{
			transform: rotate(180deg);
		}
		to{
			transform: rotate(0deg);
		}
	}
	@keyframes arrowup{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(180deg);
		}
	}
	@keyframes fadein{
		from{
			opacity: 0;
			
		}
		to{
			opacity: 1;
		}
	}
	@keyframes fadeout{
		from{
			opacity: 1;
		}
		to{
			opacity: 0;
		}
	}

</style>
