<template>
  <div class="register">
    <header class="header">
      <div class="header_left"></div>
      <h1>注册</h1>
      <div class="route">
        <router-link to="#"></router-link>
      </div>
    </header>
    <el-form ref="ruleForm" :model="form" class="register_form">
      <el-form-item>
        <el-input placeholder="请输入手机号" v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="sub" size="medium" type="primary" style="width:100%;" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
      <el-form-item class="download">
        <a href="https://test.topglobalcoin.com/download/valuewallet.apk.1.zip" class="download_btn">下载App</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import utils from '../util'
  export default {
    data() {
      return {
        form: {
          mobile: "",
          password: "",
          code: "",
        },
        time: 60,
        timer: null
      };
    },
    // beforeMount() {
    //   utils.getProfile()
    //     .then(res => {
    //       if (res.code === 200) {
    //         // this.$message("注册成功，请点击下方下载App登录")
    //         // this.$router.push('/home')
    //       }
    //     })
    // },
    created() {
      this.form.code = this.$route.params.id;
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            utils.register(this.form)
            .then(res => {
              if (res.code === 200) {
                this.$message("注册成功，请点击下方下载App登录")
                // this.$router.push({path:"/signin"})
              } else {
                this.$message.error(res.message)
              }
            })
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    },
  };
</script>

<style>
  .register {
    width: 100%;
    /* background: #040509; */
  }
  
  .register .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .register .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .register .header h1 {
    font-size: 20px;
  }
  
  .register_form {
    margin-top: 20px;
    padding: 0 12px;
    background: #030408;
  }
  
  .register_form input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #999;
    color: #fff;
    height: 50px;
  }
  
  .register_form .sub {
    background: linear-gradient(to right, #14136f, #4071b1);
    width: 100%;
    height: 48px;
    border-radius: 40px;
    border: none;
    color: #fff;
    opacity: .9;
  }
  .register_form .download{
    text-align: center;
    
  }
  .register_form .download .download_btn{
    display: block;
    width: 100%;
    height: 48px;
    background: #cc7701;
    color:#fff;
    line-height: 48px;
    border-radius: 30px;
  }
</style>