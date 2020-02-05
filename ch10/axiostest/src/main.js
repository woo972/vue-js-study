import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// let url = 'http://localhost:3000/contacts'
let url ='/api/contacts'

axios.post(
  url, 
  {name:'Ted', tel:'010-0343-2341', address: 'New York'},
  {headers: {Authorization: "Bearer xxxxxx"}}
)


// axios.get(url,{
//   params: {pageno:1,pagesize:4},
//   headers: {Authorization: "Bearer xxxxxx"}
// }).then((res)=> console.log(res))
//   .catch((error)=>console.log(error))