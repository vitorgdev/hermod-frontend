import api from "../_api";

const store = async (context, data) => {
  const result = await api.store(data);
  context.commit("STORE", result);
};

const list = async context => {
  const result = await api.fetch();
  console.log(result);

  context.commit("SET_ALL", result.data);
};

const edit = async (context, data) => {
  const result = await api.put(data._id, data);
  context.commit("UPDATE", result);
};

const remove = async (context, id) => {
  const result = await api.remove(id);
  context.commit("REMOVE", result);
};

const changeStatus = async (context, data) => {
  const result = await api.patch(data.item._id, { status: !data.value });
  context.commit("UPDATE", result);
};

const get = async (context, id) => {
  const result = await api.get(id);
  context.commit("SET", result);
};

export default {
  list,
  edit,
  get,
  remove,
  store,
  changeStatus
};
