<template>
  <div class="address">
    <header class="header">
      <div class="header_left"></div>
      <h1>收益</h1>
      <div class="route">
        <router-link to="/home">返回</router-link>
      </div>
    </header>
    <div class="section">
      <div class="address_qr">
        <div class="qr_top">
          <span>币种</span>
          <b>USDT</b>
        </div>
        <div class="qr_content">
          <div class="qr_box">
            <div id="qrcode"></div>
          </div>
          <span class="txt">收款地址：{{currentWalletAddress}}</span>
        </div>
      </div>
    </div>
    <div class="address_btn">
      <el-button type="primary" v-clipboard:copy="currentWalletAddress" v-clipboard:success="onCopy" v-clipboard:error="onError">复制充值收款地址</el-button>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  import QRCode from 'qrcodejs2'
  export default {
    name: "Address",
    data() {
      return {
        currentWalletAddress: "1234567890"
      }
    },
    mounted() {
      this.getprofile()
      this.qrcode()
    },
    methods: {
      qrcode() {
        let qrcode = new QRCode('qrcode', {
          width: 180,
          height: 180, // 高度  
          text: this.currentWalletAddress // 二维码内容  
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
          // background: '#f0f'  
          // foreground: '#ff0'  
        })
      },
      onCopy(e) {
        // console.log(e);
      },
      // 复制失败
      onError(e) {
        this.$message.error("失败");
      },
      getprofile() {
        utils.getProfile()
          .then(res => {
            if (res.code === 200) {
              this.currentWalletAddress = res.data.currentWalletAddress;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
  };
</script>

<style scoped>
  .address {
    width: 100%;
  }
  
  .address .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .address .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .address .header h1 {
    font-size: 20px;
  }
  
  .address .section {
    width: 100%;
    padding: 0 12px;
  }
  
  .address .section .address_qr {
    background: #151515fc;
    margin-top: 10px;
    padding: 20px 12px 12px 12px;
  }
  
  .address_qr .qr_top {
    display: flex;
    justify-content: space-between;
  }
  
  .address_qr .qr_top b {
    font-size: 18px;
  }
  
  .address_qr .qr_content {
    width: 100%;
    margin-top: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .address_qr .qr_content .txt {
    margin-top: 20px;
  }
  
  .address_qr .qr_content span {}
  
  .address_qr .qr_content .qr_box {
    padding: 10px;
    background: #fff;
    width: 200px;
    height: 200px;
  }
  
  .address_btn {
    width: 100%;
    margin-top: 20px;
    padding: 0 12px;
  }
  
  .address_btn button {
    background: linear-gradient(to right, #14136f, #4071b1);
    width: 100%;
    height: 48px;
    border-radius: 40px;
    border: none;
    color: #fff;
    opacity: .9;
  }
</style>