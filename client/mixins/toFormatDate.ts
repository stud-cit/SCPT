export default {
  methods: {
    toFormatDate(date: Date) {
      return new Date(date).toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
