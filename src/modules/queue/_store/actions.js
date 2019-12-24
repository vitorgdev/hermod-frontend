import api from "../_api";

const generateNumber = async (context, params) => {
  console.log("apa");

  const result = await api.create(params);
  console.log(result);
};

export default {
  generateNumber
};
