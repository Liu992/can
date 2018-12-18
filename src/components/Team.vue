<template>
  <div class="team">
    <header class="header">
      <div class="header_left"></div>
      <h1>收益记录</h1>
      <div class="route">
        <router-link to="/personal">返回</router-link>
      </div>
    </header>
    <div class="section">
      <div class="team_list">
        <h2 class="h2_title">我的团队：</h2>
        <div class="list_content list_tree" style="padding-left:1rem;">
          <div v-if="parentMobile" style="margin-bottom:1rem;">
            <h3 class="h3_title">
              <span>我的上级：</span>
            </h3>
            <div v-if="parentMobile">
              <span style="display:block;padding-left:24px;">{{parentMobile}}</span>
            </div>
          </div>
          <div style="margin-bottom:1rem;">
            <h3 class="h3_title">
              <span>我的账户：</span>
            </h3>
            <div>
              <span style="display: block;padding-left:24px;">{{mobile}}</span>
            </div>
          </div>
  
          <h3 class="h3_title">
            <span>我的下级：</span>
          </h3>
          <div v-if="!subdata.length">
            <span style="display: block;padding-left:24px;">无</span>
          </div>
          <el-tree :data="subdata" :props="defaultProps" v-if="subdata.length"></el-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../util';
  export default {
    name:"Team",
    data () {
      return {
        mobile:"",
        parentMobile:"",
        subdata: [],
        defaultProps: {
          children: "subs",
          label: "mobile"
        }
      }
    },
    created(){
      this.getPorfile()
    },
    methods: {
      getPorfile () {
        utils.getProfile()
        .then(res => {
          this.mobile = res.data.mobile;
          this.parentMobile = res.data.parentMobile;
          this.subdata = this.filterArray(res.data.sub.nodes, res.data.id);
        })
      },
      filterArray(data, parentId) {
      let vm = this;
      var tree = [];
      var temp;
      for (var i = 0; i < data.length; i++) {
        if (data[i].parentId == parentId) {
          var obj = data[i];
          temp = this.filterArray(data, data[i].id);
          if (temp.length > 0) {
            obj.subs = temp;
          }
          tree.push(obj);
        }
      }
      return tree;
    },
    }
  }
</script>

<style>
  .team {
    width: 100%;
    /* background: #040509; */
  }
  
  .team .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: center;
  }
  
  .team .header .header_left,
  .route a {
    display: block;
    width: 40px;
    color: #fff;
  }
  
  .team .header h1 {
    font-size: 20px;
  }
  .team .section{
    padding: 0 12px;
  }
  .team .section .el-tree{
    background: transparent;
    color:#fff;
  }
  .team .section .el-tree-node__content{
    background: transparent;
  }
  .team .section .el-tree-node__content:hover{
    background: transparent;
  }
  .team_list {
    margin-top: 1em;
  }
  
  .team_list .h2_title {
    margin-bottom: 0.8em;
    font-size: 14px;
  }
  
  .team_list .list_tree {
    display: block !important;
  }
  
  .team_list .my_lsit {
    display: flex;
  }
  
  .team_list .list_content {
    width: 100%;
    display: flex;
  }
  
  .team_list .list_content .el-input__inner {
    color: #f56c6c;
  }
  
  .team_list .el-input.is-disabled .el-input__inner {
    color: #333 !important;
    /* background: transparent; */
  }
  
  .team_list .list_content button a {
    color: #fff;
  }
  
  .team_list .list_content .el-tree {
    /* width: 100%; */
  }
</style>