

<template>
  <SideBar></SideBar>
  <Container></Container>
</template>


<script setup>
import SideBar from './components/SideBar.vue';
import Container from './components/Container.vue';

</script>


<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  margin: 0;
}

html,
body>div#app {
  font-size: .16rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

ul>li {
  list-style: none;
  text-align: center;
  width: 100%;
}
</style>
