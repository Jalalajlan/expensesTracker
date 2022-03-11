import "./login.scss";
import { Link } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login">
      <div className="login__form">
        <form onSubmit={handleSubmit}>
          <h2>Login into your account Now!</h2>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={onChange}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={onChange}
          />
          <input type="text" placeholder="confirm password" />
          <input type="submit" value="Login" />
          <Link to="/register">
            Don't have an account, <b>Register now</b>
          </Link>
        </form>
      </div>
      <div className="login__about"></div>
    </div>
  );
};

export default Login;
