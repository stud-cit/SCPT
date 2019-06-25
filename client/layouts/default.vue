<template>
  <v-app light>
    <v-toolbar app fixed class="white--text hidden-xs-only" color="indigo">
      <v-toolbar-title>
        <v-icon color="white">mdi-vuetify</v-icon>
        Title
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items v-for="(page, i) in pages" :key="i">
        <v-btn flat :to="page.to" exact>
          <div class=" white--text">{{ page.title }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <Carousel :items="carusel" hide-controls hide-delimiters />

    <v-content>
      <nuxt />
    </v-content>

    <v-footer height="auto">
      <v-card color="indigo" flat tile class="text-xs-center">
        <v-card-text>
          <v-btn
            icon
            class="mx-3 white--text"
            v-for="invite in invites"
            :key="invite.to"
            :to="invite.to"
          >
            <v-icon v-text="invite.icon" />
          </v-btn>
        </v-card-text>

        <v-card-text>
          <v-layout wrap align-center justify-space-around>
            <v-flex md5 sm12 class="white--text">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus accumsan id ultrices nunc. Sed at orci sed massa
              consectetur dignissim a sit amet dui. Duis commodo vitae velit et
              faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue
              vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu
              ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-flex>
            <v-flex md5 sm12 class="white--text">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus accumsan id ultrices nunc. Sed at orci sed massa
              consectetur dignissim a sit amet dui. Duis commodo vitae velit et
              faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue
              vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu
              ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-divider />

        <v-card-text class="white--text">
          &copy;2019 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Carousel: () => import('~/components/Carousel.vue'),
  },
})
export default class DefaultLayuot extends Vue {
  pages = [
    { title: 'Головна', icon: 'mdi-home', to: '/' },
    { title: 'Документи', icon: 'mdi-file-document', to: '/docs' },
    { title: 'Галерея', icon: 'mdi-animation', to: '/gallery' },
    { title: 'Контакти', icon: 'mdi-contacts', to: '/contact' },
    { title: 'Про нас', icon: 'mdi-information-variant', to: '/about' },
  ];

  invites = [
    { icon: 'mdi-instagram', to: '//google.com.ua' },
    { icon: 'mdi-facebook', to: '//google.com.ru' },
    { icon: 'mdi-linkedin', to: '//google.com.sd' },
    { icon: 'mdi-twitter', to: '//google.com' },
  ];

  carusel = new Array(5).fill({ src: './img/placeholder.svg' });
}
</script>
