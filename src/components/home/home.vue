<template>
  <div>
    <div class="slider" v-on:mouseover="stop()" v-on:mouseout="move()">
      <div class="slider-item">
        <transition-group tag="ul" name="image" v-finger:swipe="swipe">
          <li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
            <a href="#">
              <img :src="img" width="100%" height="211"/>
            </a>
          </li>
        </transition-group>
      </div>
      <div class="slider-bar">
        <span v-for="(item,index) in imgArray" :class="{'active':index===mark}" @click="change(index)"
              :key="index"></span>
      </div>
    </div>
    <div class="search">
      <input class="search-box" type="search" placeholder="找餐厅，搜一下"/>
    </div>
    <div class="classify">
      <div class="classify-item">
        <router-link to="">
          <img src="./type1.gif" width="100%"/>
          <p>本帮菜</p>
        </router-link>
      </div>
      <div class="classify-item">
        <router-link to="">
          <img src="./type2.jpg" width="100%"/>
          <p>日料</p>
        </router-link>
      </div>
      <div class="classify-item">
        <router-link to="">
          <img src="./type3.jpg" width="100%"/>
          <p>西餐</p>
        </router-link>
      </div>
      <div class="classify-item">
        <router-link to="">
          <img src="./type4.jpg" width="100%"/>
          <p>全部</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        mark: 0,
        timer: null,
        swipeAction: 'swipe-left',
        imgArray: [
          require('./1.jpg'),
          require('./2.jpg'),
          require('./3.jpg')
        ]
      }
    },
    methods: {
      autoPlay() {
        this.mark++;
        if (this.mark >= this.imgArray.length) {
          this.mark = 0;
        }
      },
      play() {
        this.timer = setInterval(this.autoPlay, 4500);
      },
      change(i) {
        this.mark = i;
      },
      stop() {
        clearInterval(this.timer);
      },
      move() {
        this.timer = setInterval(this.autoPlay, 4500);
      },
      next() {
        this.mark++;
        if (this.mark >= this.imgArray.length) {
          this.mark = 0;
        }
      },
      prev() {
        this.mark--;
        if (this.mark < 0) {
          this.mark = this.imgArray.length - 1;
        }
      },
      swipe(evt) {
        if (evt.direction == "Left") {
          this.next();
          this.swipeAction = "swipe-left";
        } else {
          this.prev();
          this.swipeAction = "swipe-right";
        }
      }
    },
    created() {
      this.play();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slider
    position: relative
    height: 211px
    overflow: hidden
    .slider-item
      width: 100%
      li
        position: absolute
        &.image-enter-active
          transform: translateX(0)
          transition: all 1.5s ease
        &.image-leave-active
          transform: translateX(-100%)
          transition: all 1.5s ease
        &.image-enter
          transform: translateX(100%)
        &.image-leave
          transform: translateX(0)
    .slider-bar
      position: absolute
      bottom: 10px
      right: 10px
      span
        width: 20px
        height: 5px
        border: 1px solid
        background: #fff
        display: inline-block
        margin-right: 10px
        &.active
          background: #ccc

  .search
    background: #efeff4
    padding: 10px
    text-align: center
    .search-box
      width: 80%
      line-height: 21px
      padding: 5px 10px
      font-size: 14px
      border-radius: 5px
      outline: none
      text-align: center

  .classify
    background: #efeff4
    display: flex
    .classify-item
      display: inline-block
      flex: 1
      padding: 5px 7px
      img
        border-radius: 50%
      p
        font-size: 13px
        color: #000
        text-align: center
        margin-top: 5px
</style>
