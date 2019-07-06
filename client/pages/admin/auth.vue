<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm6 md4 lg3>
      <v-card>
        <v-card-title primary-title>
          <v-layout align-center column> </v-layout>
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
              v-model="login"
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
              v-if="!isConfigure"
              rules="required|confirmed:confirm"
              type="password"
              label="Підтвердіть пароль"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn v-if="!isConfigure" color="primary" flat @click="singin">
              Зареєструватися
            </v-btn>
            <v-btn v-else color="primary" outline @click="singin">
              Увійти
            </v-btn>
          </v-card-actions>
        </ValidationObserver>
      </v-card>
      <v-alert v-model="error" type="error" dismissible>
        Неправильний логін або пароль
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver } from 'vee-validate';
import { mapGetters } from 'vuex';

@Component({
  layout: 'blank',
  middleware: ['guest'],
  head: {
    title: 'Вхід',
  },
  components: {
    TextField: () => import('~/components/inputs/TextField'),
    ValidationObserver,
  },
  computed: {
    ...mapGetters(['isConfigure']),
  },
})
export default class AuthPage extends Vue {
  login: string = null;
  password: string = null;
  error: boolean = false;

  getPasswordRules() {
    if (!this.isConfigure) {
      return '|min:8';
    }

    return '';
  }

  async singin() {
    const isValid = await this.$refs.observer.validate();
    if (!isValid) return;
    if (!this.isConfigure) {
      await this.$axios.post('users', {
        login: this.login,
        password: this.password,
      });
    }

    const auth = await this.$auth
      .loginWith('local', {
        data: {
          login: this.login,
          password: this.password,
        },
      })
      .then(data => {
        this.$router.push('/admin');
      })
      .catch(data => {
        this.error = true;
      });
  }
}
</script>
