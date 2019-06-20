<template>
  <v-container>
    <Documents :documents="documents"></Documents>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LoremContent: () => import('~/components/LoremContent'),
    Documents: () => import('~/components/Documents'),
  },
  head: {
    title: 'Документи',
  },
  data: () => ({
    documents: [
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
      { title: 'Первый документ', link: '/' },
    ],
  }),
})
export default class DocsPage extends Vue {}
</script>

<style scoped></style>
