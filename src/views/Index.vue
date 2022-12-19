<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-16 00:13:20
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-19 18:55:40
 * @FilePath: /vite-vue3-pro/src/views/Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cover-img">
    <div class="pannel">
      <span class="sketch-pannel">
        <div class="introduction">
          {{ introduction }}
        </div>
        <div class="actor">{{ actor }}</div>
      </span>
      <transition name="fade-in" mode="out-in">
        <div class="editor-pannel" v-show="loadedWirte">
          <textarea ref="textarea" show-count placeholder="写点什么..." class="editor" v-model="sketch"
            type="textarea"></textarea>
          <div class="operate">
            <span class="left-tools">
              <svg class="title" @click.native="addTitle" width="18px" height="18px" viewBox="0 0 18 18"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z">
                </path>
              </svg>
              <svg class="ul" @click.native="addUl" width="18px" height="18px" viewBox="0 0 18 18" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                </path>
              </svg>
              <svg class="ol" @click.native="addOl" width="18px" height="18px" viewBox="0 0 18 18" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z">
                </path>
                <path
                  d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z">
                </path>
              </svg>
              <svg class="bold" @click.native="addBold" width="18px" height="18px" viewBox="0 0 18 18"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z">
                </path>
              </svg>
            </span>
            <span class="right-btn">
              <n-popover trigger="hover" placement="bottom">
                <template #trigger>
                  <n-button size="tiny" :disabled="writeBtn.disabled" :color="writeBtn.color" strong>
                    <svg @click.native="write" class="write" :width="writeBtn.width" :height="writeBtn.height"
                      viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.0838 19.4615L30.4615 13.1154L16.0838 6.76923L16.0769 11.7051L26.3516 13.1154L16.0769 14.5256L16.0838 19.4615Z"
                        fill="#fff">
                      </path>
                    </svg>

                  </n-button>
                </template>
                <span>shift+enter</span>
              </n-popover>

            </span>
          </div>
        </div>
      </transition>
    </div>

    <!-- <div class="sticky" ref="stickyBox">
      <StickyNoteVue v-for="(item, index) in stickys" :key="item.order" :content="item.content"
        @getPosition="getChildPosition" :position="item.position" :order="item.order"></StickyNoteVue>
    </div> -->
    <div class="sticky">
      <div :fit-width="true" :horizontal-order="true" ref="stickyBox" v-masonry transition-duration="0.3s"
        item-selector=".item" stagger="0.03s">
        <StickyNoteVue :content="item.content" v-masonry-tile class="item" v-for="(item, index) in stickys">
          <!-- block item markup -->
        </StickyNoteVue>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, onMounted, reactive, watch, onUnmounted } from 'vue'
import { useMessage } from "naive-ui";
import axios from 'axios'
import _ from "lodash"
import moment from "moment"
import StickyNoteVue from '../components/StickyNote.vue';
let loadedWirte = ref(false)
let introduction = ref("")
let textarea = ref("")
let actor = ref("")
let sketch = ref("")
let stickys = ref([])
let stickyBox = ref()
let message = useMessage()
let writeBtn = reactive({
  color: '#CECECE',
  disabled: true,
  height: 28,
  width: 30

})

let stickyList = stickys.value

let order = 0
let margin = 10

let childPo
let getChildPosition = (val) => {
  childPo = val

}

let addSticky = (text) => {
  console.log(stickyBox)

  let stickyBoxWidth = stickyBox.value.clientWidth
  let stickyBoxHeight = stickyBox.value.clientHeight
  order += 100
  let x = 0, y = 0
  console.log('fa', childPo, stickyList)
  // if (stickyList.length > 0) {
  //   x = childPo.position.x + childPo.position.width
  //   y = childPo.position.y - childPo.position.margin
  //   if (x + childPo.position.width >= stickyBoxWidth) {
  //     x = 0
  //     y = childPo.position.y + childPo.position.height
  //   }
  //   if (y + childPo.position.height > stickyBoxHeight) {
  //     message.warning('装不下啦^_^')
  //     return
  //   }
  // }
  // let sticky = { content: text, position: { x: x, y: y }, order: order }
  let sticky = { content: text, order: order }
  stickyList.push(sticky)
}

let autoWriting = (obj, text, cursor = ['|'], desc = false, speed = 150) => {
  let count = 0
  text = [...text]
  speed = desc ? 100 : speed
  let res = new Promise((resolve, reject) => {
    let ended = false
    try {
      let len = text.length
      let interval = setInterval(() => {
        // debugger
        if (!desc) {
          cursor.splice(count, 0, text[count])
          obj.value = [...cursor].join("")
          count++
          if (count >= len) {
            clearInterval(interval)
            obj.value = obj.value.slice(0, len)
            ended = true
            resolve(ended)
          }
        } else {
          speed = 0
          if (len > 1) {
            let back = text.slice(0, len - 2);
            obj.value = back.join("") + "|"
            len--
          } else {
            obj.value = ''
            clearInterval(interval)
            ended = true
            resolve(ended)
          }

        }
      }, speed)
    } catch (error) {
      console.log(error)
      ended = true
      reject(ended)
    }

  });
  return res
}

