import axios from "axios";

const URL = "http://localhost:5000/expenses/";

const getPlans = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(URL, config);
};

const expensesService = {
  getPlans,
};

export default expensesService;
