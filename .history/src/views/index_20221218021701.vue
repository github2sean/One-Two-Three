<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-16 00:13:20
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-18 02:17:01
 * @FilePath: /vite-vue3-pro/src/views/Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cover-img">
    <div class="pannel">
      <div class="introduction">
        {{ introduction }}
      </div>
      <div class="actor">{{ actor }}</div>
      
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
let sketch = ref("")


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
  console.log("sketch", sketch)
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
    box-sizing: border-box;
    width: 3rem;
    overflow: hidden;
    position: absolute;
    left: 1rem;
    top: 20%;
    transform: translateY(-50%);
    // display: flex;
    // flex-direction: column;
    // justify-content: start;
    // gap: .15rem;
    padding: 0 .1rem;
    // background-color: bisque;
    // transition: all 2s;


    .introduction {
      color: #fff;
      text-align: center;
      font-size: .14rem;
      width: 100%;
      padding: 0 .1rem;
    }

    .actor {
      padding: 0 .1rem;
      text-align: right;
      font-size: .12rem;
      width: 100%;

      &::after {
        content: '';
        clear: both;
        display: block;
      }
    }

    .editor {
      width: 100%;
      height: 2rem;
      background-color: rgba(235, 235, 235, .5);
      border: none;
      border-bottom: 0px rgba(235, 235, 235, .5) solid;
      padding: .1rem;
      border-top-left-radius: .06rem;
      border-top-right-radius: .06rem;
      outline: none;
      color: rgb(250, 250, 250);
      word-wrap: break-word;
      resize: none;
      font-size: .14rem;
      display: block;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;

      &::-webkit-scrollbar {
        width: 0 !important
      }

      &::placeholder {
        color: #ccc;
      }
    }

    .operate {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgba(235, 235, 235, .5);
      border-bottom-left-radius: .06rem;
      border-bottom-right-radius: .06rem;
      color: black;
      padding: .04rem;


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

      .write {
        right: 0;
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