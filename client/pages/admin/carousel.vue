<template>
  <v-container>
    <v-layout align-cente justify-center wrap>
      <v-flex xs12>
        <CustomImage :data="items[page-1]" />
        <v-text-field v-model="items[page-1].src" label="src"/>
        <v-text-field v-model="items[page-1].lazySrc" label="lazySrc"/>
      </v-flex>
      <v-pagination
        v-model="page"
        :length="itemsLength(items)"
        >

        </v-pagination>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'dashboard',
  head: {
    title: 'Адмін панель',
  },
  components: {
    CustomImage: () => import('~/components/CustomImage'),
  },
})
export default class AdminPage extends Vue {
  page: number = 1;
  items = new Array(15).fill('').map((item, i) => ({
    type: 'video',
    title: `Alt item ${i}`,
    src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
    lazySrc: `https://picsum.photos/10/6?image=${i * 5 + 10}`,
  }));
  itemsLength(items){
    return items.length;
  }
}
</script>

<style scoped></style>
