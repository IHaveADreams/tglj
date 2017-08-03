<template>
  	<div class="journey">
	   	<div class="journey-header">
			<i class="el-icon-more"></i>
	      	<h3>行程</h3>
	      	<p>全部</p>
	    </div>
	    <div class="journey-main">
			<p>您还没有行程</p>
			<p>下单后即可管理您的出行计划</p>
	  	</div>
	  	<div class="journey-footer">
			<h2>—推荐新的行程—</h2>
			<ul>
				<router-link to="/particulars" class="cor">
					<li v-for="value in obj" @click="test">
						<img v-bind:src="value.coverImg" alt="" class="coverImg">
						<h3>{{value.title}}</h3>
						<p>
							<span><img src="../assets/location.png" alt="">{{value.cityName}}</span>
							<span class="price">￥{{value.price}}</span>
						</p>
						<i v-get>{{value.type}}</i>
					</li>
				</router-link>
			</ul>
	  	</div>
  	</div>
</template>

<script>
import $ from 'jquery';
import obj from '../data/journey.json';
export default {
  name: 'journey',
  data () {
    return {
      msg: 'journey',
      obj:obj.data.suggestList,
      type:''
    }
  },
  methods:{
  	test:function(){

  	}
  },
  directives:{
  		get:{
  			inserted:function(t){
  				if(t.innerHTML == 0){
  					t.innerHTML = '民宿'
  				} else if (t.innerHTML == 1){
  					t.innerHTML = '旅行'
  				} else if(t.innerHTML == 2){
  					t.innerHTML = '活动'
  				}
  			}
  		}
  },
  mounted:function(){
  	var url = 'http://javaapi.tgljweb.com:9090/api/house/date/getDatePricesForHouseDetails';
	$.post('posturl', {url:url,houseId:"1769244"}, function (data) {
		console.log(data);
	})
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/journey.scss"
</style>