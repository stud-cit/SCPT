<template>
  <v-app>
    <v-toolbar app dark class="white--text pl-0 pr-0" color="indigo">
      <v-toolbar-title>
        <v-icon>mdi-account-star</v-icon>
        Admin Page
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items
        v-for="(page, i) in pages"
        :key="i"
        class="hidden-sm-and-down"
      >
        <v-btn flat :to="page.to" exact>
          {{ page.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="auth" flat>Exit</v-btn>
      </v-toolbar-items>

      <v-speed-dial
        v-model="burger"
        direction="bottom"
        transition="scale-transition"
        class="hidden-md-and-up"
      >
        <template v-slot:activator>
          <v-btn v-model="burger" fab icon small>
            <v-icon medium>mdi-menu</v-icon>
            <v-icon medium>mdi-close</v-icon>
          </v-btn>
        </template>
        <v-btn
          v-for="(page, i) in pages"
          :key="i"
          :to="page.to"
          exact
          fab
          small
          color="indigo"
        >
          <v-icon>{{ page.icon }}</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-toolbar>
    <v-navigation-drawer app class="indigo" v-model="draver" dark floating clipped>
      <v-toolbar flat color= "indigo">
        <v-list>
          <v-divider/>
          <v-list-tile>
            <v-list-tile-title class="title text-xs-left">
              Advanced Settings
            </v-list-tile-title>
          </v-list-tile>
          <v-divider/>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        >
        <v-list-tile-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class = 'white--text'>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-footer height="auto" color="indigo" inset fixed>
        <v-flex column pb-1>
          <v-divider/>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Change Login
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Change Password
            </v-list-tile-content>
          </v-list-tile>
          <v-divider/>
        </v-flex>
      </v-footer>
    </v-list>
  </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class DashboardLayout extends Vue {
  burger: boolean = false;
  draver: boolean = true;

  pages = [
    { title: 'Головна', icon: 'mdi-home', to: '/' },
    { title: 'Напрямки', icon: 'mdi-ticket', to: '/directions' },
    { title: 'Документи', icon: 'mdi-file-document', to: '/docs' },
    { title: 'Галерея', icon: 'mdi-animation', to: '/gallery' },
    { title: 'Контакти', icon: 'mdi-contacts', to: '/contact' },
    { title: 'Про нас', icon: 'mdi-information-variant', to: '/about' },
  ];

  items = [
    { title : 'Курси', to: '../admin/courses'}
  ]
}
</script>
