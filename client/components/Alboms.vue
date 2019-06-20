<template>
    <v-flex xs12 row wrap>
        <v-card flat v-for = "(period,i) in this.$props.period" :key = "i">
            <v-layout row wrap mb-5>
                <v-card-title primary-title>
                    <v-layout row wrap justify-start pl-5>
                        <h1>{{period.title}}</h1>
                    </v-layout>
                </v-card-title>
                <v-container
                    fluid
                    grid-list-lg
                    >
                    <v-layout row wrap>
                        <v-flex
                            v-for="(photo,i) in period.photos"
                            :key="i"
                            xs12 sm12 md4 lg3
                            pa-2>
                            <v-card flat tile>
                                <v-dialog v-model="photo.dialog"  max-width="1000px" dark>
                                    <template v-slot:activator="{ on }">
                                        <v-btn left depressed flat dark v-on="on" class = "gallery">
                                            <v-img
                                                :src="photo.src"
                                                aspect-ratio="2.75"
                                                max-height="200px"
                                                >
                                            </v-img>
                                        </v-btn>
                                    </template>
                                    <v-card light tile>
                                        <v-card-actions>
                                            <v-flex column>
                                                <v-layout row wrap justify-end>
                                                    <v-btn class = "img_btn" absolute small outline color="indigo" flat fab @click="photo.dialog = false">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                    <v-img
                                                        :src="photo.src"
                                                        aspect-ratio="2.75"
                                                        >
                                                    </v-img>
                                                </v-layout>
                                            </v-flex>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>

            </v-layout>


        </v-card>
    </v-flex>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { photos } from "~/models";

@Component({
    data: () => ({
        dialog: false
    })
})
export default class photos extends Vue {
    @Prop({ type: Array, required: true }) period: [photos]
}


</script>

<style>
    .gallery{
        height: 100%;
        width: 100%;
    }
    .img_btn{
        margin-top: 20px;
    }
</style>
