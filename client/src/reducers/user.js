/*******************************/
/*******************************/
/*******************************/
import actionNames from "./../constants/index";
/*******************************/

const userReducer = (user = [], action) => {
  const { FETCH_USER, CREATE_USER } = actionNames;

  switch (action.Type) {
    case FETCH_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    default:
      return user;
  }
};

export default userReducer;
