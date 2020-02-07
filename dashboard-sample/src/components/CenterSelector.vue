<template>
<SelectBox :items="items" :label="label"/>
</template>

<script>
import SelectBox from './SelectBox.vue';

export default {
  name: 'CenterSelector',
  components: { SelectBox },
  data() {
    return {
      items: [
        { text: '전체', value: 'ALL' },
        { text: '모바일강남센터', value: 'P05' },
        { text: '모바일서초센터', value: 'P06' },
        { text: '모바일구로센터', value: 'P07' },
        { text: '모바일영등포센터', value: 'P08' },
        { text: '모바일가나다오리진센터', value: 'P09' },
      ],
      label: '센터',
    };
  },
};
</script>
