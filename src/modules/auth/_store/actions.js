import api from "../_api";

const auth = async (context, data) => {
  const result = await api.store(data);
  context.commit("SET_USER_LOGGED_IN", result);
};

const check = async (context, data) => {
  const result = await api.fetch(data);
  context.commit("SET_USER_LOGGED_IN", result);
};

export default {
  auth,
  check
};
