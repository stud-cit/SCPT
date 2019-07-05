import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from 'store';

export interface State {
  [x: string]: any;
}

export const state = (): State => ({});

export const getters: GetterTree<RootState, RootState> = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  isConfigure(state) {
    return Object.keys(state.config).length;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit, getters }, { $axios, redirect }) {
    const config = await $axios.$get('/');

    commit('setConfig', config);

    if (!getters.isConfigure) {
      return redirect('/admin/auth');
    }
  },

  async getArticle ({ commit }, { id }) {
    const article = await this.$axios.$get(`articles/1`);
    commit('setArticle', { article })
  },
};

export const mutations: MutationTree<RootState> = {
  setConfig(state: RootState, config: any): void {
    state.config = config;
  },

  setArticle(state: RootState, { article }): void {
    state.article = article;
  },
};
