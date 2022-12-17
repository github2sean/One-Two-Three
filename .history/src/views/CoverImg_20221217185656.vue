<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-16 00:13:20
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-17 18:56:53
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

      .write {
        left: 100%;
        transform: translateX(-100%);
        // margin-top: .1rem;
        animation: fade-in 1s;
        border: none;
      }

    }


  }



}

.fade-in-enter-active {
  animation: fade-in .5s;
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