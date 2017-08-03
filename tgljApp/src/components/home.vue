<template>
  <div class="home">
  	<div class="box">
		<div class="list">
			<ul>
				<li v-for="obj in arr"><img v-bind:src="obj.imgUrl" alt="" /></li>
			</ul>
		</div>
		<div class="list1">
			<mt-swipe :show-indicators="false" :auto="3000">
			  <mt-swipe-item v-for="obj in arr" :key ="obj.id"><img v-bind:src="obj.imgUrl" alt="" /></mt-swipe-item>
			</mt-swipe>
		</div>
  	</div>
  	<div class="hello-main1">
		<ul>
			<router-link to="/inland">
				<li>
					<img src="../assets/1.png" alt="">
				</li>
			</router-link>
			<router-link to="/foreign">
				<li>
					<img src="../assets/2.png" alt="">
				</li>
			</router-link>
			<router-link to="/traval">
				<li>
					<img src="../assets/3.png" alt="">
				</li>
			</router-link>
				<li>
					<img src="../assets/4.png" alt="">
				</li>
				<li>
					<img src="../assets/5.png" alt="">
				</li>
		</ul>
	  </div>
  </div>
  
</template>

<script>
import $ from 'jquery'
import obj from '../data/banner.json'
var timer;
export default {
  name: 'hello',
  data(){
  	return {
  		arr:obj.data.title,
  	}
  },
  mounted:function(){
  	var cArr=["p4","p3","p2","p1","p0","p6","p5"];
  	$('.list li').each(function(i){
		$('.list li').eq(i).attr('class',cArr[i]);
	});
	var index = 0;
	//上一张
	function previmg(){
		cArr.unshift(cArr[6]);
		cArr.pop();
		$(".list li").each(function(i,e){
			$(e).removeClass().addClass(cArr[i]);
		})
		index--;
		if (index<0) {
			index=6;
		}
	}

	//下一张
	function nextimg(){
		cArr.push(cArr[0]);
		console.log(cArr);
		cArr.shift();
		console.log(cArr);
		$(".list li").each(function(i,e){
			$(e).removeClass().addClass(cArr[i]);
		})
		index++;
		if (index>6) {
			index=0;
		}
	}
	timer = setInterval(previmg,3000);
  },
  beforeDestroy:function(){
  	clearInterval(timer);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/home.scss"
</style>
