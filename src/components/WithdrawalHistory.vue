<template>
  <div class="withdraw_history">
    <header class="header">
      <div class="header_left"></div>
      <h1>提币记录</h1>
      <div class="route">
        <router-link to="/personal">返回</router-link>
      </div>
    </header>
    <div class="section">
      <el-table style="backgroundColor:#000;" :data="withdrawList" :cell-style="cellStyle" :header-cell-style="rowClass">
        <el-table-column prop="amount" label="提币(USDT)"></el-table-column>
        <el-table-column prop="states" label="状态" :formatter="dataStatus"></el-table-column>
        <el-table-column prop="updatedAt" :formatter="dateformat" label="时间"></el-table-column>
      </el-table>
      <div class="page">
        <el-button @click="changePage('prev')">上一页</el-button>
        <el-button @click="changePage('next')">下一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../util';
  import moment from "moment";
  export default {
    name: "WithdrawHistory",
    data() {
      return {
        withdrawList: [],
        page: 0,
        newpage: 0,
      };
    },
    methods: {
      changePage(e) {
        if (e === "prev") {
          this.page--;
        } else {
          this.page++;
        }
        if (this.page < 0) {
          this.page = 0;
        }
        this.getList(this.page);
      },
      getList(page) {
        utils.getRechargeList(page)
          .then(res => {
            if (res.code === 200) {
              if (res.data.list.length > 0) {
                this.newpage = this.page;
                this.withdrawList = res.data.list;
              } else {
                this.page = this.newpage;
              }
            } else {
              this.$message.error(res.message)
            }
          })
      },
      dataStatus(val) {
        return {
          success: "成功",
          pending: "等待"
        }[val.states];
      },
      dateformat(dataStr) {
        return moment(dataStr.updatedAt).format("MM-DD HH:mm");
      },
      cellStyle({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        return "text-align:center";
      },
      rowClass({
        row,
        rowIndex
      }) {
        return "text-align:center";
      }
    },
    created() {
      this.getList(0);
    }
  }
</script>

<style>
  .withdraw_history {
    width: 100%;
    background: #040509;
  }
  
  .withdraw_history .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .withdraw_history .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .withdraw_history .header h1 {
    font-size: 20px;
  }
  
  .withdraw_history .section {
    padding: 0 12px;
  }
  
  .withdraw_history .el-table {
    margin-top: 20px;
  }
   .withdraw_history .el-table th,
  .el-table tr {
    color: #eee!important;
    background: transparent!important;
  }
  .withdraw_history .el-table th,
  .el-table tr {
    background: transparent;
  }
  
  .withdraw_history .page {
    text-align: center;
    margin-top: 20px;
  }
  
  .withdraw_history .page button {
    background: transparent;
    color: #fff;
  }
</style>