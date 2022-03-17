import "./dashboard.scss";

import { useEffect } from "react";

import Navbar from "./../../component/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import expenseActions from "./../../actions/expenses";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  /********************************/
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(expenseActions.getUserPlans());
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Dashboard;
