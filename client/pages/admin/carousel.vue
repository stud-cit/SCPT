<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex xs12 sm5 md4 lg2 py-3>
        <v-card>
          <v-responsive :aspect-ratio="70 / 99">
            <v-layout align-center justify-center fill-height>
              <v-btn @click="$refs.file.click()" outline fab large>
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </v-layout>
          </v-responsive>
        </v-card>
      </v-flex>

      <v-flex v-for="(src, i) in carousel" :key="i" xs12 sm5 md4 lg2 py-3>
        <v-card>
          <CustomImage :data="src" :aspect-ratio="70 / 99" />
            <v-btn @click="deleteImage(i)" color="primary" absolute right bottom fab>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-card>
      </v-flex>
    </v-layout>

    <input
      v-show
      ref="file"
      type="file"
      accept="image/*"
      @change="onFileChange"
    />
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
  currentItem = null;
  carousel = new Array(5).fill('').map((item, i) => ({
    src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
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

    return this.carousel.push({
      src: src
    })
  }

  deleteImage(i) {
    this.carousel.splice(i, 1)
  }
}
</script>

<style scoped></style>
