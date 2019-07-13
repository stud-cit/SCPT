<template>
  <v-container grid-list-lg>
    <v-layout align-cente wrap>

      <v-flex v-if="loggedInUser" xs12 sm6 md4 lg3>
        <v-card>
          <v-text-field :label="label" hide-details box/>
          <v-responsive :aspect-ratio="70 / 99">
            <v-layout align-center justify-center fill-height>
              <v-btn @click="$refs.file.click()" color="grey" outline fab large>
                <v-icon large>mdi-file</v-icon>
                <input
                  v-show
                  ref="file"
                  type="file" accept="application/pdf"
                  @change="onFileChange"
                />
              </v-btn>
            </v-layout>
          </v-responsive>
        </v-card>
      </v-flex>

      <v-flex v-for="(doc, i) in documents" :key="i" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title class="grey lighten-3 py-1">
            <span class="title primary--text text-truncate">
              {{ doc.title }}
            </span>
            <v-spacer/>
            <v-btn
              v-if="loggedInUser"
              @click="deleteDoc(i)"
              flat icon color="error"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-title>
          <CustomImage
            :src="doc.src"
            :aspect-ratio="70 / 99"
            @click="deleteDoc(i)"
          />
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  head: {
    title: 'Документи',
  },
  components: {
    CustomImage: () => import('~/components/CustomImage'),
  },
  computed: {
    ...mapGetters(['getConfig', 'loggedInUser']),
  },
})
export default class DocsPage extends Vue {
  uploadFile: object = null;
  label: string = 'Завантажити документ';

  documents = new Array(2).fill('').map((item, i) => ({
    title: `Документ ${i}`,
    src: `https://picsum.photos/1366/728?image=${i}`,
    to: '/',
  }));

  async onFileChange(e) {
    const data = new FormData();
    this.uploadFile = e.target.files[0];
    data.append('file', this.uploadFile);

    const document = await this.$axios.$post(`upload/`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return  await this.documents.push(document)
  }
}
</script>

<style></style>
