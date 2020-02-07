<template>
    <div>
        <search placeholder="두글자 이상 입력후 엔터!"></search>
        <contact-list></contact-list>
        <VueElementLoading :active="isLoading" spinner="line-scale" is-full-screen/>
    </div>
</template>
<script type="text/javascript">
import ContactList from './components/ContactList.vue';
import Search from './components/Search.vue';
import VueElementLoading from 'vue-element-loading'

export default {
    name : 'app',
    components : { Search, ContactList, VueElementLoading },
    computed: {
      isLoading(){
        return this.$store.state.isLoading
      }
    }
}
</script>