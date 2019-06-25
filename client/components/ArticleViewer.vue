<template>
  <v-layout row justify-center>
    <v-dialog
      :value="value"
      @input="$emit('input')"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card flat>
        <v-toolbar color="primary" dark extended flat prominent>
          <v-btn icon @click.native="$emit('input')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-layout row>
          <v-flex xs8 offset-xs2>
            <v-card class="card--flex-toolbar">
              <v-toolbar card prominent class="py-2">
                <v-toolbar-title class="grey--text title">
                  <span class="black--text">{{ data.title }}</span>
                </v-toolbar-title>
              </v-toolbar>

              <v-divider></v-divider>

              <v-card-text>
                {{ data.content }}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="primary white--text">
                <v-spacer />
                <v-icon class="mr-2 white--text" small>mdi-update</v-icon>
                <span>{{ toFormatDate(data.updateAt) }}</span>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component()
export default class ArticleViewer extends Vue {
  @Prop({ type: Boolean, required: false }) value: any;
  @Prop({ type: Object, required: true }) data: any;
}
</script>

<style>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
