<template>
  <v-flex>
    <v-container fluid grid-list-lg>
      <v-card flat>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Напрями</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title word-wrap: normal>{{
                    item.title
                  }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
        <Register></Register>
      </v-card>
    </v-container>
  </v-flex>
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
}
</script>
