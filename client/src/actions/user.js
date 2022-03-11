import userService from "../api/userService";
import actionNames from "../constants";

const getUser = () => async (dispatch) => {
  const { FETCH_USER } = actionNames;

  try {
    const { data } = await userService.fetchUser();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

const registerUser = (user) => async (dispatch) => {
  const { CREATE_USER, CREATE_USER_FAIL } = actionNames;

  try {
    const { data } = await userService.createUser(user);
    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: { error: "unable to create user" },
    });
  }
};

const resetUser = () => async (dispatch) => {
  const { USER_RESET } = actionNames;
  dispatch({ type: USER_RESET, payload: {} });
};

const userAction = {
  getUser,
  registerUser,
  resetUser,
};

export default userAction;
