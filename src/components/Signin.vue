<template>
  <div class="signin">
    <header class="header">
      <div class="header_left"></div>
      <h1>登录</h1>
      <div class="route">
        <router-link to="#"></router-link>
      </div>
    </header>
    <el-form ref="ruleForm" :model="form" class="signin_form">
      <el-form-item>
        <el-input placeholder="请输入手机号" v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="sub" size="medium" type="primary" style="width:100%;" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import utils from '../util'
  import axios from "axios";
  export default {
    data() {
      return {
        form: {
          mobile: "",
          password: ""
        }
      };
    },
    beforeMount() {
      utils.getProfile()
        .then(res => {
          if (res.code === 200) {
            this.$router.push('/home')
          }
        })
    },
    created() {
  
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            utils.signin(this.form)
              .then(res => {
                if (res.code === 400) {
                  this.$message.error(res.message)
                  return false;
                }
                if (res.code === 200) {
                  this.$router.push('/home')
                }
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    }
  };
</script>

<style>
  .signin {
    width: 100%;
    /* background: #040509; */
  }
  
  .signin .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .signin .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .signin .header h1 {
    font-size: 20px;
  }
  
  .signin_form{
    margin-top:20px;
    padding: 0 12px;
    background: #030408;
  }
  .signin_form input{
    background: transparent;
    border:none;
    border-bottom: 1px solid #999;
    color:#fff;
    height: 50px;
  }
  .signin_form .sub{
    background: linear-gradient(to right, #14136f, #4071b1);
    width: 100%;
    height: 48px;
    border-radius: 40px;
    border: none;
    color: #fff;
    opacity: .9;
  }
</style>