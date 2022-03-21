import axios from "axios";

const URL = "http://localhost:5000/expenses/";

export const getSpendingPlans = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(URL, config);
};

export const createSpendingPlan = (spendingPlan, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(URL, spendingPlan, config);
};

export const deleteSpendPlan = (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete(`${URL}/${id}`, config);
};
