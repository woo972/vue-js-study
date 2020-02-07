<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar flat dense>
          <v-icon>■</v-icon>
          <v-toolbar-title>
            <span v-text="title" class="title"/>
            <span v-text="subDesc" class="subtitle-2"/>
          </v-toolbar-title>
          <v-spacer/>
          <div class="d-flex align-end">
          <slot name="selects1"/>
          <slot name="selects2"/>
          <slot name="selects3"/>
          <slot name="selects4"/>
          </div>
        </v-toolbar>
        <v-card height="200">
          <v-row>
            <v-col>
              <slot name="contents"/>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, required: true },
    subDesc: { type: String, default: '' },
  },
};
</script>
