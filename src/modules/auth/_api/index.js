import Api from "@/api";

const mainRoute = "auth";

const store = data => {
  return new Promise(async resolve => {
    const result = await Api.post(mainRoute, data);
    resolve(result.data);
  });
};

const fetch = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Api.query("check", data);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export default { store, fetch };
