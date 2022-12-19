import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import route from "/src/route/route";
// 导入三方字体
import "@/assets/css/font.css";
// 导入fontawesome css样式库
import "@fortawesome/fontawesome-free/css/all.min.css";
// 导入字体
import "vfonts/Lato.css";
import "vfonts/Roboto.css";

// 导入瀑布流
import mitt from "mitt";
import { VueMasonryPlugin } from "vue-masonry/src/masonry.plugin.js";
const emitter = mitt();

// md 编辑器

var app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(route);
app.use(VueMasonryPlugin);
app.mount("#app");
