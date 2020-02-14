import Api from "@/api";

const mainRoute = "users";

const store = data => {
  return new Promise(async resolve => {
    const result = await Api.post(mainRoute, data);
    resolve(result.data);
  });
};

const fetch = filters => {
  return new Promise(async resolve => {
    const result = await Api.query(mainRoute, filters);
    resolve(result.data);
  });
};

const put = (id, data) => {
  return new Promise(async resolve => {
    const result = await Api.put(mainRoute, id, data);
    resolve(result.data);
  });
};

const remove = id => {
  return new Promise(async resolve => {
    const result = await Api.delete(mainRoute, id);
    resolve(result.data);
  });
};

const patch = (id, data) => {
  return new Promise(async resolve => {
    const result = await Api.patch(mainRoute, id, data);
    resolve(result.data);
  });
};

const get = id => {
  return new Promise(async resolve => {
    const result = await Api.get(mainRoute, id);
    resolve(result.data);
  });
};

export default { fetch, get, put, remove, store, patch };
