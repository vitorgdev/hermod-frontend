const SET_ALL = (state, users) => {
  state.users = users;
};

const UPDATE = (state, user) => {
  let index = state.users.findIndex(element => element._id == user.data._id);
  state.users[index] = user.data;
  state.user = user;
};

const STORE = (state, user) => {
  state.users.push(user.data);
};

const REMOVE = (state, user) => {
  let index = state.users.findIndex(element => element._id == user.data._id);
  state.users.splice(index, 1);
  state.user = user;
};

const SET = (state, user) => {
  state.user = user;
};

export default {
  SET_ALL,
  UPDATE,
  SET,
  REMOVE,
  STORE
};
