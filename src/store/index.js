import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: "Hello world",
    },
    mutations: {
        UPDATE_MESSAGE(state, payload) {
            state.message = payload;
        },
    },
    actions: {},
    modules: {},
});