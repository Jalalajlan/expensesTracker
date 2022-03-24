import DeleteIcon from "../../images/delete.svg";
import { useDispatch } from "react-redux";
import { deleteSpendingExpense } from "./../../actions/expenses";

const SpendingTransactions = ({ transactions, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="transactions-history">
      {transactions.length ? (
        transactions.map((transaction, index) => (
          <div key={index} className="transaction-card">
            <p>{transaction.category}</p>
            <p>{transaction.note}</p>
            <p>RM {transaction.amount}</p>
            <img
              src={DeleteIcon}
              alt="Delete transactio Icon"
              width={"20px"}
              height="20px"
              onClick={() => {
                dispatch(
                  deleteSpendingExpense(
                    id,
                    transaction._id,
                    JSON.parse(localStorage.getItem("token"))
                  )
                );
                window.location.reload();
              }}
            />
          </div>
        ))
      ) : (
        <b>there are not transaction yet ...</b>
      )}
    </div>
  );
};

export default SpendingTransactions;
