// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import AlloyFinger from 'alloyfinger'
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
import home from './components/home/home'
import mine from './components/mine/mine'
import rank from './components/rank/rank'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(AlloyFingerVue,{AlloyFinger})
Vue.config.productionTip = false

const routes = [
  {path: '/home', component: home},
  {path: '/mine', component: mine},
  {path: '/rank', component: rank}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
router.push('/home');
