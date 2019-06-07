<template>
  <v-toolbar app fixed light>
    <v-toolbar-title>
      <v-icon>mdi-vuetify</v-icon>
      Title
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items v-for="(page, i) in this.$props.pages" :key="i">
      <v-btn flat :to="page.to" exact>
        <v-icon class="hidden-md-and-up">{{ page.icon }}</v-icon>
        <div class="hidden-sm-and-down">{{ page.title }}</div>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Pages } from "~/models";

@Component({})
export default class Toolbar extends Vue {
  @Prop({ type: Array, required: true }) pages: [Pages]
}
</script>

<style></style>
