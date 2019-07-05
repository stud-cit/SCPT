import Vue from 'vue';

Vue.mixin({
  methods: {
    toFormatDate(date: Date) {
      return new Date(date).toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    getImage (src) {
      // const image = require(`~/assets/img/${src}`);
      return require(`~/static/img/placeholder.svg`);
    }
  },
});
