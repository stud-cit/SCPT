<template>
  <v-img
    :src="data.src"
    :lazy-src="data.lazySrc"
    :alt="data.alt"
    v-bind="$attrs"
  >
    <slot />
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0>
        <v-progress-circular :size="50" color="accent" indeterminate />
      </v-layout>
    </template>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component()
export default class CustomImage extends Vue {
  @Prop({ type: Object, required: true }) data: any;
}
</script>

<style>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
