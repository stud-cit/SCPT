<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        :class="toggleActive()"
        @click="onButtonClick()"
        fab
        small
        flat
      >
        <v-icon v-if="scope.name === 'heading'">
          mdi-format-header-{{ scope.clickOptions.level }}
        </v-icon>
        <v-icon v-else> {{ scope.icons.mdi.name }}</v-icon>
      </v-btn>
    </template>
    <template>{{ scope.tooltip }}</template>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component()
export default class CustomButton extends Vue {
  @Prop({ type: Object, required: true }) scope: any;

  onButtonClick() {
    const { commands, name, clickOptions } = this.scope;
    return commands[name](clickOptions);
  }

  toggleActive() {
    const { isActive, name, isActiveOptions } = this.scope;
    return {
      'v-btn--active': !!isActive[name] && isActive[name](isActiveOptions),
    };
  }
}
</script>
