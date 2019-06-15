<template>
  <v-container>
    <LoremContent :size="+this.$route.params.id" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoremContent: () => import("~/components/LoremContent")
  },
  head: {
    title: "Gen page"
  },
})
export default class NewsPage extends Vue {
  validate ({ params }) {
    // Должен быть числом
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped></style>
