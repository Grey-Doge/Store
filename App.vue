<script>
	import helper from 'common/helper.js';
	export default {
		onLaunch: function(res) {
			console.log('App Launch')
			console.log('加载热搜');
			uni.request({
				url:helper.webroot + '/api/search/popular',
				success:function(res){
					helper.popular = res.data.data;
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			request:function(){
				console.log('NMML');
				 wx.request({
				    url: params.url,
				    method: params.method,
				    data: params.data,
				    header: params.header,
				    success: (res) => {
				        params.success(res);
				    },
				    fail: (err) => {
				        params.fail(err);
				    }
				})
			}
		}
		
	}
</script>

<style>
	/*每个页面公共css */
	/* page{
		font-family: "Source Han Sans CN","PingFang-SC-Medium";
	} */
	.main-container{
		display: flex;
		flex-direction: column;
		padding: 0 24upx;
	}
	.btn{
		color: #FFFFFF;
		border-radius: 15upx;
	}
	.icon-header,.intput-container,.btn-view{
		width: 699upx;
	}
	.intput-container{
		margin: 10upx 0;
		color: #2f2f2f;
	}
	.intput-container .label{
		margin: 0 0 0 35upx;
		width: 180upx;
	}
	.intput-container .input-item{
		
		font-size: 28upx;
		background-color: #f2f2f2;
		color: #2F2F2F;
		height: 90upx;
		border-radius: 15upx;
		margin: 35upx 0;
		padding: 10upx 0;
		display: flex;
		align-items: center;
	}
	.intput-container .introduct-label{
		margin: 10upx 35upx;
		width: 180upx;
		align-self: flex-start;
	}
	.intput-container .shop-introduct{
		display: flex;
		flex-direction: row;
		height: 250upx;
		margin: 35upx 0 10upx 0;
		align-items: center;
		justify-content: flex-start;
		font-size: 28upx;
		background-color: #f2f2f2;
		color: #2F2F2F;
		border-radius: 15upx;
		padding: 10upx 0;
		
	}
	.intput-container .shop-introduct .text{
		margin: 15upx 0;
		height: 200upx;
		align-self: flex-start;
		
	}
	.intput-container .tips{
		font-size: 28upx;
		color: #7f7f7f;
		margin: 0 10upx;
	}
	.icon-header{
		height: 120upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.progress{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 80upx;
		width: 100%;
	}
	.progress-tips{
		
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		
	}
	.progress-tips text{
		
		font-size: 20upx;
	}
	.icon-header .circle{
		font-size: 26upx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
		height: 50upx;
		width: 50upx;
		border-radius: 50%;
		color:#FFFFFF;
	}
	.circle_1{
		background-color: #FF0000;
	}
	.circle_2{
		background-color: #7F7F7F;
	}
	.circle_3{
		background-color: #7F7F7F;
	}
	.left-line,.middle-line_1,.middle-line_2,.right-line{
		display: inline-flex;
		height: 5upx;
		z-index: 1;
		background-color: #FF0000;
	}
	.left-line,.right-line{
		width: 15%;
	}
	.right-line{
		background-color: #7F7F7F;
	}
	.middle-line_1,.middle-line_2{
		width: 30%;
		background-color: #7F7F7F;
	}
	
	
	.btn-view{
		height: 100upx;
		background-color: #4baff5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 15upx;
	}
</style>
