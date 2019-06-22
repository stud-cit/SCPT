<template>
  <v-layout row justify-center app mt-2 mb-2>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn large round block color="indigo" dark v-on="on"
          >Регистрация на курсы</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Регистрация на курсы</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Имя*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Отчество"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Фамиллия*"
                  hint="example of persistent helper text"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Пароль*"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Возраст*"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*поля должны быть заполнены</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Register } from '~/models';
@Component({})
export default class Regitser extends Vue {
  dialog: boolean = false;
}
</script>
<style>
.headline {
  margin: auto;
}
</style>
