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
            <v-img
              :src="item.src"
              :alt="item.title"
              @error="imageLoadOnError"
              @click.stop="onGalleryViewer(event, j)"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <GalleryViewer v-model="dialog" :data="currentItem" />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import toFormatDate from '~/mixins/toFormatDate';

@Component({
  head: {
    title: 'Галерея',
  },
  components: {
    GalleryViewer: () => import('~/components/GalleryViewer'),
  },
  mixins: [toFormatDate],
})
export default class GalleryPage extends Vue {
  dialog: boolean = false;
  currentItem = {};

  events = new Array(10).fill('').map((item, i) => ({
    title: `Title ${i}`,
    items: new Array(15).fill({
      type: 'video',
      title: `Alt item ${i}`,
      src: `${Math.random() > 0.5 ? 'img' : 'video'}/placeholder.svg`,
    }),
    createAt: Math.random(),
  }));

  onGalleryViewer(event, n) {
    const l = event.items.length;
    event.items = event.items.map((item, i) => {
      return event.items[(((n + i) % l) + l) % l];
    });
    this.currentItem = event;

    return (this.dialog = true);
  }

  imageLoadOnError(event) {
    return (this.data.previewImage = 'img/placeholder.svg');
  }
}
</script>

<style scoped></style>
