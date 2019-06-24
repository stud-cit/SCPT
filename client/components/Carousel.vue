<template>
  <v-carousel :height="onChangeHeight()" hide-controls hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" />
  </v-carousel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component()
export default class Carousel extends Vue {
  @Prop({ type: Array, required: true }) items: [String];

  onChangeHeight() {
    if (this.$route.path === '/') {
      return '100vh';
    }

    return '70vh';
  }
}
</script>
