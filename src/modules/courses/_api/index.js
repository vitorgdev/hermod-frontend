import Api from "@/api";

const fetch = () => {
  return new Promise(async resolve => {
    const result = await Api.query("courses");
    resolve(result.data);
  });
};

const put = (id, data) => {
  return new Promise(async resolve => {
    const result = await Api.put("courses", id, data);
    resolve(result.data);
  });
};

const get = id => {
  return new Promise(async resolve => {
    const result = await Api.get("courses", id);
    resolve(result.data);
  });
};

export default { fetch, get, put };
