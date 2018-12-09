<template>
  <div>
    <div class="slider">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide><img src="./1.jpg" width="100%" height="211"></swiper-slide>
        <swiper-slide><img src="./2.jpg" width="100%" height="211"></swiper-slide>
        <swiper-slide><img src="./3.jpg" width="100%" height="211"></swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
    <div class="featured">
      <div class="featured-title">
        <p>精选商家</p>
      </div>
      <div class="featured-content">
        <div class="featured-content-item">
          <img src="./1.jpg" width="100%"/>
        </div>
        <div class="featured-content-item">
          <img src="./2.jpg" width="100%"/>
        </div>
        <div class="featured-content-item">
          <img src="./3.jpg" width="100%"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import axios from "axios"

  export default {
    data() {
      return {
        swiperOption: {
          //notNextTick: true,
          //循环
          loop: true,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          autoplay: {
            disableOnInteraction: false,
          },//用户操作swipe后是否禁止autoplay，false为不禁止
          speed: 800,
          direction: 'horizontal',
          on: {//滑动之后的回调函数
            slideChangeTransitionEnd: function () {
              //console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            }
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          swiperSlides: [1, 2, 3, 4]
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      //可以使用swiper这个对象去使用swiper官网中的那些方法
      console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 0, false);
    },
    created(){
      axios.get('http://localhost:8080/restaurant/shop/list').then(function(res){
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slider
    position: relative
    height: 211px
    overflow: hidden

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

  .featured
    background: #fff
    .featured-title
      height: 21px
      padding: 10px 0
      font-size: 14px
      text-align: center

</style>
