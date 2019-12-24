import Api from "@/api";

const mainRoute = "departaments";

const fetch = () => {
  return new Promise(async resolve => {
    const result = await Api.query(mainRoute);
    resolve(result.data);
  });
};

const put = (id, data) => {
  return new Promise(async resolve => {
    const result = await Api.put(mainRoute, id, data);
    resolve(result.data);
  });
};

const get = id => {
  return new Promise(async resolve => {
    const result = await Api.get(mainRoute, id);
    resolve(result.data);
  });
};

export default { fetch, get, put };
