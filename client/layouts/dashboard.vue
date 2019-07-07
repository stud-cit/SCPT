<template>
  <v-app>

    <v-navigation-drawer app dark floating clipped class="primary" >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-action class="white--text">
            <v-icon>mdi-settings</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-footer inset fixed height="auto" color="primary">
          <v-flex>
            <v-divider />
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>mdi-account-badge-alert-outline</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Зміна логіна / пароля
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="logout">
              <v-list-tile-action>
                <v-icon>mdi-logout</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Вихід
              </v-list-tile-content>
            </v-list-tile>

          </v-flex>
        </v-footer>
      </v-list>
    </v-navigation-drawer>

    <ToolBar flat />

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  middleware: ['auth'],
  components: {
    ToolBar: () => import('~/components/ToolBar.vue'),
  },
  computed: {
    ...mapGetters(['getConfig']),
  },
})
export default class DashboardLayout extends Vue {
  drawer: boolean = true;

  pages = [
    { title: 'Головна', icon: 'mdi-home', to: '/' },
    { title: 'Напрямки', icon: 'mdi-ticket', to: '/directions' },
    { title: 'Документи', icon: 'mdi-file-document', to: '/docs' },
    { title: 'Галерея', icon: 'mdi-animation', to: '/gallery' },
    { title: 'Контакти', icon: 'mdi-contacts', to: '/contact' },
    { title: 'Про нас', icon: 'mdi-information-variant', to: '/about' },
  ];

  items = [
    { title: 'Загальні', to: '../admin/carousel' },
    { title: 'Напрямки', to: '../admin/courses' },
    { title: 'Документи', to: '../admin/docs' },
  ];

  logout() {
    this.$router.push('/admin/auth')
    return this.$auth.logout();
  }
}
</script>
