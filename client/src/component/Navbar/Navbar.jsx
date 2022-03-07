import React from "react";
import accountIcon from "../../images/User.svg";
import logoutIcon from "../../images/log_out.svg";
import UserAvatar from "../../images/Avatar2.png";

const Navbar = () => {
  return (
    <div className="Navabar">
      <h1>Expense Tracker</h1>
      <div>
        <img src={UserAvatar} alt="User Avatar" />
        <div>
          <img src={accountIcon} alt="Account Icon" />
          <span>Jalalajlan@gmail.com</span>
          <img src={logoutIcon} alt="Logout Icon" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
