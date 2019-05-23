import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Api from "./api";

import VueSweetalert2 from "vue-sweetalert2";

import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);

Api.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
