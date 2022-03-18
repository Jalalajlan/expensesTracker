import "./navbar.scss";

import LogoutIcon from "../../images/log_out.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "./../../actions/user";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex Navbar">
      <h1>Expenses Tracker</h1>
      <div className="flex Navbar__account">
        <button
          className="flex"
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
