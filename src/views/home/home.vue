<template>
   <div>
  <template>
  <el-carousel :interval="5000" arrow="always" height="888px">
    <el-carousel-item v-for="item in list" :key="item">
     <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
   </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['http://pic1.win4000.com/wallpaper/2019-11-28/5ddf5ac0919cc.jpg', 'http://b.zol-img.com.cn/soft/5/872/ceXvmliL01NeQ.jpg']
    }
  }
}
</script>

<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
