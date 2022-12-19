<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-18 14:03:58
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-19 18:40:32
 * @FilePath: /vite-vue3-pro/src/components/StickyNote.vue
 * @Description: 可拖拽便签
-->
<template>
  <div ref="container" class="drag-sticky" v-drag :color="color" :position="position" :order="order"
    :style="{ marginTop: margin + 'px', marginLeft: margin + 'px' }">
    <pre class="content">{{ content }}</pre>

    <span class="time">{{ time }}</span>
    <slot name="content"></slot>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import moment from 'moment';
let time = moment().format('yyyy-MM-DD HH:mm:ss')
let container = ref(null)
let props = defineProps({
  content: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#fff'
  },
  position: {
    type: Object,
    default: {
      x: 0,
      y: 0
    }
  },
  order: {
    type: Number,
    default: 100
  },
  margin: {
    type: Number,
    default: 4
  }
})
const emit = defineEmits(['get-position'])



let vDrag = {
  mounted: (el, bindings) => {
    let gap = 12 //缝隙：小于缝隙时，则吸附
    let parent = el.offsetParent

    el.onmousedown = (event) => {
      let eleEvent = event || window.event //event的兼容,同时得到clientX,的值
      let x = eleEvent.clientX - el.offsetLeft;
      let y = eleEvent.clientY - el.offsetTop;
      let left = 0;
      let top = 0;

      // let boxer = document.querySelector(".boxer")
      document.onmousemove = (eve) => {
        left = eve.clientX - x
        top = eve.clientY - y
        // 左
        if (left <= gap) {
          left = 0
        }
        //右
        if (left >= parent.offsetWidth - el.offsetWidth - gap) { //大于整个盒子的宽度-小盒子的宽度
          left = parent.offsetWidth - el.offsetWidth
        }
        // 上
        if (top <= gap) {
          top = 0
        }
        // 下
        if (top >= parent.offsetHeight - el.offsetHeight - gap) {
          top = parent.offsetHeight - el.offsetHeight
        }
        el.style.left = left + "px";
        el.style.top = top + "px";

      };
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null
      }
    }
  },
}

let getSelfPosition = () => {
  let position = { x: 0, y: 0, width: 0 }
  position.x = container.value.offsetLeft
  position.y = container.value.offsetTop
  position.width = container.value.clientWidth
  position.height = container.value.clientHeight
  position.margin = props.margin
  console.log('child', position)
  emit('get-position', { position })
}

let initContainer = () => {
  container.value.style.left = props.position.x + 'px';
  container.value.style.top = props.position.y + 'px';
  container.value.style.zIndex = props.order;
  console.log('init', props)
}
onMounted(() => {
  // initContainer()
  // getSelfPosition()
})
</script>
<style scoped lang="scss">
.drag-sticky {
  position: absolute;
  // background-image: url('/sticky.png');
  // background-size: 100% 100%;
  background-color: rgba($color: #54BB8E, $alpha: .9);
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: .16rem;
  color: #fff;
  cursor: move;
  padding: .13rem .15rem;
  border-radius: .06rem;
  gap: .03rem;
  // margin-left: .04rem;
  // margin-top: .04rem;


  .content {
    max-height: 2.5rem;
    // text-align: center;
    overflow: hidden;
    word-wrap: break-word;
    word-break: normal;
    overflow: hidden;


    &::after {
      content: "";
      clear: both;
      display: block;
    }
  }

  .time {
    font-size: .12rem;
    text-align: right;
    width: 100%;
    transform: scale(.8);
  }
}
</style>