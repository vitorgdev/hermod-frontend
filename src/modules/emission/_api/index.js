import Api from "@/api";

const fetch = () => {
  return new Promise(async resolve => {
    try {
      const result = await Api.query("courses");
      console.log(result, "PASSOU");
      resolve(result.data);
    } catch (error) {
      console.log("ERRO");
    }
  });
};

export default { fetch };
