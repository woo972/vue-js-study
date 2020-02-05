<template>
<div>
  <div class="header">
    <h1 class="headerText">(주) OpenSG</h1>
    <nav>
      <ul>
        <li>
          <a href="#" @click="changeMenu('screenHome')">Home</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('about')">About</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('contact')">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <keep-alive include="about,home"> <!-- 캐싱 화면 목록, 각 Vue component에서 설정한 name-->
      <component v-bind:is="currentView"></component>
    </keep-alive>
  </div>
</div>  
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default {
  name:'App',
  components:{ScreenHome:Home, About, Contact},
  data() {
    return {
        currentView:'screenHome'
    }
  },
  methods: {
    changeMenu(view){
      this.currentView = view
    }
  },
}
</script>
<style scoped>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }
</style>