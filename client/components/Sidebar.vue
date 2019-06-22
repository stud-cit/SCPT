<template>
  <v-container grid-list-lg>
    <v-layout align-center justify-center wrap>
      <v-flex>
        <v-card flat>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Напрями</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <v-list-group
              no-action
              v-for="item in items"
              v-model="item.active"
              :key="item.title"
              :prepend-icon="item.icon"
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <v-list-tile v-for="(action, i) in actions" :key="i" @click="">
                <v-list-tile-action>
                  <v-icon>{{ action.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ action.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-card>

        <Register />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Bar } from '~/models';

@Component({
  components: {
    Register: () => import('~/components/Register'),
  },
})
export default class sidebar extends Vue {
  @Prop({ type: Array, required: true }) items: [Bar];

  actions = [
    { icon: 'mdi-file-document', title: 'Документація' },
    { icon: 'mdi-presentation', title: 'Презентація' },
    { icon: 'mdi-information-variant', title: 'Загальна інформація' },
  ];
}
</script>
