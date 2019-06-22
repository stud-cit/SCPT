<template>
  <v-container grid-list-lg>
    <v-layout align-center fill-height collumn wrap>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        Анонси
      </v-flex>
      <v-flex v-for="(announcement, i) in announcements" :key="i" xs12 sm12 md6>
        <v-card @click.stop="onArticleViewer(announcement)">
          <v-img :src="announcement.previewImage" @error="imageLoadOnError">
            <v-container>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">
                  {{ announcement.title }}
                </span>
              </v-flex>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            {{ descriptionPrepare(announcement.description) }}
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center fill-height wrap>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        Новини
      </v-flex>
      <v-flex v-for="(article, i) in articles" :key="i" xs12 sm6 md4 lg3>
        <v-card @click.stop="onArticleViewer(article)">
          <v-img :src="article.previewImage" @error="imageLoadOnError">
            <v-container>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">{{ article.title }}</span>
              </v-flex>
            </v-container>
          </v-img>

          <v-card-title primary-title>
            <div height="5vh">
            {{ descriptionPrepare(article.description) }}
          </div>
          </v-card-title>
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
  announcements = [];
  descriptionLength = 140;

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

  created() {
    this.announcements = this.articles.splice(0, 3);
  }

  descriptionPrepare(str) {
    return `${str.substr(0, this.descriptionLength)}...`;
  }

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
