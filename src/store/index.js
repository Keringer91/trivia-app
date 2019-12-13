import Vue from 'vue'
import Vuex from 'vuex'
import {TriviaStore} from './TriviaStoreModule'
import {ChuckStore} from './ChuckStoreModule'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    TriviaStoreModule,
    ChuckStoreModule
  }
});

export default store;
