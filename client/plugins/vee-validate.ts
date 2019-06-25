import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import uk from 'vee-validate/dist/locale/uk';

Vue.use(VeeValidate, { inject: false, delay: 2 });
Validator.localize('uk', uk);
