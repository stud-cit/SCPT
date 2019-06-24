<template>
  <ValidationProvider :vid="vid" :name="$attrs.label" :rules="rules">
    <v-text-field
      slot-scope="{ errors, valid }"
      v-model="value"
      :error-messages="errors"
      :success="valid"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';

@Component({
  components: {
    ValidationProvider,
  },
})
export default class TextField extends Vue {
  @Prop({ type: String, required: true }) rules: string;
  @Prop({ type: String, required: false }) vid: string;

  value: string = '';
}
</script>
