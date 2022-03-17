/*******************************/
import {
  CREATE_USER,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOG_OUT,
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
    case CREATE_USER:
      return {
        ...user,
        isAuthenticated: true,
        error: false,
        loading: false,
        user: payload,
      };
    case CREATE_USER_FAIL:
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


    case LOG_OUT: 
      return initalState;

    default:
      return user;
  }
};

export default userReducer;
