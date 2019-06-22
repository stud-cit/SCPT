<template>
  <v-toolbar app fixed class="white--text hidden-sm-and-down" color="indigo">
    <v-toolbar-title>
      <v-icon color="white">mdi-vuetify</v-icon>
      Title
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items v-for="(page, i) in this.$props.pages" :key="i">
      <v-btn flat :to="page.to" exact>
        <div class=" white--text">{{ page.title }}</div>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Pages } from '~/models';

@Component({})
export default class Toolbar extends Vue {
  @Prop({ type: Array, required: true }) pages: [Pages];
}
</script>

<style></style>
