<template>
  <div class="invite">
    <header class="header">
      <div class="header_left"></div>
      <h1>邀请好友</h1>
      <div class="route">
        <router-link to="/personal">返回</router-link>
      </div>
    </header>
    <div class="invite_content">
      <div style="font-size:24px;color:rgb(249, 209, 154);font-weight:600;">
        CAN全球增值计划
      </div>
      <div class="qr_box">
        <div id="qrcode"></div>
        <b class="txt">邀请码：{{code}}</b>
        <i class="iconfont icon-yonghu"></i>
      </div>
      <div class="invite_tip">
        长按屏幕保存邀请码
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  import QRCode from 'qrcodejs2'
  export default {
    name: "Invite",
    data() {
      return {
        code: ""
      }
    },
    methods: {
      qrcode(code) {
        let qrcode = new QRCode('qrcode', {
          width: 140,
          height: 140, // 高度  
          text: window.location.origin + "/#/register/" + code// 二维码内容  
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
          // background: '#f0f'  
          // foreground: '#ff0'  
        })
      },
      getProfile() {
        utils.getProfile()
          .then(res => {
            if (res.code === 200) {
              this.code = res.data.inviteCode
              this.qrcode(res.data.inviteCode)
            } else {
              this.$message.error(res.message)
            }
          })
      }
    },
    mounted() {
      this.getProfile()
    }
  }
</script>

<style scoped>
  .invite {
    width: 100%;
    height: 100%;
    background-image: url("../assets/invite1.jpg");
    background-size: 100% 100%;
  }
  
  .invite .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .invite .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .invite .header h1 {
    font-size: 20px;
  }
  .invite .invite_content {
    width: 100%;
    margin-top: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .invite .invite_content .txt {
    margin-top: 10px;
  }
  
  .invite .invite_content span {}
  
  .invite .invite_content .qr_box {
    padding:30px 30px 10px 30px;
    background: #fff;
    width: 200px;
    color:#000;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    margin-top:40px;
  }
  .invite .invite_content .iconfont{
    font-size: 30px;
    color:#ccc;
  }
  .invite_tip{
    font-weight: 600;
    margin-top: 40px;
    color: #ffe0c3;
  }
</style>