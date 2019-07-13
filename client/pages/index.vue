<template>
  <v-container grid-list-lg>

    <v-layout align-center fill-height collumn wrap>
      <v-flex xs12 class="text-xs-center display-2 my-5">Анонси</v-flex>

      <v-flex xs12 sm6 md4 lg3>
        <v-card>
          <v-responsive :aspect-ratio="6 / 4">
            <v-container />
            <v-layout align-center justify-center>
              <v-btn @click="$refs.file.click()" outline fab large>
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </v-layout>
          </v-responsive>
          <v-divider />
          <v-card-title primary-title>
            Додати новину
          </v-card-title>
        </v-card>
      </v-flex>

      <ArticleCard
        v-for="(announcement, i) in announcements" :key="i"
        :article="announcement"
        xs12 sm6 md4 lg3
      />

      <v-flex xs12 class="text-xs-center display-2 my-5">Новини</v-flex>
      <ArticleCard
        v-for="(article, i) in articles" :key="i"
        :article="article"
        xs12 sm6 md4 lg3
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
