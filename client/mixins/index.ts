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

    imageLoadOnError() {
      return 0;
    },

    imagePlaceholder() {
      return '/img/placeholder.svg';
    },
  },
});
