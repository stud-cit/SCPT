<template>
  <tiptap-vuetify
    v-model="content"
    output-format="json"
    :extensions="extensions"
    :placeholder="placeholder"
  >
    <template slot="toolbar" slot-scope="{ buttons, commands, isActive }">
      <v-toolbar>
        <CustomButton
          v-for="(button, i) of buttons"
          :key="i"
          :scope="{ ...button, commands, isActive }"
        />

        <v-spacer />

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click.stop="clearContent()" fab small flat>
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </template>
          <template>
            Clear
          </template>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click.stop="saveContent()" fab small flat>
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </template>
          <template
            >Save</template
          >
        </v-tooltip>
      </v-toolbar>
    </template>
  </tiptap-vuetify>
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
} from 'tiptap-vuetify';

@Component({
  components: {
    CustomButton: () => import('~/components/tiptap/CustomButton'),
    TiptapVuetify,
  },
})
export default class TipTap extends Vue {
  placeholder: string = 'Що нового ?';
  content: string = null;

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
    return (this.content = null);
  }

  saveContent() {
    if (this.content) {
      return console.log(this.content);
    }

    return;
  }
}
</script>
