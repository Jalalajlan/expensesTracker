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
