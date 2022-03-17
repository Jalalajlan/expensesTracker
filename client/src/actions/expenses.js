import expensesService from "./../api/expensesService";
import { GET_PLAN, GET_PLAN_FAIL } from "./types";

const userToken = JSON.parse(localStorage.getItem("token"));  
console.log(userToken);

const getUserPlans = () => async (dispatch) => {
  try {
    const { data } = await expensesService.getPlans(userToken);
    dispatch({ type: GET_PLAN, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PLAN_FAIL,
      payload: error.response.data.message,
    });
  }
};

const expenseActions = {
  getUserPlans,
};

export default expenseActions;
