import userService from "../api/userService";
import actionNames from "../constants";

const getUser = (dispatch) => {
  const { FETCH_USER } = actionNames;

  try {
    const { data } = await userService.fetchUser();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

const createUser = (dispatch) => {
  const { FETCH_USER } = actionNames;

  try {
    const { data } = await userService.fetchUser();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

const userAction = {
  getUser,
  createUser,
};

export default userAction;
