<!--
 * @Author: sean seanzq0331@163.com
 * @Date: 2022-12-14 18:33:19
 * @LastEditors: sean seanzq0331@163.com
 * @LastEditTime: 2022-12-20 00:34:39
 * @FilePath: /vite-vue3-pro/src/components/Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <transition name="fade" mode="out-in">
    <div class="nav" v-show="show && isShow" ref="nav">
      <div class="left">
        <div class="logo">
          <img src="/one_two_three.png" alt="" />
          <n-divider class="divid" vertical />
          <div class="title">二三事</div>
        </div>
      </div>
      <div class="center reverse-color">
        <ul class="items">
          <router-link to="/">
            <li @mouseleave="active(false, $event)" @mouseenter="active(true, $event)"><i class="fa fa-home"></i>主页
            </li>
          </router-link>
          <router-link to="/recomment">
            <li @mouseleave="active(false, $event)" @mouseenter="active(true, $event)"><i class="fa fa-star"></i>推荐</li>
          </router-link>
          <router-link to="/write">
            <li @mouseleave="active(false, $event)" @mouseenter="active(true, $event)"><i class="fa fa-book"></i>笔记</li>
          </router-link>
          <router-link to="/snippet">
            <li @mouseleave="active(false, $event)" @mouseenter="active(true, $event)"><i
                class="fa fa-list-alt"></i>snippet
            </li>
          </router-link>
          <router-link to="/userInfo">
            <li @mouseleave="active(false, $event)" @mouseenter="active(true, $event)"><i
                class="fa fa-user-circle"></i>我的
            </li>
          </router-link>
        </ul>
      </div>
      <div class="right">
        <div class="search-container">
          <div class="beauty-input">
            <i class="icon-search fa fa-search fw"></i>
            <input class="search" type="text" placeholder="search something...">
            <i class="icon-search fa fa-reply fw"></i>
          </div>
        </div>
      </div>
      <slot></slot>

    </div>
  </transition>

</template>
<script setup>
import { ref, onMounted } from 'vue'
let nav = ref(null)
let show = ref(true)
const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})
let cacheLastY = 0;
let scrollListener = () => {
  window.onscroll = () => {
    // console.log(props)
    let el = nav.value
    let navHeight = el.clientHeight;
    let topOffset = document.documentElement.scrollTop || document.body.scrollTop
    let downScroll = topOffset - cacheLastY >= 0
    cacheLastY = topOffset
    console.log("滚动距离" + topOffset, "nav", navHeight, downScroll)
    if (!downScroll && (!show.value)) {
      show.value = true
      el.style.backgroundColor = '#D9D9D8'
    } else if (downScroll && topOffset > 0) {
      show.value = false
    }
    if (topOffset == 0) {
      console.log('aaaa')
      el.style.backgroundColor = 'rgba(59,59,59, 0.8)'
    }

  }

}
let active = (active, event) => {
  let el = event.target
  if (active) {
    el.classList.add('active')
  } else {
    el.classList.remove('active')
  }
  console.log(el.classList)
}

onMounted(() => {
  scrollListener()
})

</script>

<style scoped lang="scss">
.fade-enter-active {
  animation: down .8s;
}

.fade-leave-active {
  animation: down .8s reverse;
}

@keyframes down {
  from {
    opacity: 0;
    transform: translateY(0);
    // background-color: rgba(#fff, 0.4);
  }

  to {
    opacity: 1;
    transform: translateY(100);
    // background-color: rgba(#fff, 0.4);

  }
}



.nav {
  width: 100vw;
  height: .5rem;
  // border-bottom-left-radius: .1rem;
  // border-bottom-right-radius: .1rem;
  position: fixed;

  top: 0;
  left: 0;
  display: flex;
  color: #fff;
  align-items: center;
  font-size: .14rem;
  font-weight: 50;
  transition: all .5s;
  background-color: rgba(#3B3B3B, 0.8);

  .left {
    flex-grow: 1;


    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      img {
        width: .5rem;
        object-fit: cover;
      }

      .divid {
        height: .3rem;
        background-color: #9892ff;
      }

      .title {
        padding: .05rem 0;
        writing-mode: vertical-lr;
      }
    }

  }

  .center {
    flex-grow: 8;
    display: table;
    line-height: .5rem;

    .items {
      display: flex;
      justify-content: start;
      vertical-align: middle;
      text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);

      li {
        width: auto;
        margin-left: .2rem;
        text-align: right;
        cursor: pointer;
        position: relative;

        &.active ::after {
          background-color: #fff;
        }

        i {
          margin-right: .05rem;
        }

        ::after {
          position: absolute;
          bottom: .1rem;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 3px;
          content: '';
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          -ms-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
      }


    }
  }

  .right {
    flex-grow: 1;
    text-align: center;
  }



  .search-container {
    display: flex;
    justify-content: start;


    i {
      color: #005;
    }

    .beauty-input {
      padding: 0 .04rem;
      position: relative;
      font-size: 14px;
      display: inline-block;
      background: #efefef;
      border-radius: 8px;
      border: none;

      input {
        border: none;
        background: transparent;
        color: #fff;
        right: 0;
        outline-style: none;
        margin-left: .05rem;
        height: .3rem;
        color: #000;

        // &:focus {
        //   border-color: #66afe9;
        //   outline: 0;
        //   -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        //   box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
        // }
      }

      .icon-search {}
    }
  }
}
</style>