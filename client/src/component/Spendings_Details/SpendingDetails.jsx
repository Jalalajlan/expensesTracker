import React from "react";
import "./expenses.scss";
import Form from "../Form/Form";

const SpendingDetails = () => {
  return (
    <div className="expenses">
      <div className="expenses__dashboard">
        <div className="expenses__dashboard__summary"></div>
        <div className="expenses__dashboard__bar-chart">
          70% of budget spend
        </div>
      </div>
      <Form />
    </div>
  );
};

export default SpendingDetails;
