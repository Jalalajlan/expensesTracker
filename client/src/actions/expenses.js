import {
  GET_SPENDING_PLANS,
  GET_SPENDING_PLANS_FAIL,
  ADD_SPENDING_PLAN,
  ADD_SPENDING_PLAN_FAIL,
  DELETE_SPENDING_PLAN,
  DELETE_SPENDING_PLAN_FAIL,
} from "./types";
import {
  createSpendingPlan,
  getSpendingPlans,
  deleteSpendPlan,
} from "./../api/expensesService";

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

export const addSpedningPlan =
  (spendingPlan, userSavedToken) => async (dispatch) => {
    try {
      const { data } = await createSpendingPlan(spendingPlan, userSavedToken);
      dispatch({ type: ADD_SPENDING_PLAN, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_SPENDING_PLAN_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const deleteSpendingPlan = (id, userSavedToken) => async (dispatch) => {
  try {
    await deleteSpendPlan(id, userSavedToken);
    dispatch({ type: DELETE_SPENDING_PLAN, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_SPENDING_PLAN_FAIL,
      payload: error.response.data.message,
    });
  }
};
