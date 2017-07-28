// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from '../vuex/store'
import MuseUI from 'muse-ui'
import axios from 'axios';
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)
//如果在main.js里 import axios from 'axios';  然后在子组件里axios.get('/api/seller').then(function (res) {});使用就报错，说axios未定义。
//解决方案：Vue.prototype.随便的名字 = axios ，然后在子组件使用this.随便的名字.get即可
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router
})