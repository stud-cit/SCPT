<template>
  <ValidationProvider :name="$attrs.label" :rules="rules">
    <v-textarea
      slot-scope="{ errors, valid }"
      v-model="value"
      :error-messages="errors"
      :success="valid"
      v-bind="$attrs"
      v-on="$listeners"
      auto-grow
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';

@Component({
  components: {
    ValidationProvider,
  },
})
export default class TextArea extends Vue {
  @Prop({ type: String, required: true }) rules: string;

  value: string = '';
}
</script>
