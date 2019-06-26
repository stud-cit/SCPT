import Vue from 'vue';
import Vuetify, {
  VTextField,
  VTooltip,
  VToolbar,
  VCard,
  VIcon,
  VBtn,
} from 'vuetify/lib';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify';

import colors from 'vuetify/es5/util/colors';
import '@mdi/font/css/materialdesignicons.css';
import 'tiptap-vuetify/dist/main.css';

const iconfont = 'mdi';

Vue.use(Vuetify, {
  iconfont: iconfont,
  options: {
    customProperties: true,
  },
  components: {
    VTextField,
    VTooltip,
    VToolbar,
    VCard,
    VIcon,
    VBtn,
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

Vue.use(TiptapVuetifyPlugin, {
  iconsGroup: iconfont,
});
