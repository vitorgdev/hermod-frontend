import Api from "@/api";

const mainRoute = "auth";

const store = data => {
  return new Promise(async resolve => {
    const result = await Api.post(mainRoute, data);
    resolve(result.data);
  });
};

const fetch = data => {
  return new Promise(async resolve => {
    const result = await Api.query("users", data);
    resolve(result.data);
  });
};

export default { store, fetch };
