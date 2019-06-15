<template>
  <v-container>
    <documents :documents = "documents"></documents>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoremContent: () => import("~/components/LoremContent"),
    documents : () => import("~/components/documents")
  },
  head: {
    title: "Документи"
  },
  data: () => ({
      documents: [
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},
          {title : "Первый документ", link:"/"},

      ]
  })
})
export default class DocsPage extends Vue {}
</script>

<style scoped></style>
