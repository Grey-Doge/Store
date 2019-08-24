<template>
	<view class="main-container">
		<view class="essay-item">
			<image mode="widthFix" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=222247294,2919493301&fm=26&gp=0.jpg"></image>
			<view class="essay">
				<view class="title">
					<text>前置拍照横评 iPhone XS Max竟不是最好的,更好的的挖掘的拉动jaw</text>
				</view>
				<view class="publisher">
					<view class="shop">
						<view class="avatar">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="name">贝佳利多手机配件店</view>
					</view>
					<view class="publish-date">
						<text>2019.02.25</text>
					</view>
				</view>
			</view>
		</view>
		<view class="essay-item">
			<image mode="widthFix" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786741331,312930537&fm=26&gp=0.jpg"></image>
			<view class="essay">
				<view class="title">
					<text>前置拍照横评 iPhone XS Max竟不是最好的,更好的的挖掘的拉动jaw</text>
				</view>
				<view class="publisher">
					<view class="shop">
						<view class="avatar">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="name">贝佳利多手机配件店</view>
					</view>
					<view class="publish-date">
						<text>2019.02.25</text>
					</view>
				</view>
			</view>
		</view>
		<view class="essay-item">
			<image mode="widthFix" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"></image>
			<view class="essay">
				<view class="title">
					<text>前置拍照横评 iPhone XS Max竟不是最好的,更好的的挖掘的拉动jaw</text>
				</view>
				<view class="publisher">
					<view class="shop">
						<view class="avatar">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="name">贝佳利多手机配件店</view>
					</view>
					<view class="publish-date">
						<text>2019.02.25</text>
					</view>
				</view>
			</view>
		</view>
		<view class="essay-item">
			<image mode="widthFix" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2556253959,863349880&fm=15&gp=0.jpg"></image>
			<view class="essay">
				<view class="title">
					<text>前置拍照横评 iPhone XS Max竟不是最好的,更好的的挖掘的拉动jaw</text>
				</view>
				<view class="publisher">
					<view class="shop">
						<view class="avatar">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="name">贝佳利多手机配件店</view>
					</view>
					<view class="publish-date">
						<text>2019.02.25</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
	page{
		background-color: #F2F2F2;
	}
	.main-container{
		padding: 0;
		background-color: #F2F2F2;
		padding: 0 24upx;
		margin-top: 20upx;
	}
	.essay-item{
		margin-top: -5upx;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.essay-item image{
		width: 100%;
		max-height: 350upx;
		z-index:2 ;
		border-radius: 15upx;
	}
	.essay{
		
		background-color: #FFFFFF;
		height: 130upx;
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
		position: relative;
		bottom: 20upx;
		z-index:1 ;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 20upx;
		text-overflow: ellipsis;
		overflow:hidden;
		white-space:nowrap;
	}
	.title{
		text-overflow: ellipsis;
		overflow:hidden;
		white-space:nowrap;
		font-size: 32upx;
	}
	.publisher{
		margin-top:8upx ;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
	.shop{
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}
	.avatar image{
		height: 35upx;
		width: 45upx;
		border-radius: 8upx;
		border: #7F7F7F 1upx solid;
		margin-right:15upx ;
	}
	.publish-date{
		color: #7F7F7F;
	}
</style>