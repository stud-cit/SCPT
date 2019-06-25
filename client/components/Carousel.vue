<template>
  <v-carousel v-bind="getAttrs()" v-model="getIndex">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
      <slot v-bind="item" />
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  computed: {
    getIndex: {
      set () {
        return 0
      },
      get () {
        return this.index | 0
      }
    }
  }
})
export default class Carousel extends Vue {
  @Prop({ type: Array | undefined, required: true }) items: [Object];
  @Prop({ type: Number, required: false, default: 0 }) index: Number;

  getAttrs() {
    this.$attrs['height'] = '70vh';

    if ('fullscreen' in this.$attrs || this.$route.path === '/') {
      this.$attrs.height = '100vh';
    }

    return this.$attrs;
  }
}
</script>
