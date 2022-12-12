import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import route from "/src/route/route";
// 导入fontawesome css样式库
import "@fortawesome/fontawesome-free/css/all.min.css";
// 导入字体
import "vfonts/Lato.css";

// md 编辑器
import VueMarkdownEditor from "@kangc/v-md-editor";
// import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// 这是预览时引用的
// import VMdPreview from "@kangc/v-md-editor/lib/preview";
// import "@kangc/v-md-editor/lib/style/preview.css";

// highlightjs 代码高亮 导入所有 推荐按需导入
import hljs from "highlight.js";

// 按需引入语言包
// import json from 'highlight.js/lib/languages/json';
// hljs.registerLanguage('json', json);

//预览的主题
// VMdPreview.use(vuepressTheme, {
//   Hljs: hljs,
// });

// prism 高亮代码
import Prism from "prismjs";
//编辑器主题
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

var app = createApp(App);
app.use(route);
// app.use(VMdPreview);
app.use(VueMarkdownEditor);
app.mount("#app");
