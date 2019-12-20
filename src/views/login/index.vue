<template>
  <div class="login">
    <!-- 放置一个el-card组件 -->
    <el-card class="login-card">
      <!-- 放置黑马头条图片 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 放置表单 -->
      <el-form :model="loginForm"  :rules="loginRules" ref="myForm">
            <!-- 表单域 中有input，一个表单域代表一行 -->
            <!-- prop是我们要校验的字段名 不用加冒号： -->
           <el-form-item prop="mobile">
                  <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
           </el-form-item>
            <!-- 表单域 -->
            <el-form-item prop="code">
                  <el-input style="width:60%" placeholder="请输入验证码"  v-model="loginForm.code"></el-input>
            <el-button plain style="float:right">验证码</el-button>
            </el-form-item>
            <!-- 表单域 -->
             <el-form-item prop="check">
                   <el-checkbox  v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
             <!-- 表单域 -->
              <el-form-item>
                     <el-button style="width:100%" type="primary" @click="submitLogin">登录</el-button>
              </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 密码
        check: false // 是否勾选
      },
      loginRules: {
      // 验证规则对象一个对象就是一个规则
        mobile: [{ required: true, message: '未填写手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '未填写验证码' }, { pattern: /^\d{6}$/, message: '验证码错误' }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            // 已勾选
            callback()// 认为当前的规则已通过
          } else {
            // 认为没有勾选，没有通过
            callback(new Error('您未同意'))
          }
        } }]

      }
    }
  },
  methods: {
    submitLogin () {
      // 手动校验
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 说明校验通过，应该调用登录接口
          // 参数body  get参数也加地址参数，路由参数，查询参数
          // body参数放在 axios的data里边
          // get参数放在axios的params里边
          this.$axios({
            url: '/authorizations', // 请求地址 axios 没有指定类型默认走get
            method: 'post', // 类型
            data: this.loginForm // body参数
          }).then(result => { // 在.then中接收我的结果,他只接收正确结果
            // 前端换存 登录成功返回给我们的令牌
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')// 跳转到home主页
          }).catch(() => {
            this.$message({
              message: '登录失败',
              type: 'warning'
            })
          }) // .catch只接受错误结果
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
  .login{
     background-image:url('../../assets/img/bak.jpg');
     height:100vh;
     background-size:cover;//自适应覆盖
     display:flex;
     justify-content: center;
     align-items: center;
     .login-card{
       width: 440px;
       height: 350px;
       .title{
          text-align:center;
         margin-bottom:20px;
           img{
             width: 190px;
             height:40px;
           }
       }
     }
    }

</style>
