<template>
  <v-container>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  middleware: ['auth'],
  layout: 'dashboard',
  head: {
    title: 'Адмін панель',
  },
  components: {
    LoremContent: () => import('~/components/LoremContent'),
  },
})
export default class AdminPage extends Vue {}
</script>

<style scoped></style>
