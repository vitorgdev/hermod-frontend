import api from "../_api";

const getCourses = async context => {
  const result = await api.fetch();
  context.commit("COURSES_UPDATED", result);
};

const editCourse = async (context, data) => {
  const result = await api.put(data.id, data);
  context.commit("UPDATED_COURSE", result);
};

const getCourse = async (context, id) => {
  const result = await api.get(id);
  context.commit("SET_COURSE", result);
};

export default {
  getCourses,
  getCourse,
  editCourse
};
