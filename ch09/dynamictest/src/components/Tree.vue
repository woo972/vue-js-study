<template>
  <ul>
      <li v-for="s in subs" :class="s.type" :key="s.name">
        {{s.name}}
        <Tree :subs="s.subs"/>
      </li>
  </ul>
</template>

<script>
export default {
    name:'Tree',
    props:['subs']
}
</script>

<style>

</style>