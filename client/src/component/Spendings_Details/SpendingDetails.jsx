import React from "react";
import "./expenses.scss";
import AddSpendingForm from "../AddSpendingForm/AddSpendingForm";

const SpendingDetails = ({ budget, totalSpendings, balance }) => {
  return (
    <div className="spendings-details">
      <div className="spendings-details__overall">
        <div className="spendings-details__overall__cards">
          <div className="budget-card">
            <span>budget</span>
            <p>RM {budget}</p>
          </div>
          <div className="total-spendings-card">
            <span>Spendings</span>
            <p>RM {totalSpendings}</p>
          </div>
          <div className="balance-card">
            <span>Balance</span>
            <p>RM {balance}</p>
          </div>
        </div>
      </div>
      <AddSpendingForm />
    </div>
  );
};

export default SpendingDetails;
