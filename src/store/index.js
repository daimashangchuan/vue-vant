import Vue from "vue";
import Vuex from "vuex";
import AppStore from "./AppStore";
import TextStore from "./TextStore"


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AppStore,
    TextStore
  }
});
