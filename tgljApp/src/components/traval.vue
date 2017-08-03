<template>
  <div class="traval">
	<div class="lvBanner">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="obj in arr" :key="obj.id">
			<img :src="obj.imgs" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<router-link to="/">
			<i class="el-icon-arrow-left left"></i>
		</router-link>
	</div>

	<div class="theme">
		<div class="title">
			<h2>主题线路</h2>
			<p>更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="city">
			<ul>
				<li v-for="(obj,index) in arr1" @click="changeCity(index)" class="cityname">
					<p>{{obj.cityname}}</p>
				</li>
			</ul>
		</div>
		<div class="higo">
			<ul>
				<li v-for="obj in arr2">
					<img :src="obj.titlePic" alt="">
					<h4>{{obj.name}}</h4>
					<p>
						<span class="tag">{{obj.tag[0]}}</span>
						<span>{{obj.tag[1]}}</span>
						<span class="price">￥{{obj.price}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>

	<div class="theme">
		<div class="title">
			<h2>当地活动</h2>
			<p>更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="higo2">
			<ul>
				<li v-for="obj in arr3">
					<img :src="obj.titlePic" alt="">
					<h4>{{obj.name}}</h4>
					<p>
						<span class="tag">{{obj.tag[0]}}</span>
						<span>{{obj.tag[1]}}</span>
						<span class="price">￥{{obj.price}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>

	<div class="theme">
		<div class="title">
			<h2>游记攻略</h2>
			<p>更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="angel" v-for="obj in arr5">
			<img :src="obj.pic" alt="" class="anImg">
			<div class="p">
				<h5>{{obj.name}}</h5>
				<span class="tag"><img src="../assets/kan1.png" alt="">{{obj.readCount}}</span>
				<span><img src="../assets/zan1.png" alt="">{{obj.praiseCount}}</span>
			</div>
		</div>
		<div class="higo3">
			<ul>
				<li v-for="obj in arr4">
					<img :src="obj.pic" alt="">
					<h4>{{obj.name}}</h4>
					<p>
						<span class="tag"><img src="../assets/look.png" alt="">{{obj.readCount}}</span>
						<span><img src="../assets/zan.png" alt="">{{obj.praiseCount}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>

	<div class="theme">
		<div class="title">
			<h2>印象随笔</h2>
			<p>更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="higo4">
			<ul>
				<li v-for="obj in arr6">
					<img :src="obj.pic" alt="" class="picImg">
					<h2>{{obj.name}}</h2>
					<span class="span">{{obj.des}}</span>
					<p>
						<span><img src="../assets/look.png" alt="">{{obj.readCount}}</span>
						<span><img src="../assets/zan.png" alt="" class="img2">{{obj.goodCount}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
import $ from "jquery"
import touch from '../../static/touch/touch.js'
var listArr = [];
export default {
  name: 'lv',
  data () {
    return {
      arr:[],
      arr1:[],
      arr2:[],
      arr3:[],
      arr4:[],
      arr5:[],
      arr6:[]
    }
  },
  mounted:function(){
  	// banner数据
  	var url = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/title';
	$.getJSON('geturl', {url:url}, (b)=>{
		this.arr = b.msg.data;
	})
	// 城市数据
	var url1 = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/higocity';
	$.getJSON('geturl', {url:url1}, (b)=>{
		this.arr1 = b.msg.data;
		for(var i in this.arr1){
			listArr.push(this.arr1[i].citycode)
		}
	})
	//  higo数据
	var url2 = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/higolist?citycode=110100';
	$.getJSON('geturl', {url:url2}, (b)=>{
		this.arr2 = b.msg.data;
	})

	// 主题活动拖拽
	touch.on(".higo ul","dragstart",function(e){
		var x = e.position.x - $(".higo ul").offset().left;
		touch.on(".higo ul","drag",function(ev){
			var l = ev.position.x-x;
			if (l>0) {
				l = 0;
			}
			if (l< -560) {
				l = -560
			}
			$(".higo ul").css("left",l);
		})
	})

	//  当地活动数据
	var url3 = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/actlist?citycode=110100';
	$.getJSON('geturl', {url:url3}, (b)=>{
		this.arr3 = b.msg.data;
	})

	// 当地活动拖拽
	touch.on(".higo2 ul","dragstart",function(e){
		var x = e.position.x - $(".higo2 ul").offset().left;
		touch.on(".higo2 ul","drag",function(ev){
			var l = ev.position.x-x;
			if (l>0) {
				l = 0;
			}
			if (l< -500) {
				l = -500
			}
			$(".higo2 ul").css("left",l);
		})
	})

	// 游记攻略数据
	var url4 = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/notelist';
	$.getJSON('geturl', {url:url4}, (b)=>{
		this.arr4 = b.msg.data;
		this.arr5.push(b.msg.data[0]);
	})

	// 游记攻略拖拽
	touch.on(".higo3 ul","dragstart",function(e){
		var x = e.position.x - $(".higo3 ul").offset().left;
		touch.on(".higo3 ul","drag",function(ev){
			var l = ev.position.x-x;
			if (l>0) {
				l = 0;
			}
			if (l< -280) {
				l = -280
			}
			$(".higo3 ul").css("left",l);
		})
	})

	// 印象随笔数据
	var url5 = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/implist';
	$.getJSON('geturl', {url:url5}, (b)=>{
		this.arr6 = b.msg.data;
		console.log(this.arr6)
	})

  },
  methods:{
  	changeCity(i){
  		$('.cityname').eq(i).css({
  			'color':'green',
  			'borderBottom':'3px solid green'
  		}).siblings('li').css({
  			'color':'black',
  			'border':'none'
  		})
  		// 获取数据
  		var num = listArr[i];
  		var url = 'http://javaapi.tgljweb.com:9090/api/travelhomepage/higolist?citycode='+num;
		$.getJSON('geturl', {url:url}, (b)=>{
			this.arr2 = b.msg.data;
		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/traval.scss"
</style>
