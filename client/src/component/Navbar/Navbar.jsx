import "./navbar.scss";

import LogoutIcon from "../../images/log_out.svg";
import { useNavigate } from "react-router-dom";
import userAction from "./../../actions/user";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex Navbar">
      <h1>Expenses Tracker</h1>
      <div className="flex Navbar__account">
        <button
          className="flex"
          onClick={() => {
            dispatch(userAction.resetUser());
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Sign out <img src={LogoutIcon} alt="Log out Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
