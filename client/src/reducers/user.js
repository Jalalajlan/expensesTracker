/*******************************/
import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOG_OUT_USER,
} from "./../actions/types";

const initalState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading: true,
};

const userReducer = (user = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return {
        ...user,
        isAuthenticated: true,
        error: false,
        loading: false,
        user: payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...user,
        isAuthenticated: false,
        error: payload,
        loading: true,
        user: null,
      };

    case LOGIN_USER:
      return { ...user, isAuthenticated: true, error: false, user: payload };
    case LOGIN_USER_FAIL:
      return { ...user, isAuthenticated: false, error: payload, user: null };

    case LOG_OUT_USER:
      return initalState;

    default:
      return user;
  }
};

export default userReducer;
