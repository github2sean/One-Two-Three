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

// md 编辑器

var app = createApp(App);
app.use(route);
app.mount("#app");
