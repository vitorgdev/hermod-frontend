import Api from "@/api";

const create = params => {
  return new Promise(async resolve => {
    const result = await Api.post("numbers", params);
    resolve(result.data);
  });
};

export default { create };
