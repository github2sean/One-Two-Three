<template>
  <div class="left">
    <div class="icon"><img src="/vite.svg"></div>
    <div class="item">
      <ul>
        <li>
          <router-link to="/index">
            <i class="fa-solid fa-house"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/write" tag="li">
            <i class="fa-solid fa-book"></i>
          </router-link>
        </li>
        <li><i class="fa-solid fa-user"></i></li>
      </ul>
    </div>
    <span @mousedown="dragFun" class="tog" @click="toggelBar"></span>
  </div>
</template>
<script setup>
let isShowLeft = ref(true)
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
.left {
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
  width: .5rem;
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
</style>