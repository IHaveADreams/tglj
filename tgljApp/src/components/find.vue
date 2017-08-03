<template>
  <div class="find">
    <div class="hello-header">
		  <img src="../assets/news.png" alt="">
      <h3>发现</h3>
      <!-- <router-link to="/city" class="city"> -->
        <p>全国<i class="el-icon-arrow-down"></i></p>
      <!-- </router-link> -->
    </div>
    <div class="hello-main">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <router-link to="/introduce" class="d">
        <li v-for="value in obj" @click="send(value.tid)">
          <img v-bind:src="value.pic" alt="">
          <h3>{{value.name}}</h3>
          <p>{{value.des}}</p>
          <img v-bind:src="value.type" alt="" v-get class="biao">
        </li>
      </router-link>
      </ul>
      <p v-if="show" style="text-align: center;">暂无更多数据</p>
    </div>
  </div>
</template>

<script>
import url from '../data/find.json' 
var arr = [];
for(var i= 0;i < 20;i++){
  arr.push(url.pageInfo.list[i])
}
export default {
  name: 'find',
  data:function(){
    return {
      obj : arr,
      show:false  
    }
  },
  methods:{
    send:function(a){
      eventBus.data = a;
    },
    loadMore() {
      this.loading = true;
      if(this.obj.length < url.pageInfo.list.length - 1){
        setTimeout(() => {
          console.log(1)
          for (let i = 1; i <= 10; i++) {
            let last = url.pageInfo.list[this.obj.length];
            this.obj.push(last);
          }
          this.loading = false;
        }, 2500);
      }else{
        this.show = true;
         this.loading = false;
      }
    }
  },
  directives:{
      get:{
        inserted:function(t){
          if(t.src == 'http://localhost:8282/7'){
            t.src="http://javaapi.tgljweb.com:9090/api/templates/travel/find/img/zc_impress@3x.png"
          } else if (t.src == 'http://localhost:8282/8'){
            t.src = 'http://javaapi.tgljweb.com:9090/api/templates/travel/find/img/zc_tralve@3x.png'
          } 
        }
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./../style/find.scss"
</style>