import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Expenses from "../../component/Expenses/Expenses";

const SpendingsTrack = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <Expenses />
      <p>spending Plan ID: {id}</p>
    </>
  );
};

export default SpendingsTrack;
