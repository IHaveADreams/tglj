<template>
  <div class="foreign">
	 <div class="head">
		<div class="forHeader">
			<router-link to="/"><i class="el-icon-arrow-left left"></i></router-link>
			<input type="text" value="搜索关键字" class="right">
	    </div>
	    <div class="nav">
			<el-row>
			  <el-col :span="8"><div class="grid-content bg-purple">
			  <p>位置<i class="el-icon-caret-bottom"></i></p>
			  </div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple-light"><p>筛选<i class="el-icon-caret-bottom"></i></p></div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple"><p>推荐<i class="el-icon-caret-bottom"></i></p></div></el-col>
			</el-row>
	    </div>
	 </div>
    <div class="forMain">
		<ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<router-link to="/particulars" class="color">
				<li v-for="obj in arr">
					<div class="con">
						<img v-bind:src="'http://img.tgljweb.com/' + obj.coverImg" alt="">
						<h2>{{obj.title}}</h2>
						<div>
							<p class="fen">{{obj.avgLevel}}分</p>
							<p class="pu">{{obj.roomtypeName}}</p>
							<p class="pirce">￥{{obj.price}}.00起</p>
						</div>
					</div>
				</li>
			</router-link>
		</ul>
    </div>
  </div>
</template>

<script>
import url from '../data/foreign.json'
var arr = [];
for(var i= 0;i < 14;i++){
  arr.push(url.pageInfo.list[i])
}
export default {
  name: 'foreign',
  data () {
    return {
      arr:arr
    }
  },
  methods:{
  	loadMore() {
      this.loading = true;
      if(this.arr.length < url.pageInfo.list.length - 1){
        setTimeout(() => {
          console.log(1)
          for (let i = 1; i <= 10; i++) {
            let last = url.pageInfo.list[this.arr.length];
            this.arr.push(last);
          }
          this.loading = false;
        }, 2500);
      }else{
         this.loading = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/foreign.scss"
</style>
