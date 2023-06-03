<template>
	<view class="page">
		<view class="back" style="position: relative;height:100rpx;">
			<image src="../../static/tabbar/返回.png" style="width: 20rpx;height: 40rpx;padding-left: 40rpx;padding-top: 20rpx;" @tap="tiaozhuan1"></image>
			<view style="text-align: center;position: absolute;top: 15rpx;left: 400rpx;">聊天页</view>
			<view class="yonghu" style="position:absolute;top: 15rpx;right: 20rpx;"><image src="../../static/tabbar/用户.png" style="width: 45rpx;height: 50rpx;"></image> </view>
		</view>
		<view v-for="(item,index) in news" :key="index">
				<view  class="item1"  v-if="index%2===0">
					<view class="touxiang"><image src="../../static/tabbar/1.webp" style="width: 150rpx;height: 150rpx;"></image></view>
					<view class="liaotiankuang">
						{{item.data}}
					</view>
				</view>
				<view class="item2" v-else>
					<view class="touxiang2"><image src="../../static/tabbar/1.webp" style="width: 150rpx;height: 150rpx;"></image></view>
					<view class="liaotiankuang">
						{{item.data}}
					</view>
				</view>
		</view>
		<input />
		
		
	</view>
</template>

<script>
	import {friendlyDate} from '../../utils/util.js'
	export default {
		data() {
			return {
				news:[],
				from_id:1,
				datas:""
				
			};
		},
		methods:{
			requestlist(){
				uni.request({
					url:'http://127.0.0.1:3001/liaotian',
					method:'POST',
					data:{
						id:this.from_id,
					},
					success:res=>{
						this.news=res.data
					}
				})
			},
			tiaozhuan1(){
				uni.navigateBack(-1)
			},
			fasong(){
				console.log(this.datas)
			}
		},
		onLoad(options) {
			this.from_id=options.id
			this.requestlist()
			
			
		}
	}
</script>

<style lang="less">
.page{
	
	.item1{
		position: relative;
		height: 270rpx;
		.liaotiankuang{
			background-color:#f4f4f4;
			
			height: 50rpx;
			border-radius: 10rpx;
			position: absolute;
			top: 40rpx;
			left: 150rpx;
		}
	}
	.item2{
		position: relative;
		.touxiang2{
			position: absolute;
			right: 20rpx;
			top: 100rpx;
		}
		.liaotiankuang{
			background-color:#f4f4f4;
			
			height: 50rpx;
			border-radius: 10rpx;
			position: absolute;
			top: 150rpx;
			right: 170rpx;
		}
	}
	
}

</style>
