import userService from "../api/userService";
import {
  CREATE_USER,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOG_OUT
} from "./types";

const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await userService.createUser(user);
    localStorage.setItem("token", JSON.stringify(data.token) );
    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await userService.loginUser(user);
    localStorage.setItem("token", JSON.stringify(data.token));
    dispatch({ type: LOGIN_USER, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};


const logout = () => async (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOG_OUT });
};

const userAction = {
  loginUser,
  registerUser,
  logout
};

export default userAction;
