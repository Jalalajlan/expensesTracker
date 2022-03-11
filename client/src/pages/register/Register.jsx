import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "./../../actions/user";

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const { error } = user;

  console.log(user);

  useEffect(() => {
    if (error) {
      alert("registeration failed");
    }

    if (Object.keys(user).length !== 0) {
      navigate("/login");
      dispatch(userAction.resetUser());
    }
  }, [user, navigate, error, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;
    if (name === "" || email === "" || password === "") {
      alert("all fields are required");
    } else {
      dispatch(userAction.registerUser(formData));
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="register">
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          <h2>Register an account now!</h2>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={onChange}
          />
          <input
            type="email"
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
          <input type="submit" value="Register now" />
          <Link to="/login">
            Have an account, <b>Login now</b>
          </Link>
        </form>
      </div>
      <div className="register__about"></div>
    </div>
  );
};

export default Register;
