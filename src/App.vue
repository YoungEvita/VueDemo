<!--
 * @Author: Evita
 * @Date: 2021-05-24 18:17:12
 * @LastEditTime: 2021-05-25 21:23:46
 * @Description: Do not edit
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Websocket demo</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
    beforeCreate() {
        console.log("create");
        console.log(this.$ws);
        if (this.$ws.ws === null) {
            console.log("init");
            this.$ws.initWebsocket();
        }
    },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
