<template>
  <v-app light>
    <Toolbar :pages="pages" />
    <Carousel :items="carusel" />
    <BottomNavigation :pages="pages" />
    <v-content>
      <nuxt />
    </v-content>
    <Footer :invites="invites" />
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Toolbar: () => import('~/components/Toolbar'),
    BottomNavigation: () => import('~/components/BottomNavigation'),
    Footer: () => import('~/components/Footer'),
    Carousel: () => import('~/components/Carousel.vue'),
    Sidebar: () => import('~/components/Sidebar.vue'),
  },
})
export default class DefaultLayuot extends Vue {
  pages = [
    { title: 'Головна', icon: 'mdi-home', to: '/' },
    { title: 'Документи', icon: 'mdi-file-document', to: '/docs' },
    { title: 'Галерея', icon: 'mdi-animation', to: '/gallery' },
    { title: 'Контакти', icon: 'mdi-contacts', to: '/contact' },
    { title: 'Про нас', icon: 'mdi-information-variant', to: '/about' },
  ];

  invites = [
    { icon: 'mdi-instagram', to: '//google.com.ua' },
    { icon: 'mdi-facebook', to: '//google.com.ru' },
    { icon: 'mdi-linkedin', to: '//google.com.sd' },
    { icon: 'mdi-twitter', to: '//google.com' },
  ];

  directions = [
    {
      icon: 'mdi-heart',
      title:
        "Організація життєзабезпечення об'єднаних територіальних громад, селищних та сільских рад",
    },
    {
      icon: 'mdi-flower-poppy',
      title: 'Основи садівництва',
    },
    {
      icon: 'mdi-inbox-multiple',
      title: 'Основи бджільництва',
    },
    {
      icon: 'mdi-pine-tree',
      title:
        'Благоустрій та озелення території з елементами ландшафтного дизайну',
    },
    {
      icon: 'mdi-store',
      title: 'Основи малого підприємництва',
    },
    {
      icon: 'mdi-laptop',
      title: "Комп'ютерні теехнології обробки бухгалтерської документації",
    },
    {
      icon: 'mdi-domain',
      title: 'Основи службового етикету та сучасне діловодство',
    },
    {
      icon: 'mdi-creation',
      title: 'Основи перукарської справи',
    },
    {
      icon: 'mdi-shoe-print',
      title: 'Технологія ремонту взуття та одягу',
    },
    {
      icon: 'mdi-brush',
      title: 'Художне оздоблення одягу у швейному виробництві',
    },
  ];

  carusel = new Array(5).fill(`./img/placeholder.svg`);
}
</script>
