<template>
  <v-app light>
    <Toolbar :pages="pages"/>
    <slider></slider>
    <v-content>
      <v-layout xs12 row wrap>
        <v-flex column xs10 md10 sm10 lg2 pt-1>
            <sidebar :items="items"></sidebar>
            <Register/>
        </v-flex>
        <v-flex xs12 sm12 md12 lg9>
          <nuxt/>
        </v-flex>
      </v-layout>
    </v-content>

    </v-flex>
    <Footer :invites="invites" />
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Toolbar: () => import("~/components/Toolbar"),
    Footer: () => import("~/components/Footer"),
    Slider: () => import("~/components/slider.vue"),
    sidebar : () => import("~/components/sidebar.vue"),
    Register : () => import("~/components/register.vue")
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
    ],
    items: [
          {
            icon: 'mdi-heart',
            title: "Організація життєзабезпечення об'єднаних територіальних громад, селищних та сільских рад",
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-flower-poppy',
            title: 'Основи садівництва',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-inbox-multiple',
            title: 'Основи бджільництва',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-pine-tree',
            title: 'Благоустрій та озелення території з елементами ландшафтного дизайну',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-store',
            title: 'Основи малого підприємництва',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-laptop',
            title: "Комп'ютерні теехнології обробки бухгалтерської документації",
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-domain',
            title: 'Основи службового етикету та сучасне діловодство',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-creation',
            title: 'Основи перукарської справи',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-shoe-print',
            title: 'Технологія ремонту взуття та одягу',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          },
          {
            icon: 'mdi-brush',
            title: 'Художне оздоблення одягу у швейному виробництві',
            items: [
              { icon :'mdi-file-document',title: 'Документація'},
              { icon :'mdi-presentation',title: 'Презентація' },
              { icon :'mdi-information-variant',title: 'Загальна інформація'}
            ]
          }
      ],

  })
})
export default class DefaultLayuot extends Vue {}
</script>
