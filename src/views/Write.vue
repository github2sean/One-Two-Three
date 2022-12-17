<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-12 20:34:42
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 08:01:57
 * @FilePath: /vite-vue3-pro/src/views/write.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bk-img">
    <div class="left">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
    <div class="center">
      <Vditor id="vditor"></Vditor>
    </div>
  </div>
</template>
<script setup>
import Vditor from "../components/Vditor.vue";
import { ref, onMounted } from "vue"
let show = ref("markdown")
onMounted(() => {

})

</script>
<style scoped lang="scss">
.bk-img {
  width: 100vw;
  height: 100vh;
  background-image: url("/bk.png");
  background-size: cover;

  .left {
    width: 15%;
    height: 4rem;
    background-color: aqua;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .center {
    position: relative;
    width: 80%;
    height: 80%;
    // right: 0;
    top: 50%;
    // right: 0;
    transform: translateY(-50%);
  }
}
</style>