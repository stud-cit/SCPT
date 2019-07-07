<template>
  <v-app>
    <ToolBar />

    <Carousel :items="getConfig.carusel" hide-controls hide-delimiters />

    <v-content>
      <nuxt />
    </v-content>

    <v-footer height="auto">
      <v-card color="primary" flat tile class="text-xs-center">
        <v-card-text>
          <v-btn
            v-for="(invite, i) in getConfig.invites" :key="i"
            :to="invite.to" exact
            icon class="mx-3 white--text"
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
import { mapGetters } from 'vuex';

@Component({
  components: {
    ToolBar: () => import('~/components/ToolBar.vue'),
    Carousel: () => import('~/components/Carousel.vue'),
  },
  computed: {
    ...mapGetters(['getConfig']),
  },
})
export default class DefaultLayuot extends Vue {}
</script>
