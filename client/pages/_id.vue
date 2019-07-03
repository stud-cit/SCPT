<template>
  <v-container grid-list-lg>
    <ArticleViewer v-model="dialog" :data="article" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'blank',
  head: {
    title: 'Головна сторінка',
  },
  components: {
    ArticleViewer: () => import('~/components/ArticleViewer'),
    CustomImage: () => import('~/components/CustomImage'),
  },
  validate({ params, query }) {
    return Number(params.id)
  },
  async asyncData({ params, $axios }){
    const article = await $axios.$get(`articles/${params.id}`);
    return { article };
  }
})
export default class ArticlePage extends Vue {
  dialog: boolean = true;
  article: any = null;
}
</script>

<style></style>
