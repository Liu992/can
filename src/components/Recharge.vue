<template>
  <div class="recharge">
    <header class="header">
      <div class="header_left"></div>
      <h1>报单</h1>
      <div class="route">
        <router-link to="/home">返回</router-link>
      </div>
    </header>
    <div class="section">
      <ul class="recharge_ul">
        <li>
          <span>报单进度</span>
          <el-progress
            :text-inside="true"
            :stroke-width="14"
            :percentage="currentTotalRecharge"
            status="exception"
          ></el-progress>
        </li>
        <li>
          <span>币种</span>
          <b>CAN/USDT</b>
        </li>
        <li>
          <span>数量<i>可用余额：{{balance}} CAN</i></span>
          <el-input :value="number" type="number" :min="0" controls-position="right" label="请输入充值数额" @input="changeNumber"></el-input>
        </li>
        <li>
          <span>估值<i>≈ {{endPrice}} USDT</i></span>
          <span style="justify-content: flex-end;">1 CAN ≈ {{lastPrice}} USDT</span>
        </li>
      </ul>
      <div class="recharge_btn">
        <el-button @click="subRecharge">提交</el-button>
      </div>
      <p style="textAlign:center;">
        <router-link style="color:#4071b1;" to="recharge/history">报单历史</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  import {
    BigNumber
  } from 'bignumber.js';
  export default {
    name: "Recharge",
    data() {
      return {
        number: 0,
        lastPrice: 0,
        endPrice: "0.0000",
        balance:"0.0000",
        currentTotalRecharge: 0,
      }
    },
    methods: {
      changeNumber(e) {
        this.number = e.replace(/[^\d]/g, '');
        this.endPrice = new BigNumber(this.lastPrice * e).toFixed(4);
      },
      subRecharge() {
        utils.sendRecharge(this.number)
          .then(res => {
            if (res.code === 400) {
              this.$message.error(res.message);
              return false;
            }
            if (res.code === 200) {
              this.balance = new BigNumber(this.balance-this.number).toFixed(6);
              this.number = 0;
              this.$message("报单成功")
              return false;
            }
          });
      },
      getprofile() {
        utils.getProfile()
          .then(res => {
            if (res.code === 200) {
              this.balance = res.data.balance
              this.currentTotalRecharge = res.data.setting.percentage * 1;
            } else {
              this.$message.error(res.message)
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      getRechargeList () {
        utils.getRechargeList(0)
        .then(res => {
          this.lastPrice= res.data.lastPrice
        })
      }
    },
    created() {
      this.getprofile()
      this.getRechargeList()
    }
  };
</script>

<style>
  .recharge {
    width: 100%;
  }
  
  .recharge .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .recharge .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .recharge .header h1 {
    font-size: 20px;
  }
  
  .recharge .section {
    width: 100%;
    padding: 0 12px;
  }
  
  .recharge .recharge_ul {
    width: 100%;
    padding: 0 6px;
    background: #151515fc;
    margin-top: 10px;
  }
  
  .recharge .recharge_ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    width: 100%;
    height: 70px;
    align-items: center;
  }
  .recharge .recharge_ul li .el-progress{
    width: 200px;
  }
  .recharge .recharge_ul li .el-progress-bar__outer{
    background-color: #59595a;
  }
  .recharge .recharge_ul li:last-child {
    border: none;
  }
  
  .recharge .recharge_ul li b {
    font-size: 16px;
  }
  
  .recharge .recharge_ul li span {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .recharge .recharge_ul li span i {
    font-size: 10px;
    margin-left: 4px;
    font-style: normal;
    color: #999;
  }
  
  .recharge .recharge_ul li input {
    flex: 1;
    background: transparent;
    border: none;
    text-align: right;
    color: #fff;
  }
  
  .recharge .recharge_btn button {
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