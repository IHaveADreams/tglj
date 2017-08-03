<template>
  <div class="inland">
 	<div class="china-banner">
	    <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="obj in banner" :key ="obj.id">
			<img v-bind:src="obj.imgUrl" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<router-link to="/">
			<i class="el-icon-arrow-left left"></i>
		</router-link>
		<p class="el-icon-search ss"></p>
	</div>
	<!-- <div class="china-city">
		<h3>热门城市</h3>
		<ul>
			<li v-for="obj1 in city">
				<img v-bind:src="obj1.cityImg" alt="">
				<p>{{obj1.cityName}}</p>
			</li>
		</ul>
	</div> -->
	<div class="homestay">
		<div class="h-title">
			<h3>民宿</h3>
			<p class="g">更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="h-xq">
			<mt-swipe :auto="0" :show-indicators="false">
				  <mt-swipe-item v-for="obj2 in home" :key ="obj2.id">
				  	<router-link to="/particulars" class="color">
					  	<div class="con">
							<img v-bind:src="obj2.coverImg" alt="">
							<h2>{{obj2.title}}</h2>
							<div>
								<p class="fen">{{obj2.avgLevel}}分</p>
								<p class="pu">{{obj2.roomtypeName}}</p>
								<p class="pirce">￥{{obj2.price}}.00起</p>
							</div>
						</div>
					</router-link>
				  </mt-swipe-item>
			</mt-swipe>
		</div>
	</div>

	<div class="homestay">
		<div class="h-title">
			<h3>公寓</h3>
			<p class="g">更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="h-xq">
			<mt-swipe :auto="0" :show-indicators="false">
				  <mt-swipe-item v-for="obj2 in apa" :key ="obj2.id">
				  	<router-link to="/particulars" class="color">
					  	<div class="con">
							<img v-bind:src="obj2.coverImg" alt="">
							<h2>{{obj2.title}}</h2>
							<div>
								<p class="fen">{{obj2.avgLevel}}分</p>
								<p class="pu">{{obj2.roomtypeName}}</p>
								<p class="pirce">￥{{obj2.price}}.00起</p>
							</div>
						</div>
					</router-link>
				  </mt-swipe-item>
			</mt-swipe>
		</div>
	</div>

	<div class="homestay">
		<div class="h-title">
			<h3>客栈</h3>
			<p class="g">更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="h-xq">
			<mt-swipe :auto="0" :show-indicators="false">
				  <mt-swipe-item v-for="obj2 in inn" :key ="obj2.id">
				  	<router-link to="/particulars" class="color">
					  	<div class="con">
							<img v-bind:src="obj2.coverImg" alt="">
							<h2>{{obj2.title}}</h2>
							<div>
								<p class="fen">{{obj2.avgLevel}}分</p>
								<p class="pu">{{obj2.roomtypeName}}</p>
								<p class="pirce">￥{{obj2.price}}.00起</p>
							</div>
						</div>
					</router-link>
				  </mt-swipe-item>
			</mt-swipe>
		</div>
	</div>

	<div class="homestay">
		<div class="h-title">
			<h3>别墅</h3>
			<p class="g">更多<i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="h-xq">
			<mt-swipe :auto="0" :show-indicators="false">
				  <mt-swipe-item v-for="obj2 in villa" :key ="obj2.id">
				  	<router-link to="/particulars" class="color">
					  	<div class="con">
							<img v-bind:src="obj2.coverImg" alt="">
							<h2>{{obj2.title}}</h2>
							<div>
								<p class="fen">{{obj2.avgLevel}}分</p>
								<p class="pu">{{obj2.roomtypeName}}</p>
								<p class="pirce">￥{{obj2.price}}.00起</p>
							</div>
						</div>
					</router-link>
				  </mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
  </div>
</template>

<script>
import arr from '../data/china.json'
//console.log(arr.data)
export default {
  name: 'china',
  data () {
    return {
      banner:arr.data.title,
      city:arr.data.hotCity,
      home:arr.data.homestay,
      apa:arr.data.apartment,
      inn:arr.data.inn,
      villa:arr.data.villa
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/inland.scss"
</style>
