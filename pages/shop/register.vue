<template>
	<view class="main-container">
		<view class="icon-header">
			<view class="progress">
				<view class="left-line">
					
				</view>
				<view class="circle circle_1">
					1
				</view>
				<view class="middle-line_1">
					
				</view>
				<view class="circle_2 circle">
					2
				</view>
				<view class="middle-line_2">
					
				</view>
				<view class="circle circle_3">
					3
				</view>
				<view class="right-line">
					
				</view>
			</view>
			<view class="progress-tips">
				<text>
					店铺信息填写
				</text>
				<text>
					实名信息填写
				</text>
				<text>
					店铺申请审核
				</text>
			</view>
		</view>
		<form @submit="submitForm">
			<view class="intput-container">
				<view class="input-item">
					<text class="label">商品名称</text>
					<input placeholder="请输入你的商铺名称" name="shopname"/>
				</view>
				<view class="input-item">
					<text class="label">联系人</text>
					<input placeholder="请输入店铺联系人的名称" name="contacter"/>
				</view>
				<view class="input-item">
					<text class="label">手机号码</text>
					<input placeholder="请输入您的手机号码" name="phonenumber"/>
				</view>
				<view class="input-item">
					<text class="label">主营项目</text>
					<input placeholder="比如电池,手机主板等" name="sellitems"/>
				</view>
				<view class="shop-introduct">
					<text class="introduct-label">简单介绍</text>
					<textarea placeholder="请简单介绍你的店铺情况" class="text" :value="introduction" @input="teatareaInput" maxlength="250"></textarea>
				</view>
				<view class="tips">
					<text>请仔细填写联系方式,方便工作人员联系上你</text>
				</view>
			</view>
			<button class="btn btn-view" form-type="submit">
				下一步
			</button>
		</form>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				introduction:''
			}
		},
		methods:{
			toLicense:function(){
				uni.navigateTo({
					url:'license'
				})
			},
			teatareaInput:function(e){
				this.introduction = e.detail.value;
			},
			validationData:function(obj){
				uni.showToast({
					icon:"none",
					title:obj
				})
			},
			submitForm:function(e){
				
				if(e.detail.value.shopname === "" ||e.detail.value.shopname.length <= 0){
					this.validationData("商铺名称不能为空!");
					return;
				}else if(e.detail.value.shopname.indexOf(" ") != -1){
					this.validationData("商铺名称不能包含空格与其他非法字符");
					return;
				}
				
				if(e.detail.value.contacter === "" ||e.detail.value.contacter.length <= 0){
					this.validationData("店铺联系人不能为空!");
					return;
				}else if(e.detail.value.contacter.indexOf(" ") != -1){
					this.validationData("店铺联系人不能包含空格与其他非法字符");
					return;
				}
				if(!(/^1[3456789]\d{9}$/.test(e.detail.value.phonenumber))){
					this.validationData("电话号码格式错误,请检查是否含有空格");
					return;
				}
				if(e.detail.value.sellitems === "" ||e.detail.value.sellitems.length <= 0){
					this.validationData("主营项目不能为空!");
					return;
				}
				if(this.introduction.length<=0){
					this.validationData("商铺介绍不能为空!");
					return;
				}
				
				uni.navigateTo({
					url:'license'
				})
				
			}
		}
	}
	
</script>

<style>
	
	
</style>
