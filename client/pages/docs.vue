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
    title: "Документи"
  },
})
export default class DocsPage extends Vue {}
</script>

<style scoped></style>
