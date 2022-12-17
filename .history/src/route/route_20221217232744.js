/*
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-12 21:02:51
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 23:27:35
 * @FilePath: /vite-vue3-pro/src/route/route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Write from "@/views/Write.vue";
const routes = [
  {
    path: "/",
    component: Index,
    name: "index",
  },
  {
    path: "/index",
    component: CoIndexverImg,
  },
  {
    path: "/write",
    component: Write,
    name: "write",
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 和 hash 两种路由方式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
