import NuxtConfiguration from '@nuxt/config';
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';

import { ConfigService } from './utils/config/config.service';
const configService = new ConfigService();

const config: NuxtConfiguration = {
  /*
   ** Server options
   */
  server: {
    port: configService.getSetting('APP_PORT'),
    timing: configService.getSetting('APP_TIMG'),
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s - ${configService.getSetting('APP_NAME')}`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
      {
        hid: 'description',
        name: 'description',
        content: configService.getSetting('APP_DESC'),
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/mixins', '~/plugins/vuetify', '~/plugins/vee-validate'],
  /*
   * Build configuration
   */

  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  axios: {
    baseURL: 'http://127.0.0.1:8081/api',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth', method: 'post', propertyName: 'token' },
          user: { url: '/users', method: 'get', propertyName: '' },
          logout: false,
        },
      },
    },
  },

  build: {
    extractCSS: true,
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    typescript: {
      typeCheck: false,
    },
  },
};

export default config;
