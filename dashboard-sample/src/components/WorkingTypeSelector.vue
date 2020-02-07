<template>
  <SelectBox :items="items" :label="label"/>
</template>

<script>
import SelectBox from './SelectBox.vue';

export default {
  name: 'WorkingTypeSelector',
  components: { SelectBox },
  data() {
    return {
      items: [
        { text: '전체', value: 0 },
        { text: '내근', value: 1 },
        { text: '외근', value: 2 },
      ],
      label: '내외근',
    };
  },
};
</script>
