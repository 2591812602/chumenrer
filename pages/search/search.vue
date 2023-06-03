<template>
	<view>
		<uni-search-bar placeholder="请输入帖子" v-model="datas" @confirm="search" ></uni-search-bar>
		<view v-for="(item,index) in news" :key="index" >
			<view class="title" style="padding-left: 20rpx;">帖子名称：{{item.title}}</view>
			<view class="content" style="padding-left: 20rpx;">帖子内容:{{item.content}}</view>
			<view class="image1" v-if="item.titlepic">
				<image :src="item.titlepic" style="padding-left: 20rpx;padding-top: 40rpx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas:"",
				news:[]
			}
		},
		methods: {
			search(e){
				uni.request({
					url:'http://127.0.0.1:3001/search',
					 method:'POST',
					 data:{
						 title:this.datas,
						 
					 },
					 success:res=>{
						 if(!res.data.length){
							 this.news='查无此帖子'
						 }else{
							 this.news=res.data
						 }
						 
						 
					 }
				})
			}
		}
	}
</script>

<style>

</style>
