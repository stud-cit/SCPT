<template>
    <v-bottom-nav shift dark color = "indigo" fixed class="white--text hidden-sm-and-up" :value="activeBtn">
          <v-btn  to="/" exact>
            <v-icon >mdi-home</v-icon>
            <span>Main</span>
          </v-btn>
          <v-btn  to="/docs" exact>
            <v-icon >mdi-file-document</v-icon>
            <span>Docs</span>
          </v-btn>
          <v-btn  to="/gallery" exact>
            <v-icon >mdi-animation</v-icon>
            <span>Gallery</span>
          </v-btn>
          <v-btn  to="/contact" exact>
            <v-icon >mdi-contacts</v-icon>
            <span>Contacts</span>
          </v-btn>
          <v-btn  to="/about" exact>
            <v-icon >mdi-information-variant</v-icon>
            <span>About</span>
          </v-btn>
    </v-bottom-nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Pages } from "~/models";

@Component({
    data:() =>  ({
        activeBtn: 1,
  }),
})
export default class BottomNavigation extends Vue {
  @Prop({ type: Array, required: true }) pages: [Pages]
}
</script>

<style></style>
