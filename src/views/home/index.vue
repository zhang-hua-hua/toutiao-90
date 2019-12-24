<template>
  <el-container>
    <el-aside style="min-height:100vh;background-color:#323745;width:230px;">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <!-- 头部 -->
         <el-header>
           <layout-header></layout-header>
         </el-header>
         <el-main>
            <!-- 二级路由容器 -->
          <router-view></router-view>
         </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  // components: {
  //   'layout-aside': layoutAside,
  //   'layout-header': layoutHeader
  // }
}
</script>

<style>
</style>
