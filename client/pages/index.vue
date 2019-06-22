<template>
  <v-container grid-list-lg>
    <v-layout align-center justify-center row fill-height wrap>
      <v-flex v-for="(article, i) in articles" :key="i" sm12 md9 lg4>
        <v-card>
          <v-card-title class="title">
            {{ article.title }}
          </v-card-title>
          <v-img
            :src="article.previewImage"
            @error="imageLoadOnError"
            aspect-ratio="1.75"
          />
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              flat
              color="primary"
              @click.stop="onArticleViewer(article)"
            >
              Детальніше
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <ArticleViewer v-model="dialog" :data="currentArticle" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ArticleViewer: () => import('~/components/ArticleViewer'),
  },
  head: {
    title: 'Головна сторінка',
  },
})
export default class HomePage extends Vue {
  dialog: boolean = false;
  currentArticle = {};

  articles = new Array(20).fill('').map((item, i) => ({
    title: `Title ${i}`,
    previewImage: `img/placeholder.svg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'hi',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'hi',
    updateAt: new Date(),
  }));

  onArticleViewer(article, i) {
    this.currentArticle = article;
    return (this.dialog = true);
  }

  imageLoadOnError(event) {
    return (this.data.previewImage = 'img/placeholder.svg');
  }
}
</script>

<style scoped></style>
