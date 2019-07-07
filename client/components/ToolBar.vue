<template>
  <v-toolbar app v-bind="$attrs" fixed dark clipped-left color="primary">
    <v-toolbar-title>
      <v-icon>mdi-vuetify</v-icon>
      {{ getConfig.title }}
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items
      v-for="(page, i) in getConfig.pages" :key="i"
      class="hidden-sm-and-down"
    >
      <v-btn flat :to="page.to" exact>
        {{ page.title }}
      </v-btn>
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
        v-for="(page, i) in getConfig.pages" :key="i"
        :to="page.to" exact
        fab small primary
      >
        <v-icon>{{ page.icon }}</v-icon>
      </v-btn>
    </v-speed-dial>

    <v-toolbar-items v-if="loggedInUser">
      <v-btn flat @click="openDashboard" icon>
        <v-icon>mdi-monitor-dashboard</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters(['getConfig', 'loggedInUser']),
  },
})
export default class ToolBar extends Vue {
  burger: boolean = false;

  getAttrs() {
    this.$attrs['height'] = '70vh';

    if ('fullscreen' in this.$attrs || this.$route.path === '/') {
      this.$attrs.height = '100vh';
    }

    return this.$attrs;
  }

  openDashboard() {
    this.$router.push('/admin')
  }
}
</script>
