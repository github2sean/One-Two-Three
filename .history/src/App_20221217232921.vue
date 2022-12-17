<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-10 01:12:49
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 23:29:18
 * @FilePath: /vite-vue3-pro/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <div class="page">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>



<script setup>
import Header from "./components/Header.vue"
// import SideBar from './components/SideBar.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'
import Index from "./views/Index.vue";


</script>


<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.page {
  // position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.reverse-color {
  mix-blend-mode: difference;
  color: #fff;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: MiSans, Helvetica, Arial, sans-serif;
}

ul {
  padding: 0;
  margin: 0;
}

html,
body>div#app {
  font-size: .16rem;
}

ul li {
  list-style: none;
  text-align: center;
  width: 100%;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
