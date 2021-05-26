import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import websocket from "./utils/websocket"

Vue.config.productionTip = false;
Vue.prototype.$ws = websocket // 挂载全局websocket

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");