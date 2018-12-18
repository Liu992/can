<template>
  <div class="earning_history">
    <header class="header">
      <div class="header_left"></div>
      <h1>收益记录</h1>
      <div class="route">
        <router-link to="/personal">返回</router-link>
      </div>
    </header>
    <div class="section">
      <el-table style="backgroundColor:#000;" :data="earningList" :cell-style="cellStyle" :header-cell-style="rowClass">
        <el-table-column prop="amount" label="收益(USDT)"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
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
  import utils from '../util'
  import moment from "moment";
  export default {
    name: "EarningHistory",
    data() {
      return {
        earningList: [],
        page: 0,
        newpage: 0
      }
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
        utils.getEarningHistory(page)
          .then(res => {
            if (res.code === 200) {
              if (res.data.list.length > 0) {
                this.newpage = this.page;
                this.earningList = res.data.list;
              } else {
                this.page = this.newpage;
              }
            } else {
              this.$message.error(res.message)
            }
          })
          .catch(err => {
            console.log(err);
          });
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
      this.getList(0)
    }
  };
</script>

<style>
  .earning_history {
    width: 100%;
    background: #040509;
  }
  
  .earning_history .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .earning_history .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .earning_history .header h1 {
    font-size: 20px;
  }
  
  .earning_history .section {
    padding: 0 12px;
  }
  
  .earning_history .el-table {
    margin-top: 20px;
  }
  .earning_history .el-table th, .el-table tr{
    color: #eee!important;
    background: transparent!important;
  }
  .earning_history .el-table th,
  .el-table tr {
    background: transparent;
  }
  
  .earning_history .page {
    text-align: center;
    margin-top: 20px;
  }
  
  .earning_history .page button {
    background: transparent;
    color: #fff;
  }
</style>