<template>
  <v-container grid-list-lg>
    <v-layout align-center justify-start fill-height collumn wrap>
      <v-flex xs12 class="text-xs-center display-2 my-5">Анонси</v-flex>
      <ArticleCard
        v-for="(announcement, i) in announcements"
        :key="i"
        :article="announcement"
        xs12
        sm6
        md4
        lg3
      />
    </v-layout>

    <v-layout align-center justify-center fill-height wrap>
      <v-flex xs12 class="text-xs-center display-2 my-5">Новини</v-flex>
      <ArticleCard
        v-for="(article, i) in articles"
        :key="i"
        :article="article"
        xs12
        sm6
        md4
        lg3
      />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  head: {
    title: 'Головна сторінка',
  },
  components: {
    ArticleCard: () => import('~/components/ArticleCard'),
  },
  async asyncData({ params, $axios }) {
    const annoncementCount = 3; //To-DO config
    const articles = await $axios.$get(`articles/`);
    const announcements = articles.splice(0, annoncementCount);

    return { articles, announcements };
  },
})
export default class HomePage extends Vue {
  announcements = [];
  articles = [];
}
</script>
