import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from 'store';

export interface State {
  [x: string]: any;
}
export const state = (): State => ({
  staticContent: {
    pages:[
      { title: 'Головна', icon: 'mdi-home', to: '/' },
      { title: 'Напрямки', icon: 'mdi-ticket', to: '/directions' },
      { title: 'Документи', icon: 'mdi-file-document', to: '/docs' },
      { title: 'Галерея', icon: 'mdi-animation', to: '/gallery' },
      { title: 'Контакти', icon: 'mdi-contacts', to: '/contact' },
      { title: 'Про нас', icon: 'mdi-information-variant', to: '/about' },
    ],

    invites:[
      { icon: 'mdi-instagram', to: '//google.com.ua' },
      { icon: 'mdi-facebook', to: '//google.com.ru' },
      { icon: 'mdi-linkedin', to: '//google.com.sd' },
      { icon: 'mdi-twitter', to: '//google.com' },
    ],

    carusel: new Array(5).fill('').map((item, i) => ({
      src: `https://picsum.photos/1366/728?image=${i * 5 + 10}`,
    })),
  }
});

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

  getConfig(state) {
    return state.staticContent;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit, getters }, { $axios, redirect }) {
    const config = await $axios.$get('/')

    commit("setConfig", config)

    if(!getters.isConfigure) {
      return redirect('/admin/auth')
    }
  },

  async getArticle ({ commit }, { id }) {
    const article = await this.$axios.$get(`articles/1`);
    commit('setArticle', { article })
  },
};

export const mutations: MutationTree<RootState> = {
  setConfig(state: RootState, config: any): void {
   state.config = { ...state.config, ...config}
 },
 
  setArticle(state: RootState, { article }): void {
    state.article = article;
  },
};
