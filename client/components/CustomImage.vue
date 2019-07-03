<template>
  <v-img :src="this.getImage(src)" :art="alt" v-bind="$attrs">
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
  @Prop({ type: String, required: true }) src: string;
  @Prop({ type: String, required: false }) alt: string;
}
</script>
