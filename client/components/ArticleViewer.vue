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
        <v-toolbar dark flat color="primary" v-bind:style="setBackground(data)">
          <v-spacer />
          <v-btn fab flat @click.native="$emit('input')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 sm10 md9 lg8 class="card--flex-toolbar">
            <tiptap-vuetify
              v-model="data.content"
              :extensions="extensions"
              :placeholder="placeholder"
            >
              <template
                slot="toolbar"
                slot-scope="{ buttons, commands, isActive }"
              >
                <div>
                  <v-toolbar card class="py-2">
                    <v-toolbar-title class="grey--text title">
                      <span class="black--text">{{ data.title }}</span>
                    </v-toolbar-title>

                    <v-spacer />

                    <v-btn @click="clearContent()" fab small flat>
                      <v-icon>mdi-trash-can</v-icon>
                    </v-btn>

                    <v-btn @click="saveContent()" fab small flat>
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                  </v-toolbar>

                  <v-divider />

                  <v-toolbar card>
                    <CustomButton
                      v-for="(button, i) of buttons"
                      :key="i"
                      :scope="{ ...button, commands, isActive }"
                    />
                  </v-toolbar>
                </div>
              </template>
            </tiptap-vuetify>

            <div v-if="false">
              <v-card-text>
                {{ data.content }}
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-spacer />
                <v-icon class="mr-2" small>mdi-update</v-icon>
                <span>{{ toFormatDate(data.updateAt) }}</span>
              </v-card-actions>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Editor,
} from 'tiptap-vuetify';

@Component({
  components: {
    CustomButton: () => import('~/components/tiptap/CustomButton'),
    TiptapVuetify,
  },
})
export default class ArticleViewer extends Vue {
  @Prop({ type: Boolean, required: false }) value: any;
  @Prop({ type: Object, required: true }) data: any;

  placeholder: string = 'Що нового ?';

  extensions = [
    new Heading({
      levels: [1, 2, 3, 4],
    }),
    new Bold(),
    new Italic(),
    new Strike(),
    new Underline(),
    new Paragraph(),
    new BulletList(),
    new OrderedList(),
    new ListItem(),
    new Link(),
    new Blockquote(),
    new HardBreak(),
    new HorizontalRule(),

    new History(),
  ];

  clearContent() {
    return (this.data.content = null);
  }

  saveContent() {
    if (this.data.content) {
      return console.log(this.data.content);
    }

    return;
  }

  setBackground(data) {
    if (data.src) {
      return {
        height: '25vh',
        'background-image': `url(${data.src})`,
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
