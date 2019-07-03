<template>
  <v-layout column>
    <v-container v-for="(event, i) in events" :key="i">
      <v-layout class="display-1 font-weight-light my-3">
        {{ event.title }}<v-spacer />{{ toFormatDate(event.createAt) }}
      </v-layout>
      <v-divider v-if="i > 0" />
      <v-container fluid grid-list-lg>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex v-for="(item, j) in event.items" :key="j" xs12 sm6 md4 lg3>
            <CustomImage
              :src="item.src"
              :alt="item.alt"
              :aspect-ratio="1"
              @click.native="onGalleryViewer(event, j)"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <GalleryViewer v-model="dialog" :data="currentEvent" />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  head: {
    title: 'Галерея',
  },
  components: {
    GalleryViewer: () => import('~/components/GalleryViewer'),
    CustomImage: () => import('~/components/CustomImage'),
  },
})
export default class GalleryPage extends Vue {
  dialog: boolean = false;
  currentEvent = {};

  events = new Array(10).fill('').map((item, i) => ({
    title: `Title ${i}`,
    items: new Array(15).fill('').map((item, i) => ({
      type: 'video',
      title: `Alt item ${i}`,
      src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
    })),
    createAt: Math.random(),
  }));

  onGalleryViewer(event, n) {
    this.currentEvent = {
      index: n,
      ...event,
    };

    return (this.dialog = true);
  }
}
</script>

<style scoped></style>
