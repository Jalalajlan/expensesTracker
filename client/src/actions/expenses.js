import { GET_SPENDING_PLANS, GET_SPENDING_PLANS_FAIL } from "./types";
import { getSpendingPlans } from "./../api/expensesService";

export const getExpensesPlans = (userSavedToken) => async (dispatch) => {
  try {
    const { data } = await getSpendingPlans(userSavedToken);
    dispatch({ type: GET_SPENDING_PLANS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SPENDING_PLANS_FAIL,
      payload: error.response.data.message,
    });
  }
};
