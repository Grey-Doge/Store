<template>
	<view class="main-container">
		<view class="icon-header">
			<view class="progress">
				<view class="left-line">

				</view>
				<view class="circle circle_1">
					1
				</view>
				<view class="middle-line_1" style="background-color: #FF0000;">

				</view>
				<view class="circle_2 circle" style="background-color: #FF0000;">
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
					<text class="label">真实姓名</text>
					<input placeholder="请输入您的真实姓名" name="name"/>
				</view>
				<view class="input-item">
					<text class="label">身份证号</text>
					<input placeholder="请填写15或18位的身份证号码" style="width: 70%;" maxlength="18" name="number"/>
				</view>
				<view class="license-container">
					<view class="title">身份证正面</view>
					<view class="license">
						<view class="img">
							<image v-bind:src="uploadImg.id_front" mode="scaleToFill"></image>
						</view>
						<view class="tips">
							<text>需头像、文字清晰,边框完整,而且信息真实有效</text>
							<view class="upload-btn" data-id="1" @click="upload($event)">上传</view>
						</view>
					</view>
				</view>
				<view class="license-container">
					<view class="title">身份证反面</view>
					<view class="license">
						<view class="img">
							<image v-bind:src="uploadImg.id_back" mode="scaleToFill"></image>
						</view>
						<view class="tips">
							<text>需头像、文字清晰,边框完整,而且信息真实有效</text>
							<view class="upload-btn" data-id="2" @click="upload($event)">上传</view>
						</view>
					</view>
				</view>
				<view class="license-container">
					<view class="title">营业执照</view>
					<view class="license">
						<view class="img">
							<image v-bind:src="uploadImg.license" mode="scaleToFill"></image>
						</view>
						<view class="tips">
							<text>需头像、文字清晰,边框完整,而且信息真实有效</text>
							<view class="upload-btn" data-id="3" @click="upload($event)">上传</view>
						</view>
					</view>
				</view>
				<view class="tips">
					<text>实名资料只用作审核使用,工作人员将会保密。</text>
				</view>
				<button class="btn btn-view" form-type="submit">
					下一步
				</button>
			</view>
		</form>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				name:null,
				number:null,
				uploadImg:{
					id_front:null,
					id_back:null,
					license:null
				}
			}
		},
		methods: {
			upload: function(event) {
				let that = this;
				console.log(event);
				uni.chooseImage({
					count: 6,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						switch (event.currentTarget.dataset.id){
							case "1":
								that.uploadImg.id_front = res.tempFilePaths;
								break;
							case "2":
								that.uploadImg.id_back = res.tempFilePaths;
								break;
							case "3":
								that.uploadImg.license = res.tempFilePaths;
								break;
							default:
							console.log("未选择图片");
								break;
						}
					}
				});
			},
			validationData:function(obj){
				uni.showToast({
					icon:"none",
					title:obj
				})
			},
			submitForm:function(e){
				if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(e.detail.value.name))){
					this.validationData("姓名格式错误!");
					return;
				}else if(e.detail.value.name.indexOf(" ") != -1){
					this.validationData("姓名不能包含空格与其他非法字符");
					return;
				}
				if(!( /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e.detail.value.number))){
					this.validationData("身份证号码格式错误,请检查是否含有空格");
					return;
				}
				if(this.uploadImg.id_front === null || this.uploadImg.id_back === null || this.uploadImg.license === null){
					this.validationData("请上传所有证件照片!");
					return;
				}
				uni.navigateTo({
					url:'review/review'
				})
			}
		}
	}
</script>

<style>
	.license-container {
		display: flex;
		flex-direction: column;
		font-size: 32upx;
		background-color: #f2f2f2;
		color: #2F2F2F;
		border-radius: 15upx;
		margin: 35upx 0;
		padding: 10upx 0 10upx 35upx;
	}

	.title {}

	.license {
		display: flex;
		flex-direction: row;
	}

	.license .img {
		height: 200upx;
		width: 400upx;
		background-color: #FFFFFF;
		margin: 15upx 0 25upx 0;
	}
	.license .img image{
		height: 200upx;
		width: 400upx;
	}
	.license .tips {
		color: #7F7F7F;
		margin: 15upx 30upx;
		width: 360upx;
		height: 200upx;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.license .tips .upload-btn {
		display: flex;
		position: absolute;
		bottom: 0;
		width: 170upx;
		height: 65upx;
		background-color: #FF0000;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
	}
</style>