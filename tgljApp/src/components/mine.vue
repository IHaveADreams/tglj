<template>
  <div class="mine">
    <div class="mine-header">
		<mt-header title="我的" class="me">
		  <img src="../assets/new.png" alt="" slot="right">
		</mt-header>
		<div class="me-header">
			<img src="http://img.tgljweb.com/face18.jpg" alt="" class="tou">
			<div class="xin">
				<h2>果果爱旅游</h2>
				<p><img src="../assets/approve.png" alt="">未认证</p>
			</div>
			<i class="el-icon-arrow-right"></i>
		</div>
    </div>
    <div class="mine-nav">
	    <el-row>
		  	<el-col :span="12">
			  	<div class="grid-content bg-purple">
				  	<div class="aImg">
						<img src="../assets/indexs.png" alt="" style="width: 80%; margin-top:10px;">
					</div>
					<p>订单</p>
			  	</div>
			</el-col>
			<el-col :span="12">
			  	<div class="grid-content bg-purple-light">
			  	<div class="aImg">
					<img src="../assets/coupon.png" alt="">
			  	</div>
					<p>优惠券</p>
			  	</div>
			</el-col>
		</el-row>
	</div>
	<div class="mine-main">
		<div class="min1">	
			<mt-cell title="我的收藏" is-link class="mt" to="/">
			  <img slot="icon" src="../assets/collect.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的关注" is-link class="mt">
			  <img slot="icon" src="../assets/attention.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="常用游客" is-link class="mt">
			  <img slot="icon" src="../assets/visitor.png" width="24" height="24">
			</mt-cell>
		</div>
		<div class="min1">
			<div @click="bo">
				<mt-cell title="客服" value="4006-406-111" class="mt">
				  <img slot="icon" src="../assets/service.png" width="24" height="24">
				</mt-cell>
			</div>
			<mt-cell title="设置" is-link class="mt">
			  <img slot="icon" src="../assets/set.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="关于我们" is-link class="mt">
			  <img slot="icon" src="../assets/about.png" width="24" height="24">
			</mt-cell>
		</div>
		<p class="qie" @click="show">切换商家身份&emsp;<img src="../assets/qie.png" alt=""></p>
		<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
	</div>
	<div class="login">
		登录:<br>
		账号:<input type="username" v-model="username"><br>
		密码: <input type="password" v-model="password">
		<button @click="login">登录</button>
	</div>

  </div>
</template>

<script>
	import $ from 'jquery'
import { MessageBox } from 'mint-ui';
export default {
  name: 'mine',
  data:function(){
  	return {
  		sheetVisible:false,
			popupVisible:true,
			username:'',
			password:'',
  		actions:[
  			{
  				name:'我是房东'
  			},
  			{
  				name:'我是达人'
  			},
  			{
  				name:'家政服务'
  			}
  		]
  	}
  },
  methods:{
  	show:function(){
  		this.sheetVisible = true;
  	},
  	bo:function(){
  		MessageBox.confirm('4006-406-111','').then(action =>{
  			console.log(1)
  		});
		},
		login(){
			$.get('login',{uname:this.username,password:this.password}).then(function(item){
				console.log(item)
			})
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "./../style/mine.scss"

	

	/*http://javaapi.tgljweb.com:9090/api/templates/travel/find/img/zc_impress@3x.png*/
	/*http://javaapi.tgljweb.com:9090/api/templates/travel/find/img/zc_tralve@3x.png*/
	/*http://javaapi.tgljweb.com:9090/api/templates/travel/find/img/no_wlan.jpg*/
</style>