<template>
<!-- 定义行 -->
 <el-row class="layout-header" type="flex" align="middle">
      <!-- 定义列 -->
      <el-col class="left" :span="12">
          <i class="el-icon-s-fold"></i>
          <samp>江苏传智播客教育科技股份有限公司</samp>
      </el-col>
        <el-col class="right" :span="12">
          <el-row type='flex' justify="end" align="middle">
              <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="">

                <el-dropdown>
                    <!-- 匿名插槽就是下拉菜单显示的元素内容 -->
                   <span>
                      {{userInfo.name}}
                   </span>

                   <!-- slot具名插槽就是我鼠标放上去显示的二级内容 -->
                   <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>个人信息</el-dropdown-item>
                   <el-dropdown-item>git地址</el-dropdown-item>
                   <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </el-row>
        </el-col>
 </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 定义一个用户对象
      defaultImg: require('../../assets/img/toux.jpg') // 将图片头像转换成了变量
    }
  },
  created () {
    let token = localStorage.getItem('user-token') // 获取用户令牌
    this.$axios({
      url: '/user/profile',
      headers: {
        //   header的参数内容
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang='less' scoped>
 .layout-header{
     height:60px;
    .left{
        font-size: 18px;
        font-weight: 600;
        span{
             color:#2c3e50;
             font-size: 16px;
             margin-left:4px;
        }

    }
    .right{
        img{
            width: 45px;
            height: 45px;
            border-radius:50%;
            margin-right: 15px;
        }
    }
 }

</style>
