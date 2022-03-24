import { register, login } from "./../api/userService";
import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOG_OUT_USER,
} from "./types";

export const registerNewUser = (userData) => async (dispatch) => {
  try {
    const { data } = await register(userData);
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await login(userData);
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: LOGIN_USER, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({ type: LOG_OUT_USER });
};
