import { useState } from "react";
import "./spendingplanform.scss";
import CloseIcon from "../../images/close.svg";
import { useDispatch } from "react-redux";
import { addSpedningPlan } from "../../actions/expenses";

const SpendingPlanForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    planName: "",
    budget: "",
  });

  const [error, setError] = useState();

  const { planName, budget } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (planName === "" && budget === "") alert("Please enter valid Data");
    const userSavedToken = JSON.parse(localStorage.getItem("token"));
    dispatch(addSpedningPlan(formData, userSavedToken));
    resetForm();
    setError(true);
  };

  const resetForm = () => {
    setFormData({
      planName: "",
      budget: "",
    });
  };

  return (
    <div className="spending-plan-form-modal">
      <div className="spending-plan-form-modal__background">
        <img
          src={CloseIcon}
          alt="close modal icon"
          onClick={() => closeModal()}
        />
        <p className="success-notify">
          {error ? "spending has been added successfully ..." : null}{" "}
        </p>
        <form onSubmit={handleSubmit} autoComplete={false}>
          <p>Add new spending plan</p>
          <input
            type="text"
            name="planName"
            value={planName}
            placeholder="new spending plan name ..."
            onChange={(e) =>
              setFormData({ ...formData, planName: e.target.value })
            }
          />
          <input
            type="text"
            name="budget"
            value={budget}
            pattern="[0-9]*"
            placeholder="spending plane budegt 200RM ..."
            onChange={(e) =>
              setFormData({
                ...formData,
                budget: e.target.validity.valid ? e.target.value : budget,
              })
            }
          />
          <button type="submit">Add spending plan</button>
        </form>
      </div>
    </div>
  );
};

export default SpendingPlanForm;
