<template>
<v-row>
    <v-col>
        <v-card height="200" >
            <v-toolbar flat dense>
                <v-toolbar-title>
                    <span v-text="title" class="title"/>
                    <span v-text="subDesc" class="subtitle-2"/>
                    <slot name="selects"/>
                </v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>
            <v-row>
                <v-col>
                    <slot name="contents"/>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</v-row>
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
