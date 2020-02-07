<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          :label="label"
          outlined
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
    label: { type: String, required: true },
  },
};
</script>
