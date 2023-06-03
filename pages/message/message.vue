<template>
	<view>
		<view class="navbar">
			<image src="../../static/tabbar/3.1-消息.png" style="width: 45rpx;height: 45rpx; padding-left: 20rpx;" @click="tiaozhuan1"></image>
			<view class="font">消息</view>
			<view class="guanyu"><image src="../../static/tabbar/关于.png" style="width: 45rpx;height: 45rpx; padding-right: 20rpx;" ></image></view>
		</view>
		<view class="list" v-for="(item,index) in news" :key="index" @tap="tiaozhuan2(item.from_id)"  >
			<view class="touxiang">
				<image src="../../static/tabbar/1.webp" style="width: 120rpx; height: 120rpx;"></image>
			</view>
			<view class="name">
				1234567
			</view>
			<view class="message">
				{{item.data}}
			</view>
			<view class="time">{{item.create_time}}</view>
			<view style="height: 1px;background-color: #e3e3e1;"></view>
		</view>
	</view>
</template>

<script>
	import {friendlyDate} from'../../utils/util.js'
	export default {
		data() {
			return {
				news:[]
			}
		},
		methods: {
			requestlist(){
				uni.request({
					url:'http://127.0.01:3001/list',
					method:'GET',
					success:res=>{
						for (let index in res.data){
							res.data[index].create_time=friendlyDate(new Date(res.data[index].create_time*1000))
							
							this.news=res.data
						}
						
					}
				})
			},
			tiaozhuan1(){
				uni.navigateTo({
					url:'/pages/haoyouliebiao/haoyouliebiao'
				})
			},
			tiaozhuan2(id){
				uni.navigateTo({
					url:'/pages/liaotian/liaotian?id='+id
				})
			}
		},
		onLoad() {
			this.requestlist()
		}
	}
</script>

<style lang="less">
.navbar{
	position: relative;
	height: 90rpx;
	.font{
		position: absolute;
		left: 340rpx;
		top: 0;
	}
	.guanyu{
		position: absolute;
		top: 0;
		right: 30rpx;
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
	.message{
		position: absolute;
		top: 70rpx;
		left: 100rpx;
	}
	.time{
		position: absolute;
		right: 20rpx;
		top: 20rpx;
	}
}
</style>
