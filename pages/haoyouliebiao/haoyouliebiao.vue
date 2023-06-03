<template>
	<view>
		<uni-search-bar placeholder="搜索用户" @tap="tiaozhuan1"></uni-search-bar>
		<view class="tabs" >
			<view :class="active===index?'active':''" v-for="(item,index) in tabList" :key="index"
			@click="ontabtap(index)" >{{item.name}}</view>
		</view>
		<view class="list" v-for="(item,index) in news" :key="index"  >
			<view class="touxiang">
				<image src="../../static/tabbar/1.webp" style="width: 120rpx; height: 120rpx;"></image>
			</view>
			<view class="name">
				用户{{item.id}}
			</view>
			<view class="sex">
				<image src="../../static/tabbar/性别_男.png"></image>
				未知
			</view>
			<view class="gou">
				<image src="../../static/tabbar/对勾小.png"></image>
			</view>
		
			<view style="height: 1px;background-color: #e3e3e1;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[{
					name:'互关'
				},{
					name:'关注'
				},{
					name:'粉丝'
				}],
				active:0,
				news:[]
			}
		},
		methods: {
			ontabtap(index){
				this.active=index
				uni.request({
					url:'http://127.0.0.1:3001/haoyoulist',
					method:'POST',
					data:{
						type:this.active
					},
					success:res=>{
						this.news=res.data
					}
				})
				
			},
			tiaozhuan1(){
				uni.navigateTo({
					url:'/pages/searchhaoyou/searchhaoyou'
				})
			}
		},
		onLoad() {
			this.ontabtap()
		}
	}
</script>

<style lang="less">
.tabs{
	display: flex;
	flex-wrap: nowrap;
	height: 100rpx;
	
	view{
		padding-left: 50px;
		width: 100rpx;
		
		
	}
	.active{
		color: #fe5a7d;
		font-size: 15px;
	}
	
}
.list{
	height: 150rpx;
	position: relative;
	.name{
		position: absolute;
		top: 10rpx;
		left: 100rpx;
	}
	.sex{
		background-color: #fe5a7d;
		width: 100rpx;
		height: 30rpx;
		border-radius: 10rpx;
		position: absolute;
		top:60rpx;
		left: 100rpx;
		font-size: 2px;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-top: 10rpx;
		image{
			
			width: 30rpx;
			height: 30rpx;
			
		}
		
		
	}
	.gou{
		position: absolute;
		right: 20rpx;
		top:20rpx;
		image{
			width: 30rpx;
			height: 30rpx;
		}
	}
	
}
</style>
