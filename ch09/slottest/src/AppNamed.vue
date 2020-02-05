<template>
  <div id="app">
      <layout>
          <h1 slot="header">HEADER </h1>
          <div slot="sidebar">
              <ul class="menu">
                <li v-for="sidebar in sidebars" :key="sidebar.menu">
                    <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
                </li>
            </ul>
          </div>
      </layout>
      </div>
</template>

<script>
import NamedSlot from './components/NamedSlot'
export default {
    name:'AppNamed',
    components:{Layout:NamedSlot},
    data() {
        return {
            sidebars : [
                { menu : "Home", link : "#" },
                { menu : "About", link : "#" },
                { menu : "Contact", link : "#" },
                { menu : "Vue.js", link : "#" }
            ]
        }
    },
}
</script>

<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
}
ul.menu a {
    text-decoration:none;
}
</style>