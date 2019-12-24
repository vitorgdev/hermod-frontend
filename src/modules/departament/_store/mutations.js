const SET_ALL = (state, departaments) => {
  state.departaments = departaments;
};

const UPDATE = (state, departament) => {
  let index = state.departaments.findIndex(
    element => element._id == departament.data._id
  );
  state.departaments[index] = departament.data;
  state.departament = departament;
};

const REMOVE = (state, departament) => {
  let index = state.departaments.findIndex(
    element => element._id == departament.data._id
  );
  state.departaments.splice(index, 1);
  console.log(state.departaments);
  return;
  state.departament = departament;
};

const SET = (state, departament) => {
  state.departament = departament;
};

export default {
  SET_ALL,
  UPDATE,
  SET,
  REMOVE
};
