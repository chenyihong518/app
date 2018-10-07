<template>
  <div class="bar">
    <i class="fa fa-angle-left back" v-if="isBack"></i>
    <h1 class="title">{{name}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "top",
    props: {
      name: {
        type: String
      },
      isBack: {
        type: Number
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bar
    position: fixed
    left: 0
    right: 0
    box-shadow: 0 1px 6px #ccc
    background: #fff
    z-index: 10
    padding-left: 10px
    padding-right: 10px
    .back
      position: absolute
      line-height: 44px
      color: #007aff
      margin-left: 10px
    .title
      text-align: center
      font-size: 17px
      font-weight: 500
      line-height: 44px
</style>
