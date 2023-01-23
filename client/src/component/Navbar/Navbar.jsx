import "./Navbar.scss";

import LogoutIcon from "../../images/log_out.svg";
import logo from "../../images/totalExpenses.svg";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "./../../actions/user";

const Navbar = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="app-navbar">
      <div className="app-logo" onClick={() => navigate("/dashboard")}>
        <img src={logo} alt="Logo Icon" />
        <h3>Expenses.io</h3>
        <Link to="/dashboard" style={{ fontWeight: "bold", color: "black" }}>
          Dashboard
        </Link>
      </div>
      <div className="account-details">
        <p>Hi, {email}</p>
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
