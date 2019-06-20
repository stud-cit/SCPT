<template>
  <v-container>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LoremContent: () => import('~/components/LoremContent'),
  },
  head: {
    title: 'Вхід',
  },
})
export default class LoginPage extends Vue {}
</script>

<style scoped></style>
