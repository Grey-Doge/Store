<template>
	<view class="main-container">
		<view class="switch-tab">
			<block v-for="(item,index) in tabList">
				<view v-if="index==tabList.length-1" class="btn job" v-bind:class="{btnSelected:index==current}" @click="switchTab(index)">
					{{item.name}}
				</view>
				<view v-else class="btn shop" v-bind:class="{btnSelected:index==current}" @click="switchTab(index)">
					{{item.name}}
				</view>
			</block>
			
		</view>
		
		<view class="shop-area" v-show="current==0">
			<view class="shop-item">
				<view class="shop-header">
					<view class="shop-avatar">
						<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
					</view>
					<view class="shop-info">
						<text class="shop-name">贝佳利多手机配件店</text>
						<view class="shop-tag">
							<text>显示屏</text>
							<text>显示屏</text>
							<text>显示屏</text>
						</view>
					</view>
				</view>
				
			</view>
			<view class="shop-item">
					<view class="shop-header">
						<view class="shop-avatar">
							<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
						</view>
						<view class="shop-info">
							<text class="shop-name">贝佳利多手机配件店</text>
							<view class="shop-tag">
								<text>显示屏</text>
								<text>显示屏</text>
								<text>显示屏</text>
							</view>
						</view>
					</view>
					
				</view>
			<view class="shop-item">
					<view class="shop-header">
						<view class="shop-avatar">
							<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
						</view>
						<view class="shop-info">
							<text class="shop-name">贝佳利多手机配件店</text>
							<view class="shop-tag">
								<text>显示屏</text>
								<text>显示屏</text>
								<text>显示屏</text>
							</view>
						</view>
					</view>
					
				</view>
			<view class="shop-item">
					<view class="shop-header">
						<view class="shop-avatar">
							<image mode="widthFix" src="https://img.alicdn.com/imgextra/i2/718371099/O1CN01RumTj61JzNl66xI2y_!!718371099.jpg"></image>
						</view>
						<view class="shop-info">
							<text class="shop-name">贝佳利多手机配件店</text>
							<view class="shop-tag">
								<text>显示屏</text>
								<text>显示屏</text>
								<text>显示屏</text>
							</view>
						</view>
					</view>
			</view>
		</view>
		
		<view class="job-area" v-show="current==1">
			<view class="recruitment-item">
				<view class="job-info">
					<view class="job-name">
						<text class="name">专业IOS修屏幕师傅</text>
						<text class="tag">急招</text>
					</view>
					<view class="salary">
						<text>7.5K-9.5K/月</text>
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
				<view class="company-name">
					<text>年年通过手机配件公司</text>
				</view>
			</view>
			<view class="recruitment-item">
				<view class="job-info">
					<view class="job-name">
						<text class="name">专业IOS修屏幕师傅</text>
						<text class="tag">急招</text>
					</view>
					<view class="salary">
						<text>7.5K-9.5K/月</text>
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
				<view class="company-name">
					<text>年年通过手机配件公司</text>
				</view>
			</view>
			<view class="recruitment-item">
				<view class="job-info">
					<view class="job-name">
						<text class="name">专业IOS修屏幕师傅</text>
						<text class="tag">急招</text>
					</view>
					<view class="salary">
						<text>7.5K-9.5K/月</text>
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
				<view class="company-name">
					<text>年年通过手机配件公司</text>
				</view>
			</view>
			<view class="recruitment-item">
				<view class="job-info">
					<view class="job-name">
						<text class="name">专业IOS修屏幕师傅</text>
						<text class="tag">急招</text>
					</view>
					<view class="salary">
						<text>7.5K-9.5K/月</text>
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
				<view class="company-name">
					<text>年年通过手机配件公司</text>
				</view>
			</view>
			<view class="recruitment-item">
				<view class="job-info">
					<view class="job-name">
						<text class="name">专业IOS修屏幕师傅</text>
						<text class="tag">急招</text>
					</view>
					<view class="salary">
						<text>7.5K-9.5K/月</text>
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
				<view class="company-name">
					<text>年年通过手机配件公司</text>
				</view>
			</view>
			<view class="recruitment-item">
				<view class="job-info">
					<view class="job-name">
						<text class="name">专业IOS修屏幕师傅</text>
						<text class="tag">急招</text>
					</view>
					<view class="salary">
						<text>7.5K-9.5K/月</text>
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
				<view class="company-name">
					<text>年年通过手机配件公司</text>
				</view>
			</view>

		</view>

		</view>
	
	
	</view>

</template>

<style>
	.main-container {
		padding: 0;
		background-color: #F2F2F2;
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
		width: 120upx;
		position: relative;
	}

	.shop {
		left: 0;
		z-index: 10;
		color: #4BAFF5;
		background-color: #FFFFFF;
	}

	.job {
		left: -20upx;
		z-index: 11;
		color: #4BAFF5;
		background-color: #FFFFFF;
	}

	.btnSelected{
		color: #FFFFFF;
		z-index: 20;
		background-color: #4BAFF5;
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
		margin: 5upx 0;
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
		margin: 0 24upx;
	}

	.company-welfare text {
		font-size: 24upx;
		margin-right: 20upx;
		background-color: #FFE7BA;
		color: #FFA500;
		padding: 5upx 8upx;
	}

	.company-name {
		font-size: 28upx;
		margin: 5upx 24upx 15upx 24upx;
	}

	.shop-item {
		background-color: #FFFFFF;
		margin-bottom: 5upx;
	}

	.shop-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 24upx;
		padding: 25upx 0;
	}

	.shop-avatar {
		height: 120upx;
		width: 200upx;
		margin-right: 40upx;
	}

	.shop-avatar image {
		height: 120upx;
		width: 200upx;
		border: #F2F2F2 solid 2upx;
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
</style>


<script>
	export default {
		data(){
			return{
				current:0,
				tabList:[
					{name:"商家"},
					{name:"职位"}
				]
			}
		},
		methods:{
			switchTab:function(index){
				this.current = index;
			},
			
		}
	}
</script>

