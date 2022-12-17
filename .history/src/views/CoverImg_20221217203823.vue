<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-16 00:13:20
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 20:38:23
 * @FilePath: /vite-vue3-pro/src/views/Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cover-img">
    <div class="pannel">
      <div class="introduction">
        {{ introduction }}<br /><span class="actor">{{ actor }}</span>
      </div>
      <transition name="fade-in" mode="out-in">
        <span v-if="loadedWirte">
          <n-input show-count class="editor" v-model="sketch" type="textarea" placeholder="写点什么..." />

          <div class="operate">
            <svg data-v-5601c235="" width="18px" height="18px" viewBox="0 0 18 18" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path data-v-5601c235=""
                d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z">
              </path>
            </svg>
            <n-button @click="write" type="primary" class="write">
              <i class="fa fa-pencil fa-fw"></i>
            </n-button>
          </div>
        </span>
      </transition>


    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import _ from "lodash"
let loadedWirte = ref(false)
let introduction = ref("")
let actor = ref("")
let writeStatus = true
let sketch = ref("")

let toogleFun = () => {
  if (writeStatus) {

  } else {
    writingAnimal()
  }

}



// let fadeIn = () => {
//   let writeBtn = document.querySelector(".write")
//   writeBtn.style.display = 'block'
// }

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
    (() => autoWriting(introduction, introduction.value, ['|'], true).then
      (() => writingAnimal()))
}

let write = () => {
  let text = sketch.value
  clearWrited().then(() => {
    autoWriting(introduction, text).then(() => { autoWriting(actor, 'youself') })
  })
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


onMounted(() => {
  writingAnimal()
})


</script>
<style scoped lang="scss">
.n-input.n-input--textarea.n-input--resizable .n-input-wrapper {
  resize: none;
  min-height: var(--n-height);
}

.n-input__border {
  border-bottom: none;
}

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
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    border-radius: .05rem;
    padding: 0 .1rem;



    .introduction {
      box-sizing: border-box;
      color: #fff;
      text-align: center;
      font-size: .16rem;
      // background-color: aqua;
      width: 100%;
      height: auto;
      padding: .2rem;

      .actor {
        font-size: .12rem;
        position: absolute;
        right: 10%;
        margin: .2rem;
      }
    }

    .editor {
      width: 100%;
      height: 200px;
      background-color: rgb(235, 235, 235);
      margin-top: .4rem;
      padding: .1rem;
      border-top-left-radius: .06rem;
      border-top-right-radius: .06rem;
      border-bottom: none;

      .n-input__textarea-el {
        resize: none
      }
    }

    .operate {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgb(235, 235, 235);
      border-bottom-left-radius: .06rem;
      border-bottom-right-radius: .06rem;
      overflow: hidden;
      margin: 0;
      margin-top: -10px;



      .write {
        left: 100%;
        transform: translateX(-100%);
        border: none;
      }

    }


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