import "./dashboard.scss";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./../../component/Navbar/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (Object.keys(user.user).length === 0 && user.error === false) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Dashboard;
