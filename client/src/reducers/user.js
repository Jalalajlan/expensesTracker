/*******************************/
/*******************************/
/*******************************/
import actionNames from "./../constants/index";
/*******************************/

const userReducer = (user = {}, action) => {
  const { CREATE_USER, CREATE_USER_FAIL, USER_RESET } = actionNames;

  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case CREATE_USER_FAIL:
      return action.payload;
    case USER_RESET:
      return action.payload;
    default:
      return user;
  }
};

export default userReducer;
