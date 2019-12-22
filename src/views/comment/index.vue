<template>
  <!-- 卡片组件 -->
  <el-card>
      <!-- 组件面包屑 -->
      <bread-crumb slot="header">
        <!-- 插槽内容 -->
        <template slot="title">
            评论管理
        </template>
      </bread-crumb>
      <!-- 表格 -->
      <el-table>
          <!-- 放置 -->
        <el-table-column label="标题" width="800"></el-table-column>
        <el-table-column label="评论状态"></el-table-column>
        <el-table-column label="总评论数"></el-table-column>
        <el-table-column label="粉丝品论数"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
  </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
