import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

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
    const code = error.response.status;
    switch (code) {
      case 500:
        console.log(error.response.data);
        break;
      case 404:
        console.log(error.response.data);
        break;
      case 0:
        console.log(error.response.data);
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
    return Vue.axios.get(`${resource}/${slug}`);
  },

  async post(resource, params) {
    return new Promise(resolve => {
      const result = Vue.axios.post(`${resource}`, JSON.stringify(params));
      resolve(result);
    });
  },

  put(resource, id, params) {
    return Vue.axios.put(`${resource}/${id}`, JSON.stringify(params));
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
