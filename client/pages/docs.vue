<template>
  <v-container grid-list-lg>
    <v-layout align-cente justify-center wrap>
      <v-flex v-for="(doc, i) in documents" :key="i" xs12 sm5 md4 lg3>
        <v-card>
          <CustomImage :data="doc" :aspect-ratio="70 / 99" />
          <v-card-actions class="pt-4" style="position: relative; z-index:0">
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
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  head: {
    title: 'Документи',
  },
  components: {
    CustomImage: () => import('~/components/CustomImage'),
  }
})
export default class DocsPage extends Vue {
  documents = new Array(2).fill('').map((item, i) => ({
    title: `Документ ${i}`,
    src: `https://picsum.photos/1366/728?image=${i}`,
    lazySrc: `https://picsum.photos/10/6?image=${i}`,
    to: '/',
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
</style>
