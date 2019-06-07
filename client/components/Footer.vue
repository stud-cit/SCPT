<template>
  <v-footer light height="auto">
    <v-card flat tile class="text-xs-center">
      <v-card-text>
        <v-btn
          icon
          class="mx-3"
          v-for="invite in invites"
          :key="invite.to"
          :to="invite.to"
        >
          <v-icon v-text="invite.icon" />
        </v-btn>
      </v-card-text>

      <v-card-text>
        <v-layout wrap align-center justify-space-around>
          <v-flex md5 sm12>
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-flex>
          <v-flex md5 sm12>
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-flex>
        </v-layout>
      </v-card-text>

      <v-divider />

      <v-card-text class="">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Invites } from "~/models";

@Component({})
export default class Footer extends Vue {
  @Prop({ type: Array, required: true }) invites: [Invites]
}
</script>

<style></style>
