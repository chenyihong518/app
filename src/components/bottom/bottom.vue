<template>
  <div class="tab">
    <div class="tab-item" @click="changeTitle('美味不用等')">
      <router-link to="/home">
        <i class="fa fa-home fa-2x"></i>
        <span class="name">首页</span>
      </router-link>
    </div>
    <div class="tab-item" @click="changeTitle('周排行榜')">
      <router-link to="/rank">
        <i class="fa fa-bars fa-2x"></i>
        <span class="name">排行榜</span>
      </router-link>
    </div>
    <div class="tab-item" @click="changeTitle('我的')">
      <router-link to="/mine">
        <i class="fa fa-user fa-2x"></i>
        <span class="name">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "bottom",
    props: {
      name: {
        type: String
      }
    },
    methods: {
      changeTitle: function (name) {
        this.$emit("changeTitle", name)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position: fixed
    z-index: 10
    right: 0
    left: 0
    display: flex
    height: 50px
    line-height: 50px
    box-shadow: 0 0 1px rgba(0, 0, 0, .85)
    bottom: 0
    .tab-item
      flex: 1
      text-align: center
      font-size: 11px
      color: #929292
      .fa
        display: block
        margin-top: 8px
      .name
        display: block
        line-height: 11px
      a.active
        color: #007aff
</style>
