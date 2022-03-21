import "./navbar.scss";

import LogoutIcon from "../../images/log_out.svg";
import logo from "../../images/totalExpenses.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "./../../actions/user";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="app-navbar">
      <div className="app-logo">
        <img src={logo} alt="Logo Icon" />
        <h3>Expenses.io</h3>
      </div>
      <div className="account-details">
        <p>Hi, Jalal</p>
        <button
          onClick={() => {
            dispatch(logoutUser());
            navigate("/");
          }}
        >
          Sign out <img src={LogoutIcon} alt="Log out Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
