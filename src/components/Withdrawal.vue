<template>
  <div class="withdraw">
    <header class="header">
      <div class="header_left"></div>
      <h1>提币</h1>
      <div class="route">
        <router-link to="/home">返回</router-link>
      </div>
    </header>
    <div class="section">
      <ul class="withdraw_ul">
        <li>
          <span>币种</span>
          <b>USDT</b>
        </li>
        <li>
          <span>数量<i>可用余额：{{returned}} USDT</i></span>
          <el-input :value="number" type="number" :min="0" controls-position="right" placeholder="请输入提币数额" @input="changeNumber"></el-input>
        </li>
        <li>
          <span>接受地址</span>
          <el-input v-model="address" placeholder="请输入提币地址"></el-input>
        </li>
      </ul>
      <div class="withdraw_btn">
        <el-button @click="subWithdraw">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  import moment from "moment";
  export default {
    name: "withdrawal",
    data() {
      return {
        number: 0,
        address: "",
        returned: 0
      };
    },
    methods: {
      changeNumber(e) {
        return this.number = e.replace(/[^\d]/g, '');
      },
      getprofile() {
        utils.getProfile()
          .then(res => {
            if (res.code === 200) {
              this.returned = res.data.returned;
            }
          })
      },
      subWithdraw() {
        utils.sendWithdraw(this.number, this.address)
          .then(res => {
            if (res.code === 400) {
              this.$message.error(res.message);
              return false;
            }
            if (res.data.code === 200) {
              this.number = 0;
              this.getList(this.page);
              return false;
            }
          });
      },
    },
    created() {
      this.getprofile()
    }
  };
</script>

<style>
  .withdraw {
    width: 100%;
  }
  
  .withdraw .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .withdraw .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .withdraw .header h1 {
    font-size: 20px;
  }
  
  .withdraw .section {
    width: 100%;
    padding: 0 12px;
  }
  
  .withdraw .withdraw_ul {
    width: 100%;
    padding: 0 6px;
    background: #151515fc;
    margin-top: 10px;
  }
  
  .withdraw .withdraw_ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    width: 100%;
    height: 70px;
    align-items: center;
  }
  
  .withdraw .withdraw_ul li:last-child {
    border: none;
  }
  
  .withdraw .withdraw_ul li b {
    font-size: 16px;
  }
  
  .withdraw .withdraw_ul li span {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .withdraw .withdraw_ul li span i {
    font-size: 10px;
    margin-left: 4px;
    font-style: normal;
    color: #999;
  }
  
  .withdraw .withdraw_ul li input {
    flex: 1;
    background: transparent;
    border: none;
    text-align: right;
    color: #fff;
  }
  
  .withdraw .withdraw_btn button {
    background: linear-gradient(to right, #14136f, #4071b1);
    width: 100%;
    height: 48px;
    margin-top: 30px;
    border-radius: 40px;
    border: none;
    color: #fff;
    opacity: .9;
  }
</style>
