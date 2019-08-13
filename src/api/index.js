import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import swal from "sweetalert2";

const Api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = `http://localhost:3000/v1/`;
    this.setupHeaders();
    Vue.axios.interceptors.response.use(function(response) {
      return response;
    }, this.handleError);
  },

  setupHeaders() {
    Vue.axios.defaults.headers.common["Content-Type"] = "application/json";
    Vue.axios.defaults.headers.common["Accept"] = "application/json";
    ["get", "post", "put", "patch"].forEach(function(method) {
      Vue.axios.defaults.headers[method]["Content-Type"] = "application/json";
    });
  },

  handleError(error) {
    console.log(error);

    const code = error.status ? error.response.status : 0;
    let timerInterval = "";
    switch (code) {
      case 500:
        swal
          .fire({
            type: "error",
            title: "Oops...",
            text: "O Servidor está fora do ar!",
            timer: 2000,
            customClass: {
              container: "handler-error"
            },
            onBeforeOpen: () => {
              swal.showLoading();
            },
            onClose: () => {
              clearInterval(timerInterval);
            }
          })
          .then(result => {
            if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.timer
            ) {
              console.log("I was closed by the timer");
            }
          });
        break;
      case 404:
        swal
          .fire({
            type: "error",
            title: "Oops...",
            text: "Pagina não encontrada!",
            timer: 2000,
            customClass: {
              container: "handler-error"
            },
            onBeforeOpen: () => {
              swal.showLoading();
            },
            onClose: () => {
              clearInterval(timerInterval);
            }
          })
          .then(result => {
            if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.timer
            ) {
              console.log("I was closed by the timer");
            }
          });
        break;
      case 0:
        swal
          .fire({
            type: "error",
            title: "Oops...",
            text: "O Servidor está fora do ar!",
            timer: 2000,
            customClass: {
              container: "handler-error"
            },
            onBeforeOpen: () => {
              swal.showLoading();
            },
            onClose: () => {
              clearInterval(timerInterval);
            }
          })
          .then(result => {
            if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.timer
            ) {
              console.log("I was closed by the timer");
            }
          });
        break;
    }
    return Promise.reject(error);
  },

  async query(resource, data) {
    return new Promise(resolve => {
      const result = Vue.axios.get(resource, { params: data });
      resolve(result);
    });
  },

  get(resource, slug = "") {
    return new Promise(resolve => {
      const result = Vue.axios.get(`${resource}/${slug}`);
      resolve(result);
    });
  },

  async post(resource, params) {
    return new Promise(resolve => {
      const result = Vue.axios.post(`${resource}`, JSON.stringify(params));
      resolve(result);
    });
  },

  put(resource, id, params) {
    return new Promise(resolve => {
      const result = Vue.axios.put(`${resource}/${id}`, JSON.stringify(params));
      resolve(result);
    });
  },

  patch(resource, id, params) {
    return Vue.axios.patch(`${resource}/${id}`, JSON.stringify(params));
  },

  delete(resource, id) {
    return new Promise(resolve => {
      const result = Vue.axios.delete(`${resource}/${id}`);
      resolve(result);
    });
  }
};

export default Api;
