import "./dashboard.scss";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./../../component/Navbar/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Dashboard;
