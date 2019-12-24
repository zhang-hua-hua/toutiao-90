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
      <el-table :data="list">
          <!-- 放置 -->
        <el-table-column prop="title" label="标题" width="800"></el-table-column>
        <el-table-column :formatter="formmatterBoolean" prop="comment_status" label="评论状态"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝品论数"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="obj">
          <!-- 作用域插槽 -->
          <el-button size="small" type="text">修改</el-button>
          <!-- 需要根据状态来进行判断是关闭是还打开 -->
          <el-button @click="openOrCloseState(obj.row)" size="small" type="text">{{obj.row.comment_status?'关闭':'打开'}}评论</el-button>
          </template>
        </el-table-column>
      </el-table>
  </el-card>
</template>

<script>
export default {

  data () {
    return {
      list: []//   定义一个数据接收我返回的数据
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }// 传的参数
        // .then就是返回数据结果
      }).then(result => {
        this.list = result.data.results
      })
    },
    formmatterBoolean (row, column, cellValue, index) {
      // row=>当前行数据
      // column=>当前列信息
      // cellValue=>当前的单元格的值
      // index 索引
      return cellValue ? '正常' : '关闭'
    },
    //  打开或者关闭评论
    openOrCloseState (row) {
    // 直接调用接口
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`你是否确定要打卡${mess}评论吗？`, '提示').then(() => {
      // 调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id },
          data: { allow_comment: !row.comment_status }// 因为当前如果是打开，就是关闭 如果是关闭 就是打开
        }).then(result => {
          this.getComment()
        })
      })
    }
  },
  // 钩子函数created调用
  created () {
    this.getComment()// 获取评论管理数据
  }
}
</script>

<style>

</style>
