import api from "@/api";

const set = data => {
  localStorage.setItem("token", data);
  api.init();
};

const get = () => {
  return localStorage.getItem("token");
};

const remove = () => {
  localStorage.removeItem("token");
};

export default { set, get, remove };
