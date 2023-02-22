import * as Type from "../types/Type";

export const loggedInOutUserAction = (value) => ({
  type: Type.LOGGED_IN,
  payload: value
});

export const getLoggedInAction = () => ({
  type: Type.GET_LOGIN_STATUS,
  payload: true
});
