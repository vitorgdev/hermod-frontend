const set = data => {
  localStorage.setItem("token", data);
};

const get = () => {
  return localStorage.getItem("token");
};

const remove = () => {
  localStorage.removeItem("token");
};

export default { set, get, remove };
