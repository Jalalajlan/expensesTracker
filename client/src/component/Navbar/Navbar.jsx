import "./navbar.scss";

import LogoutIcon from "../../images/log_out.svg";
import UserAvatar from "../../images/Avatar2.png";

const Navbar = () => {
  return (
    <div className="flex Navbar">
      <h1>Expenses Tracker</h1>
      <div className="flex Navbar__account">
        <img src={UserAvatar} alt="User Avatar" />
        <button className="flex" onClick={() => {}}>
          Sign out <img src={LogoutIcon} alt="Log out Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
