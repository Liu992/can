<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
html, body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  background-image: url("./assets/bg.jpg");
  background-size: 100%;
  color:#fff;
}
#app .header a{
  color: #fff;
}
#app .header a:link {color: #fff; text-decoration:none;}
#app .header a:visited {color: #fff;text-decoration:none;}
#app .header a:active {color: #bc2931;}
.el-message{
  top:0!important;
}
</style>
