<template>
  <v-flex row wrap>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex
          v-for="(news_one, i) in this.$props.news"
          :key="i"
          xs12
          sm12
          md6
          lg4
          pa-2
        >
          <v-card>
            <v-card-title primary-title>
              <h2>{{ news_one.title }}</h2>
            </v-card-title>
            <v-img
              :src="news_one.prew_img"
              aspect-ratio="2.75"
              max-height="200px"
            >
            </v-img>
            <v-card-text>
              <div>
                {{ news_one.prew_text }}
              </div>
            </v-card-text>
            <v-dialog
              v-model="news_one.dialog"
              fullscreen
              dark
              :attach="news_one.link"
              lazy
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  v-on="on"
                  large
                  flat
                  block
                  color="indigo"
                  class="white--text"
                  >Посмотреть новость</v-btn
                >
              </template>
              <v-card light tile>
                <v-card-actions>
                  <v-layout row wrap justify-end pa-2>
                    <v-btn
                      app
                      class="img_btn"
                      exact
                      to="/"
                      absolute
                      outline
                      color="indigo"
                      flat
                      fab
                      @click="news_one.dialog = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-layout>
                </v-card-actions>
                <v-card-title primary-title>
                  <v-layout row wrap justify-center>
                    <v-flex row wrap xs8>
                      <h1>{{ news_one.title }}</h1>
                    </v-flex>
                  </v-layout>
                </v-card-title>
                <v-card-text>
                  <v-layout row wrap justify-center>
                    <v-flex row wrap xs8>
                      {{ news_one.content }}
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { News } from '~/models';

@Component({})
export default class News extends Vue {
  @Prop({ type: Array, required: true }) news: [News];
  @Prop({ type: Number, required: false }) page: number;
}
</script>

<style>
.container {
  padding-top: 0px !important;
}
</style>
