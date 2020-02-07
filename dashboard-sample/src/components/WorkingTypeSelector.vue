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
        '내근', '외근',
      ],
      label: '내외근',
    };
  },
};
</script>
