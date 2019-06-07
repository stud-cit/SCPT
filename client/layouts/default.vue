<template>
  <v-app dark>
    <Toolbar :pages="pages" />
    <v-content>
      <nuxt />
    </v-content>
    <Footer :invites="invites" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Toolbar: () => import("~/components/Toolbar"),
    Footer: () => import("~/components/Footer")
  },
  data: () => ({
    pages: [
      { title: "Головна", icon: "mdi-home", to: "/" },
      { title: "Документи", icon: "mdi-file-document", to: "/docs" },
      { title: "Галерея", icon: "mdi-animation", to: "/gallery" },
      { title: "Контакти", icon: "mdi-contacts", to: "/contact" },
      { title: "Про нас", icon: "mdi-information-variant", to: "/about" }
    ],
    invites: [
      { icon: "mdi-instagram", to: "//google.com.ua" },
      { icon: "mdi-facebook", to: "//google.com.ru" },
      { icon: "mdi-linkedin", to: "//google.com.sd" },
      { icon: "mdi-twitter", to: "//google.com" }
    ]
  })
})
export default class DefaultLayuot extends Vue {}
</script>
