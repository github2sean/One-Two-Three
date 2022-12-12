<template>
  <div class="container">
    {{ show }}
    <v-md-editor v-model="text" height="400px" width="800px">
    </v-md-editor>
  </div>
</template>
<script setup>

import { ref } from "vue"
let text = ref("# 你啊哈")
let show = ref("markdown")


</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}

.v-md-editor {
  width: 600px;
}
</style>