import Api from "@/api";

const fetch = () => {
  return new Promise(async resolve => {
    const result = await Api.query("courses");
    resolve(result.data);
  });
};

export default { fetch };
