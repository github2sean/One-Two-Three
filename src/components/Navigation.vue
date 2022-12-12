<template>
  <div class="container">

    <div class="left">
      <div class="icon"><img src="/vite.svg"></div>
      <div class="item">
        <ul>
          <li @hover="changeColor">
            <i class="fa-solid fa-house"></i>
          </li>
          <li @hover="changeColor">
            <i class="fa-solid fa-book"></i>
          </li>
          <li><i class="fa-solid fa-user"></i></li>
        </ul>
      </div>
      <span @mousedown="dragFun" class="tog" @click="toggelBar"></span>
    </div>
    <div class="right">
      <div class="card">
        <div class="left-img"></div>
        <div class="right-content">
          <div class="titel">center-card</div>
          <div class="content"></div>
        </div>
        <n-button round color="#8a2be2" class="previous">上一条</n-button>
        <n-button round color="#8a2be2" class="next">下一条</n-button>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue'
import { gsap } from 'gsap'

let hoverColor = ref("#fff")
let fontSize = ref("24")
let isShowLeft = ref(true)


let dragFun = (content) => {
  let tar = content.currentTarget;
  let clientY = content.clientY;

  var top = tar.offsetTop;
  var height = tar.offsetHeight;
  let moveY = clientY - top;

  let cacheY = clientY;
  document.onmousemove = (doc) => {
    if (doc) {
      console.log("onmousemove", doc)
      let isUp = doc.clientY - cacheY < 0;
      cacheY = doc.clientY;
      let moveTo = cacheY - moveY;
      var nowTop = tar.offsetTop;
      let containerOffset = height / 2;
      console.log("now:", nowTop, "isup", isUp, cacheY, clientY, containerOffset)
      //向上移动
      if (isUp > 0 && nowTop > 0 && nowTop >= containerOffset) {
        tar.style.top = moveTo / 100 + "rem";
      } else if (!isUp && nowTop < document.documentElement.clientHeight && nowTop <= document.documentElement.clientHeight - containerOffset) {//向下移动
        tar.style.top = moveTo / 100 + "rem";
      }
    }


  }
  //清除事件
  document.onmouseup = function () {
    document.onmousemove = function () { }
  };

}

let changeColor = () => { hoverColor = "#000" }

// let onLeave = (el, done) => {
//   let right = document.querySelector(".right")
//   right.style.width = window.innerWidth - el.clientWidth + 'px'
//   console.log(window.innerWidth, el.clientWidth, right.style.width);
// }


let toggelBar = (obj) => {
  let el = document.querySelector(".left")
  obj.target.classList.toggle("active")
  console.log()
  if (isShowLeft.value) {
    gsap.to(el, {
      left: -el.clientWidth,
      duration: .5
    })
  } else {
    gsap.to(el, {
      left: 0,
      duration: .5
    })
  }
  isShowLeft.value = !isShowLeft.value

}

</script>



<style scoped lang="scss">
.fade-enter-active {
  animation: inout .5s forwards;
}

.fade-leave-active {
  animation: inout .5s reverse forwards;
}

@keyframes inout {
  0% {
    transform: translateX(-.5rem);
  }

  100% {
    transform: translateX(0);
  }
}

.container {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: aqua;
  margin: 0;
  padding: 0;
  font-family: sans-serif;


  .left {
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
    width: 5%;
    height: 100%;
    background-color: blueviolet;
    float: left;
    position: relative;

    .tog {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateX(100%);
      width: .25rem;
      height: .25rem;
      background: red;
      cursor: pointer;
      display: block;
      // border: 5px solid blueviolet;
      // border-radius: 0 0 50% 50% / 50% 50% 0 0;

      &::before {
        margin: 0;
        padding: 0;
        content: '\f053';
        font-family: fontAwesome;
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: .25rem;
        text-align: center;
        color: #fff;
        background-color: blueviolet;
      }

      &.active::before {
        content: '\f054';
      }

      span {
        background-color: antiquewhite;
      }
    }

    .icon {
      // width: 100%;
      // height: auto;
      padding: .07rem;
      text-align: center;
      border-radius: 50%;
      overflow: hidden;
      // background-color: red;
      display: flex;
      flex-direction: column;
      // border: #fff solid .02rem;
    }



    .item {
      position: relative;
      color: #fff;
      top: 30%;
      transform: translateY(-50%);

      li {
        margin-bottom: .2rem;
      }

      li:hover {
        // background-color: #fff !important;
        cursor: pointer;
        color: #000;

        i {
          transition: scale(10px, 10px) 1s;
        }
      }


    }
  }

  .right {
    float: left;
    width: 95%;
    height: 100%;
    background-color: aquamarine;
    // background-image: url(/bg.jpg);
    background-size: cover;
    position: relative;

    .card {
      top: 50%;
      // left: 50%;
      margin: auto;
      width: 60%;
      height: 2.5rem;
      position: relative;
      transform: translateY(-50%);
      background-color: #fff;
      border-radius: .2rem;

      .previous {
        position: absolute;
        bottom: -0.5rem;
        left: .2rem;
      }

      .next {
        position: absolute;
        bottom: -0.5rem;
        right: .2rem;
      }
    }
  }





}
</style>