<template>
  <div class='layout-aside'>
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <!-- 左侧导航文件 -->
      <el-menu background-color="#323745" text-color="#adafb5" active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-menu-item>首页</el-menu-item>
          <!-- 二级菜单 -->
            <el-submenu>
              <template slot="title">
                    <span>内容管理</span>
              </template>
              <el-menu-item-group>
              <el-menu-item index="1-1">发布文章</el-menu-item>
              <el-menu-item index="1-2">文章列表</el-menu-item>
              <el-menu-item index="1-3">评论管理</el-menu-item>
              <el-menu-item index="1-3">素材管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu>
              <template slot="title">
                    <span>粉丝管理</span>
              </template>
              <el-menu-item-group>
              <el-menu-item index="1-4">图文数据</el-menu-item>
              <el-menu-item index="1-5">粉丝概况</el-menu-item>
              <el-menu-item index="1-6">粉丝画像</el-menu-item>
              <el-menu-item index="1-6">粉丝列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          <el-menu-item>账户信息</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-aside{
    width:230px;
    .el-menu{
         border-right:none;
    }
    .title{
          text-align: center;
          padding:10px 0;
          background-color:#353b4e;
          img{
              height:35px;
          }
    }
}

</style>
