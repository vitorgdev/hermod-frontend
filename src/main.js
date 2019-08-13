import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Api from "./api";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/scss/hermod.scss";

Vue.use(BootstrapVue);

import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);

Api.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
