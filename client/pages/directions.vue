<template>
  <v-layout column>
    <v-container v-for="(way, i) in ways" :key="i">
      <v-layout class="display-1 font-weight-light my-3">
        {{ way.title }}
      </v-layout>
      <v-container fluid grid-list-lg>
        <v-layout class="box-img" align-center justify-center row wrap>
          <v-flex v-for="(doc, i) in way.documents" :key="i" xs4>
            <v-card class="doc">
              <CustomImage
                class="doc-image"
                :data="doc"
                :aspect-ratio="70 / 99"
              />
              <v-card-actions
                class="pt-4"
                style="position: relative; z-index:0"
              >
                <v-btn
                  @click="download(doc.to)"
                  color="accent"
                  absolute
                  right
                  top
                  fab
                >
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                <span class="title mb-2">{{ doc.title }}</span>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <Carousel :items="carusel" hide-delimiters />
          </v-flex>
          <v-flex>
            <span class="mb-2">{{ way.content }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  head: {
    title: 'Напрямки',
  },
  components: {
    CustomImage: () => import('~/components/CustomImage'),
    Carousel: () => import('~/components/Carousel.vue'),
  },
})
export default class WayPage extends Vue {
  ways = new Array(10).fill('').map((item, i) => ({
    title: `Напрямок ${i + 1}`,
    documents: [
      {
        title: `Документ ${i + 1}`,
        src: `https://picsum.photos/1366/728?image=${i}`,
        lazySrc: `https://picsum.photos/10/6?image=${i}`,
        to: '/',
      },
    ],
    carusel: new Array(5).fill('').map((item, i) => ({
      src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
    })),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }));
  carusel = new Array(5).fill('').map((item, i) => ({
    src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
  }));

  async download(src) {
    return await 0;
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-carousel,
.doc {
  height: 500px !important;
}
.doc-image {
  height: 450px;
}
</style>
