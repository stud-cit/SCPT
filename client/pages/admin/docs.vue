<template>
  <v-container grid-list-lg>
    <v-layout align-center justify-center wrap>
      <v-flex xs12 sm5 md4 lg3>
        <v-card>
          <v-card-text>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-responsive :aspect-ratio="70 / 99">
                  <v-layout align-center justify-center row fill-height>
                    <v-btn v-on="on" outline fab large>
                      <v-icon large>mdi-plus</v-icon>
                    </v-btn>
                  </v-layout>
                </v-responsive>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field
                          v-model="editDoc.title"
                          label="Назва"
                        ></v-text-field>
                        <v-text-field
                          v-model="editDoc.src"
                          label="Дата"
                        ></v-text-field>
                        <v-text-field
                          v-model="editDoc.lazySrc"
                          label="Описание"
                        ></v-text-field>
                        <v-text-field
                          v-model="editDoc.to"
                          label="Описание"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-layout justify-space-around aling-center fill-height>
                    <v-btn color="primary" text @click="CloseDoc">
                      Закрити
                    </v-btn>
                    <v-btn color="primary" text @click="SaveDoc">
                      Зберегти
                    </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-text>
          <v-divider />
          <v-card-actions class="pt-4" style="position: relative; z-index:0">
            <span class="title mb-2">Завантажити новий документ</span>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex v-for="(doc, i) in documents" :key="i" xs12 sm5 md4 lg3>
        <v-card>
          <CustomImage :data="doc" :aspect-ratio="70 / 99" />
          <v-card-actions class="pt-4" style="position: relative; z-index:0">
            <v-btn @click="EditDoc(doc)" color="primary" absolute right top fab>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <span class="title mb-2">{{ doc.title }}</span>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'dashboard',
  head: {
    title: 'Адмін панель',
  },
  components: {
    CustomImage: () => import('~/components/CustomImage'),
  },
})
export default class AdminPage extends Vue {
  dialog: boolean = false;
  editedIndex = -1;
  editDoc = {
    title: null,
    src: null,
    lazySrc: null,
    to: '/',
  };
  defaultDoc = {
    title: null,
    src: null,
    lazySrc: null,
    to: '/',
  };
  documents = new Array(5).fill('').map((item, i) => ({
    title: `Документ ${i}`,
    src: `https://picsum.photos/1366/728?image=${i}`,
    lazySrc: `https://picsum.photos/10/6?image=${i}`,
    to: '/',
  }));

  async download(src) {
    return await 0;
  }
  EditDoc(item) {
    this.editedIndex = this.documents.indexOf(item);
    this.editDoc = Object.assign({}, item);
    this.dialog = true;
  }
  SaveDoc() {
    if (this.editedIndex > -1) {
      Object.assign(this.documents[this.editedIndex], this.editDoc);
    } else {
      this.documents.push(this.editDoc);
    }
    this.CloseDoc();
  }
  CloseDoc() {
    this.dialog = false;
    setTimeout(() => {
      this.editDoc = Object.assign({}, this.defaultDoc);
      this.editedIndex = -1;
    }, 300);
  }
}
</script>

<style scoped></style>
