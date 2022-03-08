import React from "react";
import "./expenses.scss";
import Form from "../Form/Form";

const Expenses = () => {
  return (
    <div className="Expenses">
      <div className="Expenses__overview">Overview</div>
      <Form />
    </div>
  );
};

export default Expenses;
