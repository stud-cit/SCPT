<template>
  <v-container>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoremContent: () => import("~/components/LoremContent")
  },
  head: {
    title: "Галерея"
  },
})
export default class GalleryPage extends Vue {}
</script>

<style scoped></style>
