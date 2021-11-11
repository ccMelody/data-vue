<template>
  <div class="index">
    <div class="header">
      <img src="/img/nav-img.png" alt="" width="100%" height="220px">
      <div class="title">
        <p>
          WELECOMT TO AVUE-DATA<br />
          <small>可视化数据大屏（demo）</small>
        </p>
      </div>
      <navs @change="handleChange"></navs>
    </div>
    <!-- 大屏管理列表 -->
    <div class="main" v-if="activeName==0">
      <list></list>
    </div>
    <el-scrollbar class="main">
      <!-- 地图管理tab -->
      <maps v-if="activeName==1"></maps>
      <!-- 分类管理tab -->
      <category v-else-if="activeName==2"></category>
      <!-- 数据源管理tab -->
      <db v-else-if="activeName==3"></db>
      <!--  接口文档tab-->
      <iframe v-else-if="activeName==4" style="width:100%;height:1500px" src="https://data.bladex.vip/doc.html" frameborder="0"></iframe>
      <!-- 在线文档tab -->
      <!-- <iframe v-else-if="activeName==5" style="width:100%;height:1500px" src="https://www.kancloud.cn/smallwei/avue-doc" frameborder="0"></iframe> -->
    </el-scrollbar>
  </div>
</template>
<script>
import list from './list/index';//大屏管理列表
import maps from './list/map';//地图管理
import category from './list/category';//分类管理
import db from './list/db';//数据源管理
import navs from './nav/index';//导航tab
export default {
  name: "index",
  components: {
    navs,
    list,
    maps,
    category,
    db
  },
  data () {
    return {
      activeName: 0,
    }
  },
  methods: {
    handleChange (nav, index) {
      this.activeName = index;
    }
  }
}
</script>
<style lang="scss">
.index {
  height: 100%;
  .header {
    position: relative;
    .nav {
      margin: 0 20px;
      width: 100%;
      position: absolute;
      bottom: 10px;
      border: none;
      .el-menu-item {
        background-color: rgba(0, 0, 0, 0) !important;
      }
    }
    .title {
      position: absolute;
      top: 60px;
      left: 20px;
      font-size: 48px;
      font-style: oblique;
      color: rgb(0, 186, 255);
      font-weight: bold;
      line-height: 35px;
    }
    .title small {
      font-size: 18px;
      color: #9cb4c2;
    }
  }
  .main {
    width: 100%;
    height: calc(100% - 220px);
  }
}
</style>