<template>
  <div class="earning">
    <header class="header">
      <div class="header_left"></div>
      <h1>收益</h1>
      <div class="route">
        <router-link to="/home">返回</router-link>
      </div>
    </header>
    <div class="section">
      <div class="earning_all">
        <span>总收益</span>
        <b>≈ {{totalReturned}} USDT</b>
        <router-link to="/earning/history">收益历史</router-link>
      </div>
      <div class="earning_list">
        <ul class="earning_ul">
          <li>
            <span>今日收益：</span>
            <span>{{earnings}} USDT</span>
          </li>
          <li>
            <span>剩余收益：</span>
            <span>{{returned}} USDT</span>
          </li>
          <li>
            <span>已提收益：</span>
            <span>{{withdrawal}} USDT</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  import moment from "moment";
  export default {
    name: "Earning",
    data() {
      return {
        totalReturned: 0,
        returned: 0,
        withdrawal: 0,
        earnings: 0,
      }
    },
    methods: {
      getprofile() {
        utils.getProfile()
          .then(res => {
            if (res.code === 200) {
              this.totalReturned = res.data.totalReturned
              this.returned = res.data.returned
              this.withdrawal = res.data.withdrawal
              this.earnings = res.data.currentReturned;
            }
          })
      },
    },
    created() {
      this.getprofile()
    }
  };
</script>

<style scoped>
  .earning {
    width: 100%;
  }
  
  .earning .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .earning .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .earning .header h1 {
    font-size: 20px;
  }
  
  .earning .section {
    padding: 0 12px;
  }
  
  .earning .earning_all {
    width: 100%;
    background: #fff;
    color: #000;
    margin-top: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  
  .earning .earning_all b {
    font-size: 22px;
  }
  
  .earning .earning_all a {
    margin-top: 10px;
    padding: 6px 16px;
    background: #ff6803;
    color: #fff;
    border-radius: 20px;
    font-weight: 500;
  }
  
  .earning_list {
    width: 100%;
  }
  
  .earning_list .earning_ul {
    width: 100%;
  }
  
  .earning_list .earning_ul li {
    background: #fff;
    color: #000;
    border-radius: 6px;
    padding: 12px;
    margin-top: 14px;
  }
  
  .earning_list .earning_ul li span:last-child {
    font-weight: 600;
    font-size: 16px;
  }
</style>