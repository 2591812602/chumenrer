<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<uni-search-bar placeholder="请输入帖子" @tap="tiaozhuan1"></uni-search-bar>
		<view class="tabs" >
			<view :class="active===index?'active':''" v-for="(item,index) in tabList" :key="index"
			@click="ontabtap(index)" >{{item.name}}</view>
		</view>
		<view style="height: 17px;background-color: #f5f5f5;"></view>
		
			<view  v-for="(item,index) in news" :key="index">
				<view class="content" v-if="item.titlepic" @tap="tiaozhuan(item.id)">
					<view class="touxiang"> <image src="../../static/tabbar/1.webp" style="width: 65px;height: 65px;"></image></view>
					<view class="name">用户{{item.user_id}}</view>
					<view class="pinglun" style="padding-bottom: 50rpx; height: 100rpx;padding-left: 20rpx;padding-bottom: 10rpx;">{{item.title}}</view>
					<view class="guanzhu"><button> 关注</button></view>
					<view class="tupian">
						<image :src="item.titlepic" style="padding-left: 40rpx;width: 730px;"></image>
					</view>
					
				</view>
				<view class="content2" v-else-if="!item.titlepic">
					<view class="touxiang"> <image src="../../static/tabbar/1.webp" style="width: 65px;height: 65px;"></image></view>
					<view class="name">用户{{item.user_id}}</view>
					<view class="pinglun" style="padding-bottom: 50rpx; height: 100rpx;padding-left: 20rpx;padding-bottom: 100rpx;">{{item.title}}</view>
					<view class="guanzhu"><button> 关注</button></view>
					
		 	    </view>
		    </view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			
			return {
				 tabList: [{
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
				 news:[],
				 datas:""
			}
		},
		onLoad() {
			this.requestcontent()
			
		},
		methods: {
			ontabtap(index){
				this.active=index
				this.requestcontent()
			},
			requestcontent(){
				uni.request({
					url:'http://127.0.0.1:3001/message',
					method:'POST',
					data:{
						type:this.active+1
					},
					success:res=>{
						
						this.news=res.data
					}
				})
			},
			tiaozhuan(id){
				uni.navigateTo({
					url:'/pages/content/content?id='+id
				})
			},
			tiaozhuan1(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
			
			
			
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
.content{
		position: relative;
		
		.name{
			position: absolute;
			top: 25rpx;
			left: 120rpx;
		}
		.guanzhu{
			height:20px ;
			width: 80px;
			
			position: absolute;
			right: 20rpx;
			top: 25rpx;
			border-radius: 10px;
			button{
				background-color: #fe5a7d;
				color: #ffffff;
			}
		}
		.dianzan{
			image{
				width: 30px;
				height: 30px;
				position: absolute;
				left: 70rpx;
				bottom: 70rpx;
			}
		}
		.font1{
			position: absolute;
			left: 140rpx;
			bottom: 72rpx;
		}
		.cai{
			image{
				width: 30px;
				height: 30px;
				position: absolute;
				left: 235rpx;
				bottom: 70rpx;
			}
		}
		.font2{
			position: absolute;
			left: 300rpx;
			bottom: 72rpx;
		}
		.pinglun1{
			image{
				width: 30px;
				height: 30px;
				position: absolute;
				left: 400rpx;
				bottom: 70rpx;
			}
		}
		.font3{
			position: absolute;
			left: 470rpx;
			bottom: 72rpx;
		}
		.share{
			image{
				width: 30px;
				height: 30px;
				position: absolute;
				left: 600rpx;
				bottom: 70rpx;
			}
		}
		.font4{
			position: absolute;
			left: 660rpx;
			bottom: 72rpx;
		}
		.tupian{
			padding-bottom: 100rpx;
		}
			
			
		
	}
	.content2{
			position: relative;
			
			.name{
				position: absolute;
				top: 25rpx;
				left: 120rpx;
			}
			.guanzhu{
				height:20px ;
				width: 80px;
				
				position: absolute;
				right: 20rpx;
				top: 25rpx;
				border-radius: 10px;
				button{
					background-color: #fe5a7d;
					color: #ffffff;
				}
			}
			.dianzan{
				image{
					width: 30px;
					height: 30px;
					position: absolute;
					left: 70rpx;
					bottom: 70rpx;
				}
			}
			.font1{
				position: absolute;
				left: 140rpx;
				bottom: 72rpx;
			}
			.cai{
				image{
					width: 30px;
					height: 30px;
					position: absolute;
					left: 235rpx;
					bottom: 70rpx;
				}
			}
			.font2{
				position: absolute;
				left: 300rpx;
				bottom: 72rpx;
			}
			.pinglun1{
				image{
					width: 30px;
					height: 30px;
					position: absolute;
					left: 400rpx;
					bottom: 70rpx;
				}
			}
			.font3{
				position: absolute;
				left: 470rpx;
				bottom: 72rpx;
			}
			.share{
				image{
					width: 30px;
					height: 30px;
					position: absolute;
					left: 600rpx;
					bottom: 70rpx;
				}
			}
			.font4{
				position: absolute;
				left: 660rpx;
				bottom: 72rpx;
			}
				
				
			
		}
</style>
