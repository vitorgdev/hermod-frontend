import api from "../_api";

const auth = async (context, data) => {
  const result = await api.store(data);
  context.commit("SET_USER_LOGGED_IN", result);
};

export default {
  auth
};
