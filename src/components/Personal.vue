<template>
  <div class="personal">
    <header class="header">
      <div class="header_left"></div>
      <h1>个人中心</h1>
      <div class="route">
        <router-link to="/home">返回</router-link>
      </div>
    </header>
    <div class="section">
      <div class="personal_top">
        <dl>
          <dt><i class="iconfont icon-yonghu"></i></dt>
          <dd>{{mobile}}</dd>
        </dl>
        <router-link to="/invite">邀请好友</router-link>
      </div>
      <div class="personal_list">
        <ul class="personal_ul">
          <li>
            <router-link to="/team">
              <span><i class="iconfont icon-tuandui"></i>
                <span>我的团队</span></span>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/earning/history">
              <span><i class="iconfont icon-shouyi"></i>
                <span>收益记录</span></span>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/address/history">
              <span><i class="iconfont icon-chongzhi"></i>
                <span>充值记录</span></span>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/recharge/history">
              <span><i class="iconfont icon-baodan"></i>
                <span>报单记录</span></span>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/withdrawal/history">
              <span><i class="iconfont icon-tixian"></i>
                <span>提币记录</span></span>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../util'
  export default {
    name: "Personal",
    data () {
      return {
        mobile: ""
      }
    },
    created() {
      this.getProfile()
    },
    methods: {
      getProfile () {
        utils.getProfile()
        .then(res => {
          if (res.code === 200) {
            this.mobile = res.data.mobile
          } else {
            this.$message.error(res.data.message)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .personal {
    width: 100%;
  }
  
  .personal .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .personal .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .personal .header h1 {
    font-size: 20px;
  }
  .personal .section{
    width: 100%;
    padding:0 12px;
  }
  .personal_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .personal_top a{
    color: #fff;
    background: #cc7701;
    padding: 4px 12px;
    border-radius: 20px;
  }
  .personal_top dl{
    display: flex;
    align-items: center;
  }
  .personal_top dt{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #ccc;
    background: #fff;
    text-align: center;
    padding: 4px;
  }
  .personal_top dt i{
    font-size: 60px;
  }
  .personal_top dd{
    color:#fff;
    font-weight: 600;
    margin-left: 20px;
    font-size: 20px;
  }
  .personal_list{
    width: 100%;
    margin-top: 30px;
  }
  .personal_ul{
    width: 100%;
  }
  .personal_ul li{
    background: #fff;
    border-radius: 6px;
    margin-top:10px;
    padding: 14px;
  }
  .personal_ul li a{
    display: flex;
    justify-content: space-between;
  }
  .personal_ul li .iconfont{
    margin-right: 10px;
    color: blue;
    font-size: 20px;
  }
</style>