import Vue from 'vue';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify/lib';

import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  options: {
    customProperties: true,
  },
  theme: {
    primary: colors.deepPurple.base,
    secondary: colors.purple.darken3,
    accent: colors.pink.darken2,
    error: colors.red.darken4,
    warning: colors.orange.darken4,
    info: colors.blue.base,
    success: colors.green.base,
  },
});
