import * as Type from "../types/Type";

export const EmployeeReducer = (state, action) => {
  switch (action.type) {
    case Type.GET_EMPLOYEES:
      return {
        ...state,
        employee: action.payload
      };

    case Type.ADD_EMPLOYEES:
      state.employee.unshift(action.payload);

      return {
        ...state,
        employee: state.employees
      };

    default:
      return state;
  }
};
