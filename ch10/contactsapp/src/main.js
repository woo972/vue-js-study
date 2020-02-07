import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import axios from 'axios'
import ES6Promise from 'es6-promise'
import eventBus from './eventBus.js'

ES6Promise.polyfill();
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$eventBus = eventBus;
new Vue({
  render: h => h(App),
}).$mount('#app')
