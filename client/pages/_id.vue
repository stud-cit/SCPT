<template>
  <v-layout align-center justify-center wrap>
    <v-toolbar dark flat color="primary" v-bind:style="getBackground()">
      <v-spacer />
      <v-toolbar-side-icon to="/">
          <v-icon>mdi-chevron-left</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-flex xs12 sm10 md8 lg6 white class="card--flex-toolbar">
      <v-toolbar card class="py-2">
        <v-toolbar-title class="grey--text title">
          <span class="black--text">{{ article.title }}</span>
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items v-if="loggedInUser" >
          <v-btn @click="clearContent()" fab small flat>
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>

          <v-btn @click="saveContent()" fab small flat>
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </v-toolbar-items>

        <v-toolbar-items v-else>
          <v-btn small flat disabled>
            <v-icon class="mr-2">mdi-update</v-icon>
            {{ toFormatDate(article.updateAt) }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-container v-for="(section, i) in article.content" :key="i" pa-0>
        <blockquote
          v-if="section.type == 'text'"
          v-html="section.filling"
          class="blockquote"
        />

        <v-card v-if="section.type == 'image'" flat>
          <v-img
            :aspect-ratio="16 / 9"
            :src="getImage(section.src)"
            :alt="section.alt"
          />

          <v-card-text v-if="loggedInUser" primary-title>
            <v-text-field
              v-model="section.alt"
              :label="imageUpload.placeholder"
              prepend-icon="mdi-pound"
            />
          </v-card-text>
          <v-card-title v-else primary-title>
            <span class="primary--text font-weight-bold">#</span>
            <span class="text-uppercase">{{ section.alt }}</span>
          </v-card-title>
        </v-card>
      </v-container>

      <v-divider />

      <v-layout v-if="loggedInUser" align-center justify-center fill-height wrap>
        <v-container v-if="textFilling.open">
          <v-textarea
            v-model="textFilling.filling"
            :placeholder="textFilling.placeholder"
            auto-grow
            clearable
            counter
          />
        </v-container>

        <v-btn @click="launchTextArea()" fab small flat>
          <v-icon>mdi-format-annotation-plus</v-icon>
        </v-btn>

        <v-btn @click="$refs.file.click()" fab small flat>
          <v-icon>mdi-image-plus</v-icon>
        </v-btn>
      </v-layout>
    </v-flex>

    <input
      v-show
      ref="file"
      type="file"
      accept="image/*"
      @change="onFileChange"
    />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters, mapMutations } from 'vuex';

@Component({
  layout: 'blank',
  head () {
    return {
      title: this.article.title,
    }
  },
  computed: {
    ...mapGetters(['isArticle', 'loggedInUser']),
  },
  validate({ params, query }) {
    return Number(params.id);
  },
  async fetch ({ store, params }) {
    await store.dispatch('getArticle', params.id);
  },
})
export default class ArticlePage extends Vue {
  @Watch('article', { immediate: true, deep: true })
  onArtilChanged(article: object, oldArticle: object) {
    if(oldArticle) {
      this.saveContent()
      this.$store.commit('setArticle', { article })
    }
  }

  article: object = this.$store.state.article;

  textFilling = {
    filling: null,
    placeholder: 'Що нового ?',
  };

  imageUpload = {
    alt: null,
    placeholder: 'Опис зображення',
  };

  launchTextArea() {
    if (this.textFilling.filling !== null) {
      this.article.content.push({
        type: 'text',
        filling: this.textFilling.filling.replace(/\n/g, '</br>'),
      })
    }

    this.textFilling.open = !this.textFilling.open;
    this.textFilling.filling = null;
  }

  async onFileChange(e) {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    const patch = await this.$axios.$post(`upload/`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return this.article.content.push({
      type: 'image',
      alt: this.imageUpload.alt,
      src: patch,
    })
  }

  clearContent() {
    return this.article.content = null;
  }

  async saveContent() {
    if (this.article.content.length) {
      await this.$axios.$put('articles/', this.article);
    }
  }

  getBackground() {
      return {
        height: '25vh',
        'background-image': `url(${this.getImage(this.article.cover)})`,
        'background-size': 'cover',
        'background-position-y': 'center',
      };
  }
}
</script>

<style>
.card--flex-toolbar {
  margin-top: -43px;
}
</style>
