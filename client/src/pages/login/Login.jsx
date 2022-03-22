import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";

import Modal from "../../component/Modal/Modal";
import { loginUser } from "../../actions/user";

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

  useEffect(() => {
    if (user.error === "invalid credentials") {
      alert("Error: please enter valid email and password");
      resetForm();
    }

    const userToken = localStorage.getItem("token");

    if (user.isAuthenticated === true || userToken) {
      setIsOpen(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      alert("password does not match with each other");
      resetForm();
    } else {
      dispatch(loginUser(formData));
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
