<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm5 md4>
      <v-card>
        <v-card-title primary-title>
          <v-layout align-center column>
            <!-- <v-flex xs12 class="headline primary--text">
              Title
              <v-icon color="primary" large>mdi-database-check</v-icon>
              <h2 class="title grey--text pt-4">
                Description
              </h2>
            </v-flex> -->
          </v-layout>
        </v-card-title>

        <ValidationObserver
          ref="observer"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="singup()"
        >
          <v-card-text>
            <TextField
              rules="required"
              v-model="email"
              type="text"
              label="Логін"
            />
            <TextField
              :rules="'required' + getPasswordRules()"
              v-model="password"
              type="password"
              label="Пароль"
              vid="confirm"
            />
            <TextField
              v-if="true"
              rules="required|confirmed:confirm"
              type="password"
              label="Підтвердіть пароль"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn v-if="true" color="primary" flat @click="singin">
              Зареєструватися
            </v-btn>
            <v-btn v-else color="primary" outline @click="singin">
              Увійти
            </v-btn>
          </v-card-actions>
        </ValidationObserver>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver } from 'vee-validate';

@Component({
  layout: 'blank',
  head: {
    title: 'Вхід',
  },
  components: {
    TextField: () => import('~/components/inputs/TextField'),
    ValidationObserver,
  },
})
export default class AuthPage extends Vue {
  email: string = '';
  password: string = '';

  getPasswordRules() {
    if (false) {
      return '|min:8';
    }

    return '';
  }

  async singin() {
    const isValid = await this.$refs.observer.validate();
    if (!isValid) return;

    // return await this.$auth.loginWith('local', {
    //   data: {
    //     email: this.email,
    //     password: this.password
    //   },
    // });
  }
}
</script>
