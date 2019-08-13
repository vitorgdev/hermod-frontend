const COURSES_UPDATED = (state, courses) => {
  state.courses = courses;
};

const UPDATED_COURSE = (state, course) => {
  state.course = course;
};

const SET_COURSE = (state, course) => {
  state.course = course;
};

export default {
  COURSES_UPDATED,
  SET_COURSE,
  UPDATED_COURSE
};
