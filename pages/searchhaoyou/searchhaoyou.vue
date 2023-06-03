<template>
	<view>
		<uni-search-bar placeholder="搜索用户" v-model="datas" @confirm="sousuo"></uni-search-bar>
	    <view class="list" v-for="(item,index) in news" :key="index"  >
	    	<view class="touxiang" >
	    		<image :src="item.avatarurl" style="width: 100rpx; height: 100rpx;padding-left: 20rpx;"></image>
	    	</view>
	    	<view class="name">
	    		{{item.nickname}}
	    	</view>
			<view class="type">
				渠道：{{item.type}}
			</view>
	    
	    	<view style="height: 1px;background-color: #e3e3e1;"></view>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas:"",
				news:[]
			};
		},
		methods:{
			sousuo(){
				uni.request({
					url:'http://127.0.0.1:3001/sousuohaoyou',
					method:'POST',
					data:{
						name:this.datas
					},
					success:res=>{
						this.news=res.data
					}
				})
			}
		}
	}
</script>

<style lang="less">
.list{
	height: 150rpx;
	position: relative;
	.name{
		position: absolute;
		top: 10rpx;
		left: 130rpx;
	}
	.type{
		position: absolute;
		top: 60rpx;
		left: 130rpx;
	}
	
	
}
</style>
