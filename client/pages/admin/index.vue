<template>
  <v-container>
    <v-layout>
      <v-flex xs10>
        <v-data-table
          :headers="CallHeaders()"
          :items="items"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.course }}</td>
            <td class="text-xs-right">{{ props.item.phone }}</td>
            <td class="text-xs-right">{{ props.item.data }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <!-- <v-container>
      <LoremContent :size="15" />
    </v-container> -->
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  head: {
    title: 'Адмін панель',
  },
  components: {
    LoremContent: () => import('~/components/LoremContent'),
  },
})
export default class AdminPage extends Vue {
    headers=[
      {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name'
      },
      { text: 'Course', value: 'course' },
      { text: 'Phone', value: 'phone' },
      { text: 'data', value: 'data' },
    ];
    items = new Array(15).fill('').map((item, i) => ({
      name: `lorem${i+1}`,
      course: `lorem${i+1}`,
      phone: `lorem${i+1}`,
      data: `lorem${i+1}`
    }));
    CallHeaders(){
      return this.headers;
    };
  }
</script>

<style scoped></style>
