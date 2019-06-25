<template>
  <v-dialog
    :value="value"
    @input="$emit('input')"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-toolbar app card dark color="transparent" class="py-2">
      <v-spacer />
      <v-btn icon large @click.native="$emit('input')">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <Carousel
      :items="data.items"
      :index="data.index"
      :cycle="false"
      v-slot="item"
      fullscreen
      hide-delimiters
    >
      <v-toolbar app card dark color="transparent" class="py-2">
        <v-container justify-center>
          <v-flex xs12 align-end class="headline white--text">
            {{ data.title }} : {{ toFormatDate(data.createAt) }}
          </v-flex>
          <v-flex xs12 align-end class="title white--text">
          {{ item.title }}
          </v-flex>
        </v-container>
      </v-toolbar>
    </Carousel>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import toFormatDate from '~/mixins/toFormatDate';

@Component({
  mixins: [toFormatDate],
  components: {
    Carousel: () => import('~/components/Carousel.vue'),
  },
})
export default class GalleryViewer extends Vue {
  @Prop({ type: Boolean, required: false }) value: any;
  @Prop({ type: Object, required: true }) data: any;
}
</script>

<style>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
