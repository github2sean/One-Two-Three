<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-16 00:50:21
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 12:16:09
 * @FilePath: /vite-vue3-pro/src/components/Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer">
    <div class="contont">
      <div class="friends">dream something write something.</div>
      <div class="copyright">©2019-2022 a free man.</div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.footer {
  // position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .4rem;
  background-color: #648cb4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 .1rem;

  .contont {
    display: flex;
    font-size: .12rem;
    text-align: center;
    flex-direction: column;
  }

}
</style>