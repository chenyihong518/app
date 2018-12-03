<template>
  <div>
    <top :name="name" :isBack="0"></top>
    <div class="content">
      <router-view></router-view>
    </div>
    <bottom :name="name" v-on:changeTitle="changeTitle($event)"></bottom>
  </div>
</template>

<script type="text/ecmascript-6">
  import top from './components/top/top';
  import bottom from './components/bottom/bottom';

  export default {
    name: 'App',
    components: {
      top,
      bottom
    },
    data() {
      return {
        name: "美味不用等"
      }
    },
    methods: {
      changeTitle(name) {
        this.name = name;
      }
    }
  }

  //ios10之后禁止页面缩放
  window.onload = function() {
    document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    })
    document.addEventListener('gesturestart', function(event) {
      event.preventDefault()
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    padding-top: 44px
    height: 100%
</style>
