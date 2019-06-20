<template>
  <v-carousel app height="100vh">
    <v-carousel-item
      height="100vh"
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://picsum.photos/1920/1080?random=12"',
        },
        {
          src: 'https://picsum.photos/1920/1080?random=13"',
        },
        {
          src: 'https://picsum.photos/1920/1080?random=14"',
        },
        {
          src: 'https://picsum.photos/1920/1080?random=15"',
        },
        {
          src: 'https://picsum.photos/1920/1080?random=16"',
        },
      ],
    };
  },
};
</script>
