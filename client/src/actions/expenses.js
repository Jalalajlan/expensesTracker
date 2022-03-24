import {
  GET_SPENDING_PLANS,
  ADD_SPENDING_PLAN,
  DELETE_SPENDING_PLAN,
  ADD_SPENDING_EXPENSE,
  GET_SPENDING_EXPENSE,
  SPENDING_PLANS_ERROR,
  DELETE_SPENDING_EXPENSE,
} from "./types";

import {
  createSpendingPlan,
  getSpendingPlans,
  deleteSpendPlan,
  addSpendings,
  getSpendingsOfPlan,
  deleteExpense,
} from "./../api/expensesService";

export const getExpensesPlans = (userSavedToken) => async (dispatch) => {
  try {
    const { data } = await getSpendingPlans(userSavedToken);
    dispatch({ type: GET_SPENDING_PLANS, payload: data });
  } catch (error) {
    dispatch({
      type: SPENDING_PLANS_ERROR,
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
        type: SPENDING_PLANS_ERROR,
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
      type: SPENDING_PLANS_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const addSpendingAmount =
  (spendingPlanId, formData, userSavedToken) => async (dispatch) => {
    try {
      const { data } = await addSpendings(
        spendingPlanId,
        formData,
        userSavedToken
      );
      dispatch({ type: ADD_SPENDING_EXPENSE, payload: data });
    } catch (error) {
      dispatch({
        type: SPENDING_PLANS_ERROR,
        payload: error.response.data.message,
      });
    }
  };

export const getSpendingPlan =
  (spendingPlanId, userSavedToken) => async (dispatch) => {
    try {
      const { data } = await getSpendingsOfPlan(spendingPlanId, userSavedToken);
      dispatch({ type: GET_SPENDING_EXPENSE, payload: data });
    } catch (error) {
      dispatch({
        type: SPENDING_PLANS_ERROR,
        payload: error.response.data.message,
      });
    }
  };

export const deleteSpendingExpense =
  (spendingPlanId, expenseID, userSavedToken) => async (dispatch) => {
    try {
      await deleteExpense(spendingPlanId, expenseID, userSavedToken);
      dispatch({ type: DELETE_SPENDING_EXPENSE, payload: expenseID });
    } catch (error) {
      dispatch({
        type: SPENDING_PLANS_ERROR,
        payload: error.response.data.message,
      });
    }
  };
