<template>
    <v-layout row wrap>
        <v-container
            fluid
            grid-list-lg
            >
            <v-layout row wrap>
                <v-flex xs12 v-for = "(doc,i) in this.$props.documents" :key = "i">
                    <v-btn block :to= "doc.link" color="indigo" class = "white--text">
                        <v-layout pa-3 row wrap>
                            <v-icon>mdi-file-document</v-icon>
                        </v-layout>
                        {{ doc.title }}
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { documents } from "~/models";

@Component({})
export default class documents extends Vue {
    @Prop({ type: Array, required: true }) documents: [documents]
}
</script>

<style lang="css" scoped>
</style>
