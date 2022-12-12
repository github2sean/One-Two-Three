import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": ["useButton"],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  //启动服务配置
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    https: false,
    proxy: {},
  },
});
