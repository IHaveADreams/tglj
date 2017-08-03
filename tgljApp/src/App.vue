<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer" v-show="show">
      <el-row>
        <router-link to="/" class="home" active-class="homeActive">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span></span>
              <p class="cor">首页</p>
            </div>
          </el-col>
        </router-link>
        <router-link to="/journey" class="journey" active-class="journeyActive">
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <span></span>
              <p class="cor">行程</p>
            </div>
          </el-col>
        </router-link>
        <router-link to="/find" class="find" active-class="findActive">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span></span>
              <p class="cor">发现</p>
            </div>
          </el-col>
        </router-link>
        <router-link to="/mine" class="mine" active-class="mineActive">
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <span></span>
              <p class="cor">我的</p>
            </div>
          </el-col>
        </router-link>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return {
      show:eventBus.shows
    }
  }
}
</script>

<style lang="scss">
@import "./style/app.scss"
</style>
