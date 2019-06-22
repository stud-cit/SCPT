<template>
  <v-app light>
    <Toolbar :pages="pages" />
    <Carousel :items="carusel" />
    <BottomNavigation :pages="pages" />
    <v-content>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <Sidebar :items="directions" />
        </v-flex>
        <v-flex xs12 md9>
          <nuxt />
        </v-flex>
      </v-layout>
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

  carusel = new Array(5).fill(`./img/placeholder.svg`);

  directions = [
    {
      icon: 'mdi-heart',
      title:
        "Організація життєзабезпечення об'єднаних територіальних громад, селищних та сільских рад",
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-flower-poppy',
      title: 'Основи садівництва',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-inbox-multiple',
      title: 'Основи бджільництва',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-pine-tree',
      title:
        'Благоустрій та озелення території з елементами ландшафтного дизайну',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-store',
      title: 'Основи малого підприємництва',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-laptop',
      title: "Комп'ютерні теехнології обробки бухгалтерської документації",
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-domain',
      title: 'Основи службового етикету та сучасне діловодство',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-creation',
      title: 'Основи перукарської справи',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-shoe-print',
      title: 'Технологія ремонту взуття та одягу',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
    {
      icon: 'mdi-brush',
      title: 'Художне оздоблення одягу у швейному виробництві',
      items: [
        { icon: 'mdi-file-document', title: 'Документація' },
        { icon: 'mdi-presentation', title: 'Презентація' },
        { icon: 'mdi-information-variant', title: 'Загальна інформація' },
      ],
    },
  ];
}
</script>
