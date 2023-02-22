import * as Type from "../types/Type";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case Type.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload
      };

    case Type.GET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload
      };

    default:
      return state;
  }
};
