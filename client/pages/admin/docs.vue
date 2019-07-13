<template>
  <v-container grid-list-lg>
    <v-layout justify-start wrap>
      <v-flex xs12 sm6 md4 lg3>
        <v-card color="grey--text">
          <v-responsive :aspect-ratio="70 / 99">
            <v-layout align-center justify-center fill-height>
              <v-btn @click="$refs.file.click()" color="grey" outline fab large>
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </v-layout>
          </v-responsive>
          <v-divider />
          <v-card-actions>
            <span class="text-truncate">Завантажити документ</span>
            <v-spacer/>
            <v-btn disabled flat icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex v-for="(doc, i) in documents" :key="i" xs12 sm6 md4 lg3>
        <v-card>
          <CustomImage :src="doc.src" :aspect-ratio="70 / 99" />
          <v-card-actions>
            <span class="text-truncate">{{ doc.title }}</span>
            <v-spacer/>
            <v-btn @click="deleteDoc(i)" color="error" flat icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <input
                  v-show
                  ref="file"
                  type="file"
                  accept="image/*"
                  @change="onFileChange"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-space-around aling-center fill-height>
            <v-btn color="primary" text @click="">
              Закрити
            </v-btn>
            <v-btn color="primary" text @click="">
              Зберегти
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
  editDoc = null;
  documents = new Array(5).fill('').map((item, i) => ({
    title: `Документ ${i}`,
    src: `https://picsum.photos/1366/728?image=${i}`,
    lazySrc: `https://picsum.photos/10/6?image=${i}`,
    to: '/',
  }));

  async onFileChange(e) {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    const patch = await this.$axios.$post(`upload/`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return this.documents.push({
      src: patch
    })
  }

  deleteDoc(i) {
    this.documents.splice(i, 1)
  }
}
</script>

<style scoped></style>
