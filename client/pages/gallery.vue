<template>
  <v-container>
    <alboms :period = "period"/>
    <LoremContent :size="15" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoremContent: () => import("~/components/LoremContent"),
    alboms:() => import("~/components/alboms")
  },
  head: {
    title: "Галерея"
  },
  data: () =>({
      period:[
          {
          title:  "July",
          src : 'https://picsum.photos/1920/1080?random=1"',
              photos:[
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=1"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=2"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=3"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=4"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=5"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=6"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=7"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=8"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=9"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=10"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=11"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=12"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=13"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=14"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=15"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=16"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=17"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=18"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=19"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=20"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=21"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=22"'},
                {dialog: false ,src: 'https://picsum.photos/1920/1080?random=23"'},
            ]
        },
        {
            title: "June",
            src : 'https://picsum.photos/1920/1080?random=1"',
            photos:[
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=1"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=2"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=3"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=4"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=5"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=6"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=7"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=8"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=9"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=10"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=11"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=12"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=13"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=14"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=15"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=16"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=17"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=18"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=19"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=20"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=21"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=22"'},
              {dialog: false ,src: 'https://picsum.photos/1920/1080?random=23"'},
          ]
      },
      {
          title: "May",
          src : 'https://picsum.photos/1920/1080?random=1"',
          photos:[
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=1"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=2"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=3"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=4"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=5"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=6"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=7"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=8"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=9"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=10"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=11"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=12"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=13"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=14"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=15"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=16"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=17"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=18"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=19"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=20"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=21"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=22"'},
            {dialog: false ,src: 'https://picsum.photos/1920/1080?random=23"'},
        ]
        },



      ]

  })
})
export default class GalleryPage extends Vue {}
</script>

<style scoped></style>
