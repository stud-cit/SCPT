import Vue from "vue";
import colors from "vuetify/es5/util/colors";
import Vuetify from "vuetify/lib";

import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, {
  iconfont: "mdi",
  options: {
    customProperties: true,
  },
  theme: {
    primary: colors.pink.base,
    secondary: colors.pink.darken3,
    accent: colors.pink.darken2,
    error: colors.orange.darken4,
    warning: colors.yellow.darken4,
    info: colors.cyan.base,
    success: colors.green.base,
  },
});
