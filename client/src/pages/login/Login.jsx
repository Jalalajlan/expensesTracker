import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import userAction from "./../../actions/user";
import Modal from "./../../component/Modal/modal";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [isopen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (user.error === "invalid credentials") {
      alert("please enter valid email and password");
      resetForm();
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      alert("password does not match with each other");
    } else {
      if (user.error === "invalid credentials") {
        alert("please enter valid email and password");
        resetForm();
      } else {
        dispatch(userAction.loginUser(formData));
        setIsOpen(true);
      }
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      password2: "",
    });
  };

  const closeModal = () => {
    setIsOpen(!isopen);
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
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={onChange}
          />
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            value={formData.password2}
            onChange={onChange}
          />
          <input type="submit" value="Login" />
          <Link to="/register">
            Don't have an account, <b>Register now</b>
          </Link>
        </form>
      </div>
      <div className="login__about"></div>
      {isopen && <Modal message={"successful login"} closeModal={closeModal} />}
    </div>
  );
};

export default Login;
