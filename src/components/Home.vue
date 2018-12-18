<template>
  <div class="home">
    <div class="header">
      <h1>CAN全球增值计划</h1>
    </div>
    <ul class="home_top">
      <li>
        <span>账户余额</span>
        <b>{{balance}} CAN</b>
      </li>
      <li>
        <span>报单总额</span>
        <b>{{amount}} USDT</b>
      </li>
      <li>
        <span>收益总额</span>
        <b>{{returned}} USDT</b>
      </li>
    </ul>
    <div class="home_nav">
      <ul class="home_ul">
        <li>
          <router-link to="/address">
            <span><i class="iconfont icon-chongzhi"></i>
              <span>充值入口</span></span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/recharge">
            <span><i class="iconfont icon-baodan"></i>
              <span>报单</span></span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/earning">
            <span><i class="iconfont icon-shouyi"></i>
              <span>收益</span></span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/withdrawal">
            <span><i class="iconfont icon-tixian"></i>
              <span>提现</span></span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/personal">
            <span><i class="iconfont icon-geren"></i>
              <span>个人中心</span></span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/invite">
            <span><i class="iconfont icon-yaoqing"></i>
              <span>邀请好友</span></span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  export default {
    name: "Home",
    data() {
      return {
        balance: "",
        amount: "",
        returned: ""
      };
    },
    methods: {
      getprofile() {
        utils.getProfile()
          .then(res => {
            if (res.code === 200) {
              this.amount = res.data.amount;
              this.balance = res.data.balance;
              this.returned = res.data.returned;
            }
          })
      }
    },
    created() {
      this.getprofile();
    }
  };
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    background-image: url("../assets/banner.jpg");
    background-size: 100% 230px;
    background-repeat: no-repeat;
  }
  
  .home .header {
    width: 100%;
    height: 46px;
  }
  
  .home .header h1 {
    text-align: center;
    line-height: 46px;
    font-size: 20px;
  }
  
  .home_top {
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
  }
  
  .home_top li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .home_top li span {
    margin-bottom: 16px;
  }
  
  .home_top li b {
    font-size: 16px;
  }
  
  .home_nav {
    width: 100%;
    padding: 0 12px;
  }
  
  .home_nav .home_ul {
    width: 100%;
    border-radius: 6px;
    color: #000;
  }
  
  .home_ul li {
    width: 100%;
    /* border: .2px solid #eee; */
    border-radius: 6px;
    margin-bottom: 10px;
  }
  .home_ul li:nth-child(even){
    /* background: #5bc0de; */
    background: #04c596;
  }
  .home_ul li:nth-child(odd){
    background: #f0ad4e;
  }
  .home_ul li a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 14px;
    color:#fff;
  }
  
  .home_ul li i {
    font-size: 16px;
  }
  
  .home_ul li span {
    font-weight: 500;
  }
</style>