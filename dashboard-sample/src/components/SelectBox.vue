<template>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          :items="items"
          :label="label"
          :placeholder="selectedItem"
          item-text="text"
          item-value="value"
          outlined
          dense
          class="body-2"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    items: { type: Array, required: true },
    label: { type: String },
  },
  data() {
    return {
      selectedItem: this.items[0].text,
    };
  },
};
</script>
