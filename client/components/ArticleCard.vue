<template>
  <v-flex v-bind="$attrs" v-on="$listeners">
    <v-card :to="`/${article.id}`">
      <CustomImage :data="article" :aspect-ratio="6 / 4">
        <v-container>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text">
              {{ article.title }}
            </span>
          </v-flex>
        </v-container>
      </CustomImage>
      <v-card-title primary-title>
        {{ descriptionPrepare(article.description) }}
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    CustomImage: () => import('~/components/CustomImage'),
  },
})
export default class ArticleCard extends Vue {
  @Prop({ type: Object, required: true }) article: any;
  descriptionLength = 140;

  descriptionPrepare(str) {
    if (str.length < this.descriptionLength) return str;
    return `${str.substr(0, this.descriptionLength)}...`;
  }
}
</script>
