import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import axios from 'axios'
import ES6Promise from 'es6-promise'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
