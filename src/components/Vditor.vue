<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-12 20:34:42
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 16:15:57
 * @FilePath: /vite-vue3-pro/src/views/write.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="v-vditor" :id="id"></div>
</template>
<script setup>
import Vditor from "vditor";
import "vditor/dist/index.css";
import "../assets/css/conflict.css"
import { ref, onMounted } from "vue"
const contentEditor = ref("");
const props = defineProps({
  id: String,
  height: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '100%'
  },
  mode: {
    type: String,
    default: 'wysiwyg'// 可选模式：sv, ir, wysiwyg
  },
  toolbarConfig: {
    type: Object,
    default: { pin: true, }
  },
  cache: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})
onMounted(() => {
  contentEditor.value = new Vditor(props.id, {
    height: props.height,
    width: props.width,
    mode: props.mode,
    toolbarConfig: {
      pin: true,
    },
    cache: {
      enable: props.cache,
    },
    after: () => {
      contentEditor.value.setValue(props.text);
    },
  });
})

</script>
<style scoped>

</style>