let getHitokoto = () => {
  return axios.get('https://v1.hitokoto.cn?min_length=20')
    .then(({ data }) => {
      console.log("getHitokoto", data)
      return data
    })
    .catch((res) => {
      console.error(res)
      return res
    }
    )
}

let clearWrited = () => {
  return autoWriting(actor, actor.value, ['|'], true).then
    (() => autoWriting(introduction, introduction.value, ['|'], true))
}

let write = () => {
  let text = sketch.value
  if (text) {
    console.log("sketch", sketch)

    // clearWrited().then(() => {
    //   autoWriting(introduction, text).then(() => { autoWriting(actor, moment().format('yyyy-MM-DD HH:mm:ss')) })
    // })
    addSticky(text)
    // sketch.value = ''
  } else {
    message.error('至少写点什么吧...')
  }

}

let addTitle = () => {
  let el = textarea.value
  console.log(el.selectionStart)
}

let addUl = () => {
  let el = textarea.value
  console.log(el)
}

let addOl = () => {
  let el = textarea.value
  console.log(el)
}

let addBold = () => {
  let el = textarea.value
  console.log(el)
}

let writingAnimal = (isLoop = false) => {
  let end = false
  getHitokoto().then((res) => {
    console.log('then', res)
    autoWriting(introduction, res.hitokoto).then(
      () => {
        let content = '《' + res.from + '》' + (res.from_who ? res.from_who : '佚名')
        console.log('actor', content)
        autoWriting(actor, content).then(() => {
          loadedWirte.value = true
        })
      }
    )
  }).catch((error) => {
    console.log("error", error)
    autoWriting(introduction, '人生难免会犯错^_^大不了再来一次')
    end = true
  })
  return end
}

watch(sketch, (newValue, oldValue) => {
  if (newValue.length > 0) {
    writeBtn.disabled = false
    writeBtn.color = "#54BB8E"
  } else {
    writeBtn.disabled = true
    writeBtn.color = "#CECECE"
  }
})

let listenKeyCode = (target, isClear = true) => {
  //阻止换行
  let defaultFun = (event) => {

    event = (event) ? event : ((window.event) ? window.event : "");
    let keyCode = event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode);
    if (keyCode == 13 && event.shiftKey) {
      event.preventDefault();
      if (sketch.value.length > 0) {
        write()
      }
    }
  }
  if (target) target.value.addEventListener('keydown', isClear ? defaultFun : null)
}

onMounted(() => {
  writingAnimal()
  listenKeyCode(textarea)
})

onUnmounted(() => {
  listenKeyCode(textarea, false)
})


</script>
<style scoped lang="scss">
.cover-img {
  height: 100vh;
  width: 100vw;
  background-image: url("/bk_0.png");
  background-size: cover;


  &::after {
    content: "\f103";
    font-size: .36rem;
    font-family: fontAwesome;
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    animation: infinite moveDown .9s alternate-reverse;
    cursor: pointer;
  }

  .pannel {
    box-sizing: border-box;
    width: 3rem;
    overflow: hidden;
    position: absolute;
    left: 1rem;
    top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: .15rem;
    padding: 0 .1rem;

    .sketch-pannel {
      min-height: 1.25rem;

      .introduction {
        color: #fff;
        text-align: center;
        font-size: .16rem;
        width: 100%;
        padding: .1rem;
      }

      .actor {
        color: #fff;
        padding: .1rem;
        text-align: right;
        font-size: .12rem;
        width: 100%;

        &::after {
          content: '';
          clear: both;
          display: block;
        }
      }
    }


    .editor-pannel {

      .editor {
        width: 100%;
        // max-height: 2.2rem;
        min-height: 1.2rem;
        border: none;
        padding: .1rem;
        border-top-left-radius: .06rem;
        border-top-right-radius: .06rem;
        outline: none;
        color: #757575;
        resize: none;
        font-size: .14rem;
        display: block;
        background-color: #EFEFEF;

        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;

        &::-webkit-scrollbar {
          width: 0 !important
        }

        &::placeholder {
          color: #757575;
        }

        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: .02rem;
          width: .2rem;
          height: .03rem;
          color: #fff;
        }
      }

      .operate {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom-left-radius: .06rem;
        border-bottom-right-radius: .06rem;
        padding: .04rem;
        background-color: #EFEFEF;
        color: #757575;

        span {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .left-tools {
          flex: 1;
          justify-content: space-around;
        }

        .right-btn {
          flex: 2;
          justify-content: end;
        }
      }
    }
  }



  .sticky {
    background-color: rgba(aqua, 0.3);
    position: absolute;
    right: .2rem;
    top: .5rem;
    width: 5.8rem;
    height: 5rem;
    display: flex;
    gap: .05rem;
  }
}

.fade-in-enter-active {
  animation: fade-in .8s;
}

.fade-in-leave-active {
  animation: fade-in .5s reverse;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes moveDown {
  0% {
    bottom: 20px;
    color: rgba($color: #fff, $alpha: 1);
  }

  100% {
    bottom: 0;
    color: rgba($color: #fff, $alpha: 0.5);
    font-size: .30rem;
  }
}
</style>