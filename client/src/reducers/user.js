/*******************************/
/*******************************/
/*******************************/
import actionNames from "./../constants/index";
/*******************************/

// Get user from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
const initalState = { user: {}, error: false };

const userReducer = (user, action) => {
  const {
    CREATE_USER,
    CREATE_USER_FAIL,
    USER_RESET,
    LOGIN_USER,
    LOGIN_USER_FAIL,
  } = actionNames;

  storedUser ? (user = storedUser) : (user = initalState);

  switch (action.type) {
    // User Registeration Reducers
    case CREATE_USER:
      return { ...user, user: action.payload, error: false };
    case CREATE_USER_FAIL:
      return { ...user, error: action.payload, user: {} };
    case USER_RESET:
      user.user = {};
      user.error = false;
      return user;

    // User Login Reducers
    case LOGIN_USER:
      return { ...user, user: action.payload, error: false };
    case LOGIN_USER_FAIL:
      return { ...user, error: action.payload, user: {} };

    default:
      return user;
  }
};

export default userReducer;
