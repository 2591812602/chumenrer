<template>
	<view>
		
		<view class="page2" v-for="(item,index) in news" :key="index">
			<view class="touxiang"><image src="../../static/tabbar/1.webp"></image></view>
			<view class="name">用户{{item.id}}</view>
			<view class="time">{{item.create_time}}</view>
			<view class="guanzhu"><button class="guanzhu">关注</button></view>
			<view class="tupian" style="padding-left: 20rpx;">
				<image :src="item.titlepic" style="width: 750rpx;height: 700rpx;"></image>
			</view>
			<view class="dianzang">
				<image src="../../static/tabbar/点赞.png" style="width: 40rpx; height: 50rpx; padding-left: 70rpx;"></image>
			</view>
			<view class="dianzang1" @tap="dianzang(item.id,item.sharenum)" >
				{{item.sharenum}}
			</view>
			<view class="cai">
				<image src="../../static/tabbar/踩_o.png" style="width: 50rpx; height: 50rpx; padding-left: 70rpx;"></image>
			</view>
			<view class="cai1">
				踩
			</view>
			<view class="pinglun">
				<image src="../../static/tabbar/评论小.png" style="width: 50rpx; height: 50rpx; padding-left: 70rpx;"></image>
			</view>
			<view class="pinglun1">
				评论
			</view>
			<view class="share">
				<image src="../../static/tabbar/分享.png" style="width: 50rpx; height: 50rpx; padding-left: 70rpx;"></image>
			</view>
			<view class="share1">
				分享
			</view>
		</view>
		<view style="background-color: f5f5f5;height: 20rpx;"></view>
		 <view style="padding-left: 20rpx;">
			 最新评论
		 </view>
		 <view class="comment" v-for="(item,index) in comment" :key="index">
			 <view class="touxiang2"><image src="../../static/tabbar/1.webp" style="width: 90rpx;height: 90rpx;"></image> </view>
		     <view class="name2">123456789</view>
			 <view class="comment1" style="padding-left: 70rpx;">
				 {{item.data}}
			 </view>
			 <view style="padding-left: 70rpx;">{{item.create_time}}</view>
		 </view>
		 <uni-section title="请输入你的评论"  type="line" padding>
		 			<uni-easyinput  v-model="pinglun"  placeholder="文明发言" @change="tianjia" ></uni-easyinput>
		</uni-section>
	</view>
</template>

<script>
	import {friendlyDate} from '../../utils/util.js'
	export default {
		data() {
			return {
				id:1,
				contentid:1,
				news:[],
				comment:[],
				pinglun:"",
				post_id:1
			}
		},
		methods: {
			requestcontent(){
				uni.request({
					url:'http://127.0.0.1:3001/content',
					method:'POST',
					data:{
						type:this.contentid
					},
					success:res=>{
						for (let index in res.data){
							res.data[index].create_time=friendlyDate(new Date(res.data[index].create_time*1000))
							
							this.post_id=res.data[index].post_class_id
						}
						this.news=res.data
						
					}
				})
			},
			fanhui(){
				uni.navigateBack(-1)
			},
			requestcomment(){
				uni.request({
					url:'http://127.0.0.1:3001/comment',
					method:'POST',
					data:{
						type:this.contentid
					},
					success:res=>{
						for (let index in res.data){
							res.data[index].create_time=friendlyDate(new Date(res.data[index].create_time*1000))
							this.id=res.data[index].id+1
							console.log(this.id)
						}
						this.comment=res.data
					}
				})
			},
			tianjia(){
				console.log(this.pinglun)
				var timestamp = Date.parse(new Date())/1000
				console.log(timestamp)
				uni.request({
					url:'http://127.0.0.1:3001/tianjia',
					method:'POST',
					data:{
						id:this.id,
						contentid:this.contentid,
						fid:1,
						fnum:2,
						data:this.pinglun,
						create_time:timestamp,
						post_id:this.post_id
					},
					success:res=>{
						console.log(res)
					}
				})
				this.requestcomment()
			},
			dianzang(id,num){
				
				num+=1
				console.log(id,num)
				uni.request({
					url:'http://127.0.0.1:3001/dianzang',
					method:'POST',
					data:{
						id:id,
						num:num
					},
					success:res=>{
						console.log(res)
					}
				})
				this.requestcontent()
			}
		},
		onLoad(options) {
			console.log(options)
			this.contentid=options.id
			this.requestcontent()
			this.requestcomment()
			
		}
	}
</script>

<style lang="less">

.page2{
	
	position: relative;
	.touxiang{
		padding-left: 20rpx;
		image{
			width: 80rpx;
			height: 80rpx;
		}
	}
	.name{
		position: absolute;
		left: 90rpx;
		top: 5rpx;
	}
	.time{
		position: absolute;
		left: 90rpx;
		top: 35rpx;
	}
	.guanzhu{
		height:40px ;
		width: 80px;
		border-radius: 10rpx;
		position: absolute;
		right: 20rpx;
		top: 0;
		button{
			background-color: #fe5a7d;
			color: #fff;
		}
		

	}
	.dianzang1{
		position: absolute;
		left: 120rpx;
		top: 805rpx;
	}
	.cai{
		position: absolute;
		top: 800rpx;
		left: 200rpx;
	}
	.cai1{
		position: absolute;
		left: 320rpx;
		top: 805rpx;
	}
	.pinglun{
		position: absolute;
		top: 800rpx;
		left: 400rpx;
	}
	.pinglun1{
		position: absolute;
		left: 520rpx;
		top: 805rpx;
	}
	.share{
		position: absolute;
		top: 800rpx;
		left: 560rpx;
	}
	.share1{
		position: absolute;
		top: 800rpx;
		left: 670rpx;
	}
}
.comment{
	position: relative;
	height: 200rpx;
	.name2{
		position: absolute;
		left: 70rpx;
		top: 10rpx;
	}
}
</style>
