import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/es5/util/colors';
import '@mdi/font/css/materialdesignicons.css';

import LogoIcon from '../components/LogoIcon.vue';

const iconfont = 'mdi';

Vue.use(Vuetify, {
  iconfont: iconfont,
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
  icons: {
    logo: {
      component: LogoIcon
    }
  }
});
