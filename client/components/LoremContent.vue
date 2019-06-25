<template>
  <v-layout row wrap>
    <v-flex tag="h1" class="headline">Lorem Ipsum</v-flex>
    <v-flex d-flex xs12 order-xs5>
      <v-layout column>
        <v-flex v-for="i in size" :key="i">
          <v-card-text>{{ lorem }}</v-card-text>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  data: () => ({}),
})
export default class LoremContent extends Vue {
  @Prop({ type: Number, required: true }) size: number;

  lorem: string = `Lorem ipsum dolor sit amet, mel at clita quando. Te sit orati
  o vitup eratoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiu
  nt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argume
  ntum ius ad. Pri eu justo aeque torquatos.`;
}
</script>

<style></style>
