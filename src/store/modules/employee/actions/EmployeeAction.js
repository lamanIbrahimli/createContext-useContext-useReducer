import * as Type from "../types/Type";

export const addEmployeeAction = (employees) => ({
  type: Type.ADD_EMPLOYEES,
  payload: employees
});

export const getEmployeeAction = (employees = []) => ({
  type: Type.GET_EMPLOYEES,
  payload: []
});
