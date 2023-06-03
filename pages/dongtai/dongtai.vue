<template>
	<view>
		<view class="tabs" >
			<view :class="active===index?'active':''" v-for="(item,index) in tabList" :key="index"
			@click="ontabtap(index)" >{{item.name}}</view>
		</view>
		<view class="list" v-for="(item,index) in news" :key="index" >
			<image :src="item.titlepic" style="width: 150rpx;height: 150rpx;padding-left: 20rpx;" ></image>
			<view class="name">##{{item.title}}</view>
			<view class="topic">话题描述</view>
			<view class="topic1">{{item.desc}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[{
				 	name:'关注'
				 },{
					name:'推荐' 
				 },{
					name:'体育' 
				 },{
					name:'热点' 
				 },{
					name:'财经' }
				],
				active:0,
				news:[]
			}
		},
		methods: {
			ontabtap(index){
				this.active=index
				this.requestcontent()
			},
			requestcontent(){
				uni.request({
					url:'http://127.0.0.1:3001/dongtai',
					method:'POST',
					data:{
						type:this.active+1
					},
					success:res=>{
						this.news=res.data
					}
				})
			}
		},
		onLoad() {
			this.requestcontent()
		}
	}
</script>

<style lang="less">
	.tabs{
		display: flex;
		flex-wrap: nowrap;
		height: 100rpx;
		
		view{
			padding-left: 35px;
			font-size: 12px;
			text-align: center;
			
		}
		.active{
			color: #fe5a7d;
			font-size: 23px;
		}
		
	}
	.list{
		height: 200rpx;
		position: relative;
		.name{
			position: absolute;
			top: 0;
			left: 200rpx;
		}
		.topic{
			color: #aeaba6;
			position: absolute;
			top: 50rpx;
			left: 200rpx;
		}
		.topic1{
			color: #aeaba6;
			position: absolute;
			top: 100rpx;
			left: 200rpx;
		}
	}

</style>
