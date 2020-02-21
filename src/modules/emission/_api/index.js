import Api from "@/api";

const fetch = () => {
  return new Promise(async resolve => {
    try {
      const result = await Api.query("courses");
      resolve(result.data);
    } catch (error) {}
  });
};

export default { fetch };
