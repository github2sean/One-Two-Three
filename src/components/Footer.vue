<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-16 00:50:21
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-19 23:33:29
 * @FilePath: /vite-vue3-pro/src/components/Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer">
    <div class="contont">
      <div class="friends">每一个人的生命中，都应该有一次，为了某个人而忘了自己</div>
      <div class="friends">不求有结果，不求同行，不求曾经拥有，甚至不求他知道</div>
      <div class="friends">只求在最美的年华里，遇见他 </div>
      <div class="copyright">Copyright © 2019-2022 sean. All Rights Reserved.</div>
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
  min-height: .4rem;
  background-color: #3B3E42;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .2rem 0;

  .contont {
    display: flex;
    font-size: .12rem;
    text-align: center;
    flex-direction: column;
  }

}
</style>