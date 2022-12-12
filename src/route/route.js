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
    component: Index,
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
