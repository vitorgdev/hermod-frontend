import api from "../_api";

const getCourses = async context => {
  const result = await api.fetch();
  console.log(result);

  context.commit("COURSES_UPDATED", result);
};

export default {
  getCourses
};
