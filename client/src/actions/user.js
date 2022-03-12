import userService from "../api/userService";
import actionNames from "../constants";

const registerUser = (user) => async (dispatch) => {
  const { CREATE_USER, CREATE_USER_FAIL } = actionNames;

  try {
    const { data } = await userService.createUser(user);
    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const loginUser = (user) => async (dispatch) => {
  const { LOGIN_USER, LOGIN_USER_FAIL } = actionNames;

  try {
    const { data } = await userService.loginUser(user);
    dispatch({ type: LOGIN_USER, payload: data });
    localStorage.setItem(
      "user",
      JSON.stringify({ user: data, error: false, isSuccess: true })
    );
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const resetUser = () => async (dispatch) => {
  const { USER_RESET } = actionNames;
  dispatch({ type: USER_RESET, payload: { user: {}, error: false } });
};

const userAction = {
  loginUser,
  registerUser,
  resetUser,
};

export default userAction;
