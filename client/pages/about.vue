<template>
  <v-container>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  head: {
    title: 'Про нас',
  },
  components: {
    LoremContent: () => import('~/components/LoremContent'),
  },
})
export default class AboutPage extends Vue {}
</script>

<style scoped></style>
