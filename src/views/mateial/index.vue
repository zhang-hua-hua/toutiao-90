<template>
  <el-card>
        <bread-crumb slot="header">
             <template slot="title">
                 素材管理
             </template>
        </bread-crumb>
        <!-- 标签页 -->
        <el-tabs v-model="activeName" @tab-click="changeTab">
           <el-tab-pane label="全部图片" name="all">
               <!-- 生成页面结构 -->
                <div class="img-list">
                     <!-- v-for对数据进行遍历 -->
                     <el-card class='img-card' v-for="item in list" :key="item.id">
                         <img :src="item.url" alt="">
                        <el-row class="operate" type="flex" justify="space-around" align="middle">
                          <!-- 需要根据当前是否收藏的状态来决定  是否给按钮颜色 -->
                          <el-button @click="collectOrCancel(item)" :style="{color:item.is_collected?'blue':'#fff'}" type="warning" icon="el-icon-star-off" circle></el-button>
                          <el-button @click="delMaterial(item.id)" type="danger" icon="el-icon-delete" circle></el-button>
                        </el-row>
                     </el-card>
                </div>
           </el-tab-pane>
           <el-tab-pane label="收藏图片" name="collect">
               <div class="img-list">
                     <!-- v-for对数据进行遍历 -->
                     <el-card class='img-card' v-for="item in list" :key="item.id">
                         <img :src="item.url" alt="">
                     </el-card>
                </div>
           </el-tab-pane>
        </el-tabs>
         <el-row type="flex" justify="center">
                      <el-pagination
                          :current-page="page.crrentPage"
                          :page-size="page.pageSize"
                          :total="page.total"
                          @current-change="changePage"
                          background
                          layout="prev, pager, next"
                          >
                           </el-pagination>
                </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中的标签
      list: [], // 接收素材数据
      page: {
        currenPage: 1,
        pageSize: 15, // 一页有几个
        total: 0
      }
    }
  },
  // 获取素材的方法
  methods: {
    // 删除用户素材方法
    delMaterial (id) {
      this.$confirm('你确定删除此图片吗？').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${id}`
        }).then(() => {
          this.getMaterial() // 从新拉去数据
        })
      })
    },
    // 取消或收藏方法
    collectOrCancel (item) {
      this.$axios({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: {
          collect: !item.is_collected // 取反  因为  收藏  =>取消收藏
        }
      }).then(result => { this.getMaterial() })
    },
    // 改变页数方法
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 切换页签方法
    changeTab () {
      this.page.currentPage = 1// 重置回第一页
      this.getMaterial()
    },
    // 获取素材的方法
    getMaterial () {
      this.$axios({
        url: 'user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect'// 传false是获取所有的数据 传true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results// 获取所有图片数据
        this.page.total = result.data.total_count // 走条数
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
  .img-list{
    display:flex;
    flex-wrap:wrap;
    .img-card{
       width: 200px;
       height: 250px;
       margin:20px 50px;
       position: relative;
       img{
         width: 100%;
         height: 100%;
       }
       .operate{
         width: 100%;
         position:absolute;
         left:0;
         bottom:0px;
        //  font-size: 20px;
        height:60px;
        background-color: #f4f5f6;
       }
    }
  }

</style>
