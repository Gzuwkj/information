// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import './theme.less'
import * as echarts from 'echarts';
Vue.use(iView);
Vue.prototype.$echarts = echarts
console.log(echarts)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
