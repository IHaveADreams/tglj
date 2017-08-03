<template>
	<div class="introduce">
		<router-link to="/find">
			<i class="el-icon-arrow-left i" @click="changeShow"></i>
		</router-link>
		<div class="in-banner">
			<mt-swipe :show-indicators="false">
				<mt-swipe-item v-for="imgs in pic" :key ="imgs.id">
					<img v-bind:src="imgs" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="in-nav">
			<el-row>
			  <el-col :span="20"><div class="grid-content bg-purple">
				<img v-bind:src="obj.avatar" alt="" class="user">
				<p class="name">{{obj.nickname}}</p>
			  </div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">
				<p class="attention">+关注</p>
			  </div></el-col>
			</el-row>
		</div>
		<p class="name">{{obj.name}}</p>
		<div v-html="obj.content"></div>
		<!-- <div class="infoot"></div> -->
	</div>
</template>	

<script>
export default {
  	name: 'introduce',
  	data:function(){
	  	return {
	  		obj:{aaa:123},
	  		pic:''
	  	}
  	},
  	methods:{
  		changeShow:function(){
  			eventBus.shows = true;
  			console.log(eventBus.shows)
  		}
  	},
  	created:function(){
		var val = eventBus.data;
		var url = 'http://javaapi.tgljweb.com:9090/api/travelimpress/detailshtml?tid='+val+'&uid=2740845';
		$.getJSON('geturl', {url:url}, (b)=>{
			this.obj = b.msg.data;
			this.pic = this.obj.pics;
		})
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/introduce.scss"
</style>
