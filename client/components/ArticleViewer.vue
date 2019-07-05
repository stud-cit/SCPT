<template>
  <v-layout row justify-center>
    <v-toolbar dark flat color="primary" v-bind:style="getBackground()">
      <v-spacer />
      <v-btn fab flat @click.native="$emit('input')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout align-center justify-center fill-height wrap>
      <v-flex xs12 sm10 md8 lg6 class="card--flex-toolbar">
        <v-toolbar card class="py-2">
          <v-toolbar-title class="grey--text title">
            <span class="black--text">{{ data.title }}</span>
          </v-toolbar-title>

          <v-spacer />

          <v-toolbar-items>
            <v-btn @click="clearContent()" fab small flat>
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>

            <v-btn @click="saveContent()" fab small flat>
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </v-toolbar-items>

          <v-toolbar-items>
            <v-btn small flat disabled>
              <v-icon class="mr-2">mdi-update</v-icon>
              {{ toFormatDate(data.updateAt) }}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container v-for="(content, i) in data.content" :key="i" pa-0>
          <blockquote
            v-if="content.type == 'text'"
            v-html="content.filling"
            class="blockquote"
          />

          <v-card v-if="content.type == 'image'" flat>
            <v-img
              :aspect-ratio="16 / 9"
              :alt="content.alt"
              :src="content.src"
            />

            <v-card-title primary-title>
              <span class="primary--text font-weight-bold">#</span>
              <span class="text-uppercase">{{ content.alt }}</span>
            </v-card-title>
            <v-text-field
              v-model="content.alt"
              :label="imageUpload.placeholder"
              prepend-icon="mdi-pound"
            />
          </v-card>
        </v-container>

        <v-layout align-center justify-center fill-height wrap>
          <v-container v-if="textFilling.open">
            <v-textarea
              v-model="textFilling.filling"
              :placeholder="textFilling.placeholder"
              auto-grow
              clearable
              counter
            />
          </v-container>

          <v-btn @click="launchTextArea()" fab small flat align-center>
            <v-icon>mdi-format-annotation-plus</v-icon>
          </v-btn>

          <v-btn @click="launchFilePicker()" fab small flat align-center>
            <v-icon>mdi-image-plus</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

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
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component()
export default class ArticleViewer extends Vue {
  @Prop({ type: Boolean, required: false }) value: any;
  @Prop({ type: Object, required: true }) data: any;

  textFilling = {
    open: false,
    filling: null,
    placeholder: 'Що нового ?',
  };

  imageUpload = {
    open: false,
    alt: null,
    src: null,
    placeholder: 'Опис зображення',
  };

  content = [];

  launchTextArea() {
    if (this.textFilling.filling !== null) {
      this.data.content.push({
        type: 'text',
        filling: this.textFilling.filling.replace(/\n/g, '</br>'),
      });
    }

    this.textFilling.open = !this.textFilling.open;
    this.textFilling.filling = null;
  }

  launchFilePicker() {
    this.$refs.file.click();
  }

  onFileChange(e) {
    const files = e.target.files;
    const fr = new FileReader();

    fr.readAsDataURL(files[0]);
    fr.addEventListener('load', () => {
      this.imageFile = files[0];

      this.imageUpload.alt = null; //TO-DO: get def alt from global config
      this.imageUpload.src = fr.result;

      this.data.content.push({
        type: 'image',
        alt: this.imageUpload.alt,
        src: this.imageUpload.src,
      });
    });

    this.imageUpload.open = !this.imageUpload.open;
    this.imageUpload.alt = null;
    this.imageUpload.src = null;
  }

  clearContent() {
    return (this.data.content = null);
  }

  saveContent() {
    if (this.data.content) {
      return console.log(this.data.content);
    }

    return;
  }

  getBackground() {
    if (this.data.src) {
      return {
        height: '25vh',
        'background-image': `url(${this.data.src})`,
        'background-size': 'cover',
        'background-position-y': 'center',
      };
    }

    return;
  }
}
</script>

<style>
.card--flex-toolbar {
  margin-top: -43px;
}
</style>
