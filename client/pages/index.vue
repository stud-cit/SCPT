<template>
  <v-container grid-list-lg>
    <v-layout align-center fill-height collumn wrap>
      <v-layout justify-center aling-center row>
        <v-flex xs6>
          <v-slider
            v-model="AnnoncementCount"
            label="Введіть кількість новин"
            :max="10"
            thumb-label
            @change="onChangeAnnouncements(AnnoncementCount)"
          ></v-slider>
        </v-flex>
        <v-btn icon @click="onChangeAnnouncements(AnnoncementCount++)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          icon
          v-if="AnnoncementCount > 0"
          @click="onChangeAnnouncements(AnnoncementCount--)"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-layout>
      <v-flex
        xs12
        class="text-xs-center display-2 my-5"
        v-if="AnnoncementCount > 0"
        >Анонси</v-flex
      >
      <v-flex v-for="(announcement, i) in announcements" :key="i" xs12 sm6 lg4>
        <v-card @click.stop="onArticleViewer(announcement)">
          <CustomImage :data="announcement" :aspect-ratio="6 / 4">
            <v-container>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">
                  {{ announcement.title }}
                </span>
              </v-flex>
            </v-container>
          </CustomImage>
          <v-card-title primary-title>
            {{ descriptionPrepare(announcement.description) }}
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center fill-height wrap>
      <v-flex xs12 class="text-xs-center display-2 my-5">Новини</v-flex>
      <v-flex v-for="(article, i) in articles" :key="i" xs12 sm6 md4 lg3>
        <v-card @click.stop="onArticleViewer(article)">
          <CustomImage :data="article" :aspect-ratio="6 / 4">
            <v-container>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">{{ article.title }}</span>
              </v-flex>
            </v-container>
          </CustomImage>
          <v-card-title primary-title>
            {{ descriptionPrepare(article.description) }}
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
  head: {
    title: 'Головна сторінка',
  },
  components: {
    ArticleViewer: () => import('~/components/ArticleViewer'),
    CustomImage: () => import('~/components/CustomImage'),
  },
})
export default class HomePage extends Vue {
  dialog: boolean = false;
  currentArticle = {};
  announcements = [];
  descriptionLength = 140;
  AnnoncementCount = 3;

  articles = new Array(20).fill('').map((item, i) => ({
    title: `Title ${i}`,
    src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
    lazySrc: `https://picsum.photos/10/6?image=${i * 5 + 10}`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'hi',
    content: [
      {
        type: 'text',
        filling: 'Lorem</br>Text',
      },
      {
        type: 'image',
        alt: 'Lorem Alt',
        src: 'https://picsum.photos/1366/728?image=10',
      }
    ],
    link: 'hi',
    updateAt: new Date(),
  }));

  created() {
    this.announcements = this.articles.splice(0, 3);
  }
  onChangeAnnouncements(AnnoncementCount) {
    this.articles = [...this.announcements, ...this.articles];
    this.announcements = this.articles.splice(0, this.AnnoncementCount);
  }
  descriptionPrepare(str) {
    return `${str.substr(0, this.descriptionLength)}...`;
  }

  onArticleViewer(article, i) {
    this.currentArticle = article;
    return (this.dialog = true);
  }
}
</script>

<style scoped></style>
