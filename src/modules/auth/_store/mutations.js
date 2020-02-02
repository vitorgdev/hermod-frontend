import jwt from "@/api/jwt";

const SET_USER_LOGGED_IN = (state, auth) => {
  state.userLoggedIn = auth.data;
  jwt.set(auth.data.auth.token);
};

export default {
  SET_USER_LOGGED_IN
};
