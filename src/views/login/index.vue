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
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          console.log('校验通过，开始调用接口')
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
