<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <v-layout align-center fill-height pa-3 white--text>
          <div class="title blame pr-2 pt-1 pb-1 font-weight-light">
            Error {{ error.statusCode }}:
          </div>
          <nuxt-link class="title font-weight-light" to="/">
            <div class="pa-1 pink white--text">
              Повернутися на головну
            </div>
          </nuxt-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Error } from '~/models';

@Component({
  head: {
    title: `Помилка`,
  },
})
export default class ErrorPage extends Vue {
  @Prop({ type: Object, required: true }) error: Error;
}
</script>

<style>
.blame {
  animation: type 0.5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -2px 0px 0px var(--v-primary-lighten4);
  }

  to {
    box-shadow: inset -2px 0px 0px transparent;
  }
}
</style>